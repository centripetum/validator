# @centripetum/validator

A form validator for Centripetum, but useful anywhere.

## For developers

### How it works

The Centripetum validator library uses monads from the [sanctuary.js](https://sanctuary.js.org/) library to handle both null values ([Maybe](https://sanctuary.js.org/#MaybeType)) and errors ([Either](https://sanctuary.js.org/#EitherType)).

The Maybe type is an [Option Type](https://en.wikipedia.org/wiki/Option_type) and is polymorphic, that is, it can take on one of two different values: `Just(value)` and `Nothing`, where `value` is a JS type such as a string, number, boolean, or object. `Just` wraps the value; `Nothing` means there is no value. Both are of type `Maybe`.

So a function that accepts or returns a `Maybe` can accept, for example, `Just(3)` or `Nothing` without violating its type constraint (and without resorting to null or undefined). If it receives a `Just`, then it unwraps the value, does something with it, and then returns a new Maybe. The new Maybe could be the same `Just(3)`, or it could be a new wrapped value (e.g., if it squared the value, then `Just(9)`), or it could be `Nothing`.

If the input is `Nothing`, then the function generally does nothing and just returns it.

_This permits us to compose (chain) functions together without blowing things up._ Each function in the composition receives and passes along a `Maybe`. If the `Maybe` is a `Just(value)`, then it acts on the `value` (whatever that might be), and passes it (or `Nothing`) along. But if the value is `Nothing`, it simply passes it along. Nice!

The Either type is also polymorphic, but here the possible values are `Left(a)` or `Right(b)`. Typically, `a` and `b` are different types, such as a string for the `Left` and a number for the `Right`. Often, as is the case with the Centripetum validator, Either types are used to handle errors. The "success" value is wrapped in a `Right`, while the "failure" error is wrapped in a `Left`. This allows the error to be of a different type (typically a string or an object) than the value being tested, which could be anything.

So in our validator, values will be passed in as either `Just(value)` or `Nothing`. If the validation is a success, then the validator will return a `Right(Just(value))`. If it fails, then it will return a `Left(errors)`. For the validator, we have created an error object on the following pattern:

```javascript
// src/utilities/createError/index.js
export default (errorType, value, testValue) => ({
  errorType, // A constant representing the type, e.g. IS_NULL
  testValue, // The value we are testing against (optional)
  value      // The value to be validated (required)
})
```

Here is an example of an failure (`Left(error)`):

```javascript
Left ({"errorType": "NOT_GT", "testValue": Just (20), "value": Just (19)})
```

Here is an example of a success (`Right(value)`):

```javascript
Right (Just (21))
```

### Flow

We are using Flow to express types. These type annotations are stripped out by Babel when it compiles our code, but they permit us to be very specific about what types we expect our functions to accept and to return (without having to use TypeScript). To use flow in a file, add a comment at the top of the file. Flow types are just the JS types (string, number, etc.), or types provided by libraries such as sanctuary.js, such as Maybe and Either. Here is an example of a function with Flow type validation:

```javascript
// src/fieldValidators/string/gtChars
// @flow

import { Either, Left, Maybe, Right, gt, isNothing } from 'sanctuary'

import { TOO_FEW_CHARACTERS } from '../../../errorTypes'
import charCount from '../../../utilities/charCount'
import createError from '../../../utilities/createError'

export default (testValue: Maybe): Function => (value: Maybe): Either =>
  isNothing(value) || gt(testValue)(charCount(value))
    ? Right(value)
    : Left(createError(TOO_FEW_CHARACTERS, value, testValue))
```

This is the `gtChars` function used to check that the value has _more than_ (greater than: gt) a specified number of characters. For example, if the `testValue` was 5 characters, then "Sammy" would fail, but "Beatrice" would pass. Note that the `Either` and `Maybe` have to be imported from 'sanctuary' even though they are only used for type annotation.

While we're here, let's see how this works.

`gtChars` is a function that accepts a `testValue` wrapped in a `Maybe`. This is the number of characters we need to exceed to pass the validation.

`gtChars` _returns_ a function&mdash;a "closure"&mdash;that "remembers" the value of `testValue`. This new function takes a `value`, also a `Maybe`, and returns an `Either`, that is _either_ a `Right` success containing the value (with is a `Maybe`), or a `Left` failure containing an error message. This is all covered in this line:

```javascript
export default (testValue: Maybe): Function => (value: Maybe): Either =>
```

Then we do two checks. First, we check if the value is `Nothing`. If it is, we wrap it in a `Right` and return it as a success. It is not the `gtChars` function's job to decide whether `Nothing` is an acceptable value. Remember: `Nothing` gets passed along, not acted on.

Next, if the value is not `Nothing`, we use our `charCount` utility function to count the number of characters (returned as a `Maybe`, of course), and then we use sanctuary's `gt` (greater than) function to check if our character count is greater than our test value. Sanctuary's `gt` will accept two `Maybe` values and will unwrap them to test the inner values against each other, so this works even though we are passing `Just(5)` and `Just('Sammy')` instead of `5` and `'Sammy'`.

If the `gt` function returns true, we wrap the input value in a `Right` and return it as a "success", e.g., `Right(Just('Beatrice'))`. If it returns false, then we create an error object with our `createError` utility function, passing it the error constant, the value (a `Maybe`), and the testValue (also a `Maybe`). That error gets wrapped in a `Left` and returned.

It's much easier than it looks.

Here we are using Sanctuary.js _instead of_ Ramda. Sanctuary is very picky about types, so we'll have to be careful, but that's a _good thing_ for a validator, right?

### Base validators

The base validators are the low-level validators that handle comparisons (relations), type checking, etc. These are then combined to make field-specific validators, such as `gtChars` with the help of a few utility functions, such as `charCount` and `wordCount`. Here are the current base validators, with more to come:

#### after
Checks that a date is **after** another date.

#### and
Combines two or more base validators with a Boolean **AND**: Success only if ALL pass.

#### before
Checks that a date is **before** another date.

#### equalTo
Checks that a value is strictly equal to (**identical to**) another: 7 === '7' fails.

#### gt
Checks that one number is **greater than** another number.

#### gte
Checks that one number is **greater than or equal to** another number.

#### lt
Checks that one number is **less than** another number.

#### lte
Checks that one number is **less than or equal to** another number.

#### notEqualTo
Checks that a value is _not_ strictly equal to (**identical to**) another: 7 === '7' passes.

#### onOrAfter
Checks that a date is **on or after** another date.

#### onOrBefore
Checks that a date is **on or before** another date.

#### or
Combines two or more base validators with a Boolean **OR**: Success if ANY one passes.

### Field validators

Field validators are intended to be used on actual fields: string fields, number fields, checkboxes, selctors, url and email fields, etc. Here are the current field validators:

#### gtChars
Checks that a string of characters has **more than** a specified number of characters

#### gteChars
Checks that a string of characters has **no fewer than** a specified number of characters

#### ltChars
Checks that a string of characters has **fewer than** a specified number of characters

#### lteChars
Checks that a string of characters has **no more than** a specified number of characters

### Storybook, JSDocs, and tests

Storybook provides examples you can see. To start storybook, run `yarn storybook`.

There are also JSDocs for the API. Look in the `/docs` folder and open the `index.html` file in a browser. To regenerate the docs, use `yarn docs`

And there are unit and integration tests. To run them, use `yarn test` and `yarn coverage`.

More soon.
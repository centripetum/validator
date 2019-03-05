import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import isString from './'
import { storiesOf } from '@storybook/react'

storiesOf('typeValidators/isString', module)
  .add("Just('test')", () => (
    <code>
      <b>isString(Just('test'))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just ('test'))
      <br />
      <br />
      Actual:
      <br />
      {show(isString(Just('test')))}
    </code>
  ))
  .add("Just('')", () => (
    <code>
      <b>isString(Just(''))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just (''))
      <br />
      <br />
      Actual:
      <br />
      {show(isString(Just('')))}
    </code>
  ))
  .add('Nothing', () => (
    <code>
      <b>isString(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Right(Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(isString(Nothing))}
    </code>
  ))
  .add('Just(0)', () => (
    <code>
      <b>isString(Just(0))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_STRING"{`}`}], "value":
      Just (0){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(isString(Just(0)))}
    </code>
  ))
  .add('Just(false)', () => (
    <code>
      <b>isString(Just(false))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_STRING"{`}`}], "value":
      Just (false){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(isString(Just(false)))}
    </code>
  ))
  .add('Just([1,2,3])', () => (
    <code>
      <b>isString(Just([1,2,3]))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_STRING"{`}`}], "value":
      Just ([1, 2, 3]){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(isString(Just([1, 2, 3])))}
    </code>
  ))
  .add('Just({ test: true })', () => (
    <code>
      <b>
        isString({`{`} test: true {`}`})
      </b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_STRING"{`}`}], "value":
      Just ({`{`}"test": true{`}`}){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(isString(Just({ test: true })))}
    </code>
  ))

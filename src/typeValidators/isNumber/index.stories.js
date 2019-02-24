import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import isNumber from './'
import { storiesOf } from '@storybook/react'

storiesOf('typeValidators/isNumber', module)
  .add('Just(12)', () => (
    <code>
      <b>isNumber(Just(12))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just (12))
      <br />
      <br />
      Actual:
      <br />
      {show(isNumber(Just(12)))}
    </code>
  ))
  .add('Just(12.01)', () => (
    <code>
      <b>isNumber(Just(12.01))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just (12.01))
      <br />
      <br />
      Actual:
      <br />
      {show(isNumber(Just(12.01)))}
    </code>
  ))
  .add('Nothing', () => (
    <code>
      <b>isNumber(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_NUMBER"{'}'}], "value":
      Nothing{'}'})
      <br />
      <br />
      Actual:
      <br />
      {show(isNumber(Nothing))}
    </code>
  ))
  .add("Just('test')", () => (
    <code>
      <b>isNumber(Just('test'))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_NUMBER"{'}'}], "value":
      Just ("test"){'}'})
      <br />
      <br />
      Actual:
      <br />
      {show(isNumber(Just('test')))}
    </code>
  ))
  .add('Just(false)', () => (
    <code>
      <b>isNumber(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_NUMBER"{'}'}], "value":
      Just (false){'}'})
      <br />
      <br />
      Actual:
      <br />
      {show(isNumber(Just(false)))}
    </code>
  ))
  .add('Just([1, 2, 3])', () => (
    <code>
      <b>isNumber(Just([1, 2, 3]))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_NUMBER"{'}'}], "value":
      Just ([1, 2, 3]){'}'})
      <br />
      <br />
      Actual:
      <br />
      {show(isNumber(Just([1, 2, 3])))}
    </code>
  ))
  .add('Just({ test: true })', () => (
    <code>
      <b>isNumber(Just([1, 2, 3]))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_NUMBER"{'}'}], "value":
      Just ({`{`}"test": true{`}`}){'}'})
      <br />
      <br />
      Actual:
      <br />
      {show(isNumber(Just({ test: true })))}
    </code>
  ))

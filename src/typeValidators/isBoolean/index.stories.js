import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import isBoolean from './'
import { storiesOf } from '@storybook/react'

storiesOf('typeValidators/isBoolean', module)
  .add('Just(true)', () => (
    <code>
      <b>isBoolean(Just(true))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just (true))
      <br />
      <br />
      Actual:
      <br />
      {show(isBoolean(Just(true)))}
    </code>
  ))
  .add('Just(false)', () => (
    <code>
      <b>isBoolean(Just(false))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just (false))
      <br />
      <br />
      Actual:
      <br />
      {show(isBoolean(Just(false)))}
    </code>
  ))
  .add('Nothing', () => (
    <code>
      <b>isBoolean(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Right(Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(isBoolean(Nothing))}
    </code>
  ))
  .add('Just(0)', () => (
    <code>
      <b>isBoolean(Just(0))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_BOOLEAN"{'}'}], "value":
      Just (0){'}'})
      <br />
      <br />
      Actual:
      <br />
      {show(isBoolean(Just(0)))}
    </code>
  ))
  .add("Just('true')", () => (
    <code>
      <b>isBoolean(Just('true'))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_BOOLEAN"{'}'}], "value":
      Just ("true"){'}'})
      <br />
      <br />
      Actual:
      <br />
      {show(isBoolean(Just('true')))}
    </code>
  ))
  .add("Just('')", () => (
    <code>
      <b>isBoolean(Just(''))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_BOOLEAN"{'}'}], "value":
      Just (""){'}'})
      <br />
      <br />
      Actual:
      <br />
      {show(isBoolean(Just('')))}
    </code>
  ))
  .add('Just([1, 2, 3])', () => (
    <code>
      <b>isBoolean(Just([1, 2, 3]))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_BOOLEAN"{'}'}], "value":
      Just ([1, 2, 3]){'}'})
      <br />
      <br />
      Actual:
      <br />
      {show(isBoolean(Just([1, 2, 3])))}
    </code>
  ))
  .add('Just({ test: true })', () => (
    <code>
      <b>isBoolean(Just({`{`} test: true }`))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_BOOLEAN"{'}'}], "value":
      Just ({`{`}"test": true{`}`}){'}'})
      <br />
      <br />
      Actual:
      <br />
      {show(isBoolean(Just({ test: true })))}
    </code>
  ))

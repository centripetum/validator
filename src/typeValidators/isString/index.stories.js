import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Just, show, Nothing } from 'sanctuary'

import isString from './'

storiesOf('typeValidators/isString', module)
  .add("Just('test')", () => (
    <code>
      isString(Just('test'))
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
      isString(Just(''))
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
  .add('Just(0)', () => (
    <code>
      isString(Just(0))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_A_STRING", "value": Just(0){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(isString(Just(0)))}
    </code>
  ))
  .add('Just(false)', () => (
    <code>
      isString(Just(false))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_A_STRING", "value": Just(false){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(isString(Just(false)))}
    </code>
  ))
  .add('Just([1,2,3])', () => (
    <code>
      isString(Just([1,2,3]))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_A_STRING", "value": Just([1,2,3]){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(isString(Just([1, 2, 3])))}
    </code>
  ))
  .add('Just({ test: true })', () => (
    <code>
      isString({`{`} test: true {`}`})
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_A_STRING", "value": Just ({`{`} test: true{' '}
      {`}`}){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(isString(Just({ test: true })))}
    </code>
  ))
  .add('Nothing', () => (
    <code>
      isString(Nothing)
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_A_STRING", "value": Nothing{`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(isString(Nothing))}
    </code>
  ))

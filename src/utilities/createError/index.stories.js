import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Just, Nothing, show } from 'sanctuary'

import createError from './'

storiesOf('utilities/createError', module)
  .add('errorType: IS_NULL, value: Nothing', () => (
    <code>
      createError(IS_NULL, Nothing)
      <br />
      <br />
      Expected:
      <br />
      {`{`}"errorType": "IS_NULL", "value": Nothing{`}`}
      <br />
      <br />
      Actual:
      <br />
      {show(createError('IS_NULL', Nothing))}
    </code>
  ))
  .add('errorType: NOT_GT, value: Just(5), testValue: Just(7)', () => (
    <code>
      createError(NOT_GT, Just(5), Just(7))
      <br />
      <br />
      Expected:
      <br />
      {`{`}"errorType": "NOT_GT", "testValue": Just (7), "value": Just (5){`}`}
      <br />
      <br />
      Actual:
      <br />
      {show(createError('NOT_GT', Just(5), Just(7)))}
    </code>
  ))

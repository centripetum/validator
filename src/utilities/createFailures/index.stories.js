import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import createFailures from './'
import { storiesOf } from '@storybook/react'

storiesOf('utilities/createFailures', module)
  .add('errorType: IS_NULL, value: Nothing', () => (
    <code>
      <b>createFailures(IS_NULL, Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      {`{`}"errorType": "IS_NULL", "value": Nothing{`}`}
      <br />
      <br />
      Actual:
      <br />
      {show(createFailures('IS_NULL', Nothing))}
    </code>
  ))
  .add('errorType: NOT_GT, value: Just(5), testValue: Just(7)', () => (
    <code>
      <b>createFailures(NOT_GT, Just(5), Just(7))</b>
      <br />
      <br />
      Expected:
      <br />
      {`{`}"errorType": "NOT_GT", "testValue": Just (7), "value": Just (5){`}`}
      <br />
      <br />
      Actual:
      <br />
      {show(createFailures('NOT_GT', Just(5), Just(7)))}
    </code>
  ))

import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { show, Just, Nothing } from 'sanctuary'

import notNull from './'

storiesOf('baseValidators/notNull', module)
  .add("Just('test')", () => (
    <code>
      notNull(Just('test'))
      <br />
      <br />
      Expected:
      <br />
      Right (Just('test'))
      <br />
      <br />
      Actual:
      <br />
      {show(notNull(Just('test')))}
    </code>
  ))
  .add('Nothing', () => (
    <code>
      notNull(Nothing)
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`} errorType: "IS_NULL", value: Nothing {`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(notNull(Nothing))}
    </code>
  ))

import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import notNull from './'
import { storiesOf } from '@storybook/react'

storiesOf('baseValidators/notNull', module)
  .add("Just('test')", () => (
    <code>
      <b>notNull(Just('test'))</b>
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
      <b>notNull(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "IS_NULL"{`}`}], "value":
      Nothing{`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(notNull(Nothing))}
    </code>
  ))

import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { show } from 'sanctuary'

import valueWrapper from './'

storiesOf('utilities/valueWrapper', module)
  .add('0', () => (
    <code>
      valueWrapper(0)
      <br />
      <br />
      Expected:
      <br />
      Just (0)
      <br />
      <br />
      Actual:
      <br />
      {show(valueWrapper(0))}
    </code>
  ))
  .add("'Some text input'", () => (
    <code>
      valueWrapper('Some text input')
      <br />
      <br />
      Expected:
      <br />
      Just ('Some text input')
      <br />
      <br />
      Actual:
      <br />
      {show(valueWrapper('Some text input'))}
    </code>
  ))
  .add('false', () => (
    <code>
      valueWrapper(false)
      <br />
      <br />
      Expected:
      <br />
      Just (false)
      <br />
      <br />
      Actual:
      <br />
      {show(valueWrapper(false))}
    </code>
  ))
  .add('[1, 2, 3]', () => (
    <code>
      valueWrapper([1, 2, 3])
      <br />
      <br />
      Expected:
      <br />
      Just ([1, 2, 3])
      <br />
      <br />
      Actual:
      <br />
      {show(valueWrapper([1, 2, 3]))}
    </code>
  ))
  .add('{ test: true }', () => (
    <code>
      valueWrapper({`{`} test: true {`}`})
      <br />
      <br />
      Expected:
      <br />
      Just ({`{`} test: true {`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(valueWrapper({ test: true }))}
    </code>
  ))
  .add("''", () => (
    <code>
      valueWrapper('')
      <br />
      <br />
      Expected:
      <br />
      Nothing
      <br />
      <br />
      Actual:
      <br />
      {show(valueWrapper(''))}
    </code>
  ))
  .add('null', () => (
    <code>
      valueWrapper(null)
      <br />
      <br />
      Expected:
      <br />
      Nothing
      <br />
      <br />
      Actual:
      <br />
      {show(valueWrapper(null))}
    </code>
  ))
  .add('undefined', () => (
    <code>
      valueWrapper()
      <br />
      <br />
      Expected:
      <br />
      Nothing
      <br />
      <br />
      Actual:
      <br />
      {show(valueWrapper())}
    </code>
  ))

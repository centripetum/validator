import * as React from 'react'

import { show } from 'sanctuary'
import { storiesOf } from '@storybook/react'
import valueWrapper from './'

storiesOf('utilities/valueWrapper', module)
  .add('valueWrapper(0)', () => (
    <code>
      <b>valueWrapper(0)</b>
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
  .add("valueWrapper('Some text input')", () => (
    <code>
      <b>valueWrapper('Some text input')</b>
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
  .add('valueWrapper(false)', () => (
    <code>
      <b>valueWrapper(false)</b>
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
  .add('valueWrapper([1, 2, 3])]', () => (
    <code>
      <b>valueWrapper([1, 2, 3])</b>
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
  .add('valueWrapper({ test: true })', () => (
    <code>
      <b>
        valueWrapper({`{`} test: true {`}`})
      </b>
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
  .add("valueWrapper('')", () => (
    <code>
      <b>valueWrapper('')</b>
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
  .add('valueWrapper(null)', () => (
    <code>
      <b>valueWrapper(null)</b>
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
  .add('valueWrapper()', () => (
    <code>
      <b>valueWrapper()</b>
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

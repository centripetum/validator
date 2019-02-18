import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import isEmpty from './'
import { storiesOf } from '@storybook/react'

const arr = [1, 2, 3]

storiesOf('utilities/isEmpty', module)
  .add(`Not empty`, () => (
    <code>
      <b>isEmpty({show(arr)})</b>
      <br />
      <br />
      Expected:
      <br />
      false
      <br />
      <br />
      Actual:
      <br />
      {show(isEmpty(arr))}
    </code>
  ))
  .add(`Empty`, () => (
    <code>
      <b>isEmpty([])</b>
      <br />
      <br />
      Expected:
      <br />
      true
      <br />
      <br />
      Actual:
      <br />
      {show(isEmpty([]))}
    </code>
  ))

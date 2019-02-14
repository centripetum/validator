import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import flatMap from './'
import { storiesOf } from '@storybook/react'

const arr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10], 11], 12]

storiesOf('utilities/flatMap', module)
  .add(`flatMap(${arr})`, () => (
    <code>
      <b>flatMap({show(arr)})</b>
      <br />
      <br />
      Expected:
      <br />
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      <br />
      <br />
      Actual:
      <br />
      {show(flatMap(arr))}
    </code>
  ))
  .add(`flatMap([])`, () => (
    <code>
      <b>flatMap([])</b>
      <br />
      <br />
      Expected:
      <br />
      []
      <br />
      <br />
      Actual:
      <br />
      {show(flatMap([]))}
    </code>
  ))

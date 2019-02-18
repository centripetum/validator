import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import flatMap from './'
import { storiesOf } from '@storybook/react'

const nested = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10], 11], 12]
const unnested = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

storiesOf('utilities/flatMap', module)
  .add(`Nested`, () => (
    <code>
      <b>flatMap({show(nested)})</b>
      <br />
      <br />
      Expected:
      <br />
      {show(unnested)}
      <br />
      <br />
      Actual:
      <br />
      {show(flatMap(nested))}
    </code>
  ))
  .add(`Unnested`, () => (
    <code>
      <b>flatMap({show(unnested)})</b>
      <br />
      <br />
      Expected:
      <br />
      {show(unnested)}
      <br />
      <br />
      Actual:
      <br />
      {show(flatMap(unnested))}
    </code>
  ))
  .add(`Empty`, () => (
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

import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import lte from './'
import { storiesOf } from '@storybook/react'

storiesOf('baseValidators/lte', module)
  .add('11 <= 12?', () => (
    <code>
      <b>lte(Just(12))(Just(11))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just (11))
      <br />
      <br />
      Actual:
      <br />
      {show(lte(Just(12))(Just(11)))}
    </code>
  ))
  .add('12 <= 12?', () => (
    <code>
      <b>lte(Just(12))(Just(12))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just (12))
      <br />
      <br />
      Actual:
      <br />
      {show(lte(Just(12))(Just(12)))}
    </code>
  ))
  .add('13 <= 12?', () => (
    <code>
      <b>lte(Just(12))(Just(13))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_LTE", "testValue": Just
      (12){`}`}], "value": Just (13){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(lte(Just(12))(Just(13)))}
    </code>
  ))
  .add('Nothing <= 12?', () => (
    <code>
      <b>lte(Just(12))(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(lte(Just(12))(Nothing))}
    </code>
  ))

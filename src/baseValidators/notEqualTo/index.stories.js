import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import notEqualTo from './'
import { storiesOf } from '@storybook/react'

storiesOf('baseValidators/notEqualTo', module)
  .add('19 !== 20?', () => (
    <code>
      <b>notEqualTo(Just(20))(Just(19))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just (19))
      <br />
      <br />
      Actual:
      <br />
      {show(notEqualTo(Just(20))(Just(19)))}
    </code>
  ))
  .add('20 !== 20?', () => (
    <code>
      <b>notEqualTo(Just(20))(Just(20))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": undefined, "testValue": Just
      (20){`}`}], "value": Just (20){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(notEqualTo(Just(20))(Just(20)))}
    </code>
  ))
  .add('21 !== 20?', () => (
    <code>
      <b>notEqualTo(Just(20))(Just(21))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just (21))
      <br />
      <br />
      Actual:
      <br />
      {show(notEqualTo(Just(20))(Just(21)))}
    </code>
  ))
  .add('Nothing !== 20?', () => (
    <code>
      <b>notEqualTo(Just(20))(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(notEqualTo(Just(20))(Nothing))}
    </code>
  ))

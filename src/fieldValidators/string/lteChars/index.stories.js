import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import lteChars from './'
import { storiesOf } from '@storybook/react'

storiesOf('fieldValidators/string/lteChars', module)
  .add("Just('Bob') <= 3 characters?", () => (
    <code>
      <b>lteChars(Just(3))(Just('Bob'))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just ("Bob"))
      <br />
      <br />
      Actual:
      <br />
      {show(lteChars(Just(3))(Just('Bob')))}
    </code>
  ))
  .add("Just('Tommy') <= 3 characters?", () => (
    <code>
      <b>lteChars(Just(3))(Just('Tommy'))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "TOO_MANY_CHARACTERS", "testValue": Just (3),
      "value": Just ("Tommy"){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(lteChars(Just(3))(Just('Tommy')))}
    </code>
  ))
  .add('Nothing <= 3 characters?', () => (
    <code>
      <b>lteChars(Just(3))(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(lteChars(Just(3))(Nothing))}
    </code>
  ))
  .add("Just('Tommy') <= Nothing characters?", () => (
    <code>
      <b>lteChars(Nothing)(Just('Tommy'))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "TOO_MANY_CHARACTERS", "testValue": Nothing,
      "value": Just ("Tommy"){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(lteChars(Nothing)(Just('Tommy')))}
    </code>
  ))

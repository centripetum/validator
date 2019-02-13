import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import lteWords from './'
import { storiesOf } from '@storybook/react'

storiesOf('fieldValidators/string/lteWords', module)
  .add("Just('Bob is dead!') <= 3 words?", () => (
    <code>
      <b>lteWords(Just(3))(Just('Bob is dead!'))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just ("Bob is dead!"))
      <br />
      <br />
      Actual:
      <br />
      {show(lteWords(Just(3))(Just('Bob is dead!')))}
    </code>
  ))
  .add("Just('Tommy is no more, too.') <= 3 words?", () => (
    <code>
      <b>lteWords(Just(3))(Just('Tommy is no more, too.'))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "TOO_MANY_WORDS", "testValue": Just (3), "value":
      Just ("Tommy is no more, too."){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(lteWords(Just(3))(Just('Tommy is no more, too.')))}
    </code>
  ))
  .add('Nothing <= 3 words?', () => (
    <code>
      <b>lteWords(Just(3))(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(lteWords(Just(3))(Nothing))}
    </code>
  ))
  .add("Just('Tommy is no more, too.') <= Nothing words?", () => (
    <code>
      <b>lteWords(Nothing)(Just('Tommy is no more, too.'))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "TOO_MANY_WORDS", "testValue": Nothing, "value":
      Just ("Tommy is no more, too."){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(lteWords(Nothing)(Just('Tommy is no more, too.')))}
    </code>
  ))

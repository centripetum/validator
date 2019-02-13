import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import gteWords from './'
import { storiesOf } from '@storybook/react'

storiesOf('fieldValidators/string/gteWords', module)
  .add("Just('Bob is dead!') >= 5 words?", () => (
    <code>
      <b>gteWords(Just(5))(Just('Bob is dead!'))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "TOO_FEW_WORDS", "testValue":
      Just (5){`}`}], "value": Just ("Bob is dead!"){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(gteWords(Just(5))(Just('Bob is dead!')))}
    </code>
  ))
  .add("Just('Tommy is no more, too!') >= 5 words?", () => (
    <code>
      <b>gteWords(Just(5))(Just('Tommy is no more, too!'))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just ("Tommy is no more, too!"))
      <br />
      <br />
      Actual:
      <br />
      {show(gteWords(Just(5))(Just('Tommy is no more, too!')))}
    </code>
  ))
  .add('Nothing >= 5 words?', () => (
    <code>
      <b>gteWords(Just(5))(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(gteWords(Just(5))(Nothing))}
    </code>
  ))
  .add("Just('Tommy is no more, too!') >= Nothing words?", () => (
    <code>
      <b>gteWords(Nothing)(Just('Tommy is no more, too!'))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just ("Tommy is no more, too!"))
      <br />
      <br />
      Actual:
      <br />
      {show(gteWords(Nothing)(Just('Tommy is no more, too!')))}
    </code>
  ))

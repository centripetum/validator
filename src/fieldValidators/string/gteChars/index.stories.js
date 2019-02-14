import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import gteChars from './'
import { storiesOf } from '@storybook/react'

storiesOf('fieldValidators/string/gteChars', module)
  .add("Just('Bob') >= 5 characters?", () => (
    <code>
      <b>gteChars(Just(5))(Just('Bob'))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "TOO_FEW_CHARACTERS",
      "testValue": Just (5){`}`}], "value": Just ("Bob"){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(gteChars(Just(5))(Just('Bob')))}
    </code>
  ))
  .add("Just('Tommy') >= 5 characters?", () => (
    <code>
      <b>gteChars(Just(5))(Just('Tommy'))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just ("Tommy"))
      <br />
      <br />
      Actual:
      <br />
      {show(gteChars(Just(5))(Just('Tommy')))}
    </code>
  ))
  .add('Nothing >= 5 characters?', () => (
    <code>
      <b>gteChars(Just(5))(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(gteChars(Just(5))(Nothing))}
    </code>
  ))
  .add("Just('Tommy') >= Nothing characters?", () => (
    <code>
      <b>gteChars(Nothing)(Just('Tommy'))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just ("Tommy"))
      <br />
      <br />
      Actual:
      <br />
      {show(gteChars(Nothing)(Just('Tommy')))}
    </code>
  ))

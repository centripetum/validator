import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import gtChars from './'
import { storiesOf } from '@storybook/react'

storiesOf('fieldValidators/string/gtChars', module)
  .add("Just('Bob') > 3 characters?", () => (
    <code>
      <b>gtChars(Just(3))(Just('Bob'))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "TOO_FEW_CHARACTERS",
      "testValue": Just (3){`}`}], "value": Just ("Bob"){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(gtChars(Just(3))(Just('Bob')))}
    </code>
  ))
  .add("Just('Tommy') > 3 characters?", () => (
    <code>
      <b>gtChars(Just(3))(Just('Tommy'))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just ("Tommy"))
      <br />
      <br />
      Actual:
      <br />
      {show(gtChars(Just(3))(Just('Tommy')))}
    </code>
  ))
  .add('Nothing > 3 characters?', () => (
    <code>
      <b>gtChars(Just(3))(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(gtChars(Just(3))(Nothing))}
    </code>
  ))
  .add("Just('Tommy') > Nothing characters?", () => (
    <code>
      <b>gtChars(Nothing)(Just('Tommy'))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just ("Tommy"))
      <br />
      <br />
      Actual:
      <br />
      {show(gtChars(Nothing)(Just('Tommy')))}
    </code>
  ))

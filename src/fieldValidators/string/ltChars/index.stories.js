import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import ltChars from './'
import { storiesOf } from '@storybook/react'

storiesOf('fieldValidators/string/ltChars', module)
  .add("Just('Bob') < 5 characters?", () => (
    <code>
      <b>ltChars(Just(5))(Just('Bob'))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just ("Bob"))
      <br />
      <br />
      Actual:
      <br />
      {show(ltChars(Just(5))(Just('Bob')))}
    </code>
  ))
  .add("Just('Tommy') < 5 characters?", () => (
    <code>
      <b>ltChars(Just(5))(Just('Tommy'))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "TOO_MANY_CHARACTERS", "testValue": Just (5),
      "value": Just ("Tommy"){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(ltChars(Just(5))(Just('Tommy')))}
    </code>
  ))
  .add('Nothing < 5 characters?', () => (
    <code>
      <b>ltChars(Just(5))(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(ltChars(Just(5))(Nothing))}
    </code>
  ))
  .add("Just('Tommy') < Nothing characters?", () => (
    <code>
      <b>ltChars(Nothing)(Just('Tommy'))</b>
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
      {show(ltChars(Nothing)(Just('Tommy')))}
    </code>
  ))

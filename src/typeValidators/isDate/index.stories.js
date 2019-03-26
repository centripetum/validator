import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import isDate from './'
import { storiesOf } from '@storybook/react'

storiesOf('typeValidators/isDate', module)
  .add('Just(new Date())', () => (
    <code>
      <b>isDate(Just(new Date()))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just (new Date({new Date().toISOString()})))
      <br />
      <br />
      Actual:
      <br />
      {show(isDate(Just(new Date())))}
    </code>
  ))
  .add('Just(new Date("2018-05-04T00:00:00.000Z"))', () => (
    <code>
      <b>isDate(Just(new Date()))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just (new Date('2018-05-04T00:00:00.000Z')))
      <br />
      <br />
      Actual:
      <br />
      {show(isDate(Just(new Date('2018-05-04T00:00:00.000Z'))))}
    </code>
  ))
  .add('Just(new Date("May 4th"))', () => (
    <code>
      <b>isDate(Just(new Date('May 4th')))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_DATE_TIME"{`}`}],
      "value": Just (new Date (NaN)){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(isDate(Just(new Date('May 4th'))))}
    </code>
  ))
  .add('Just(new Date(NaN))', () => (
    <code>
      <b>isDate(Just(new Date(NaN)))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_A_DATE_TIME"{`}`}],
      "value": Just (NaN){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(isDate(Just(NaN)))}
    </code>
  ))

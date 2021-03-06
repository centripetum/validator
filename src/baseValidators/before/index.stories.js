import * as React from 'react'

import { Nothing, parseDate, show } from 'sanctuary'

import before from './'
import { storiesOf } from '@storybook/react'

storiesOf('baseValidators/before', module)
  .add('2000-12-31 before 2001-01-01?', () => (
    <code>
      <b>before(parseDate('2001-01-01'))(parseDate('2000-12-31'))</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Just (new Date ("2000-12-31T00:00:00.000Z")))
      <br />
      <br />
      Actual:
      <br />
      {show(before(parseDate('2001-01-01'))(parseDate('2000-12-31')))}
    </code>
  ))
  .add('2001-01-01 before 2001-01-01?', () => (
    <code>
      <b>before(parseDate('2001-01-01'))(parseDate('2001-01-01'))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_BEFORE_DATE_TIME",
      "testValue": Just (new Date ("2001-01-01T00:00:00.000Z")){`}`}], "value":
      Just (new Date ("2001-01-01T00:00:00.000Z")){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(before(parseDate('2001-01-01'))(parseDate('2001-01-01')))}
    </code>
  ))
  .add('2001-01-02 before 2001-01-01?', () => (
    <code>
      <b>before(parseDate('2001-01-01'))(parseDate('2001-01-02'))</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "NOT_BEFORE_DATE_TIME",
      "testValue": Just (new Date ("2001-01-01T00:00:00.000Z")){`}`}], "value":
      Just (new Date ("2001-01-02T00:00:00.000Z")){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(before(parseDate('2001-01-01'))(parseDate('2001-01-02')))}
    </code>
  ))
  .add('Nothing before 2001-01-01?', () => (
    <code>
      <b>before(parseDate('2001-01-01'))(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(before(parseDate('2001-01-01'))(Nothing))}
    </code>
  ))

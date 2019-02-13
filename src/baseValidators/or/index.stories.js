import * as React from 'react'

import { Just, Left, Right, show } from 'sanctuary'

import createFailures from '../../utilities/createFailures'
import or from './'
import { storiesOf } from '@storybook/react'

const value = Just(1)
const testValue = Just('test')
const success = v => Right(v)
const failure = e => v => Left(createFailures('FAILURE_' + e, v, testValue))

storiesOf('baseValidators/or', module)
  .add('success OR success', () => (
    <code>
      const value = {show(value)}
      <br />
      const success = v =&gt; Right(v)
      <br />
      <br />
      <b>or(success, success)(value)</b>
      <br />
      <br />
      Expected:
      <br />
      Right ({show(value)})
      <br />
      <br />
      Actual:
      <br />
      {show(or(success, success)(value))}
    </code>
  ))
  .add('success OR success OR success', () => (
    <code>
      const value = {show(value)}
      <br />
      const success = v =&gt; Right(v)
      <br />
      <br />
      <b>or(success, success, success)(value)</b>
      <br />
      <br />
      Expected:
      <br />
      Right ({show(value)})
      <br />
      <br />
      Actual:
      <br />
      {show(or(success, success, success)(value))}
    </code>
  ))
  .add('failure OR success', () => (
    <code>
      const value = {show(value)}
      <br />
      const testValue = {show(testValue)}
      <br />
      const success = v =&gt; Right(v)
      <br />
      const failure = e =&gt; v =&gt; Left(createFailures('FAILURE_' + e, v,
      testValue))
      <br />
      <br />
      <b>or(failure('x'), success)(value)</b>
      <br />
      <br />
      Expected:
      <br />
      Right ({show(value)})
      <br />
      <br />
      Actual:
      <br />
      {show(or(failure('x'), success)(value))}
    </code>
  ))
  .add('success OR failure', () => (
    <code>
      const value = {show(value)}
      <br />
      const testValue = {show(testValue)}
      <br />
      const success = v =&gt; Right(v)
      <br />
      const failure = e =&gt; v =&gt; Left(createFailures('FAILURE_' + e, v,
      testValue))
      <br />
      <br />
      <b>or(success, failure('y'))(value)</b>
      <br />
      <br />
      Expected:
      <br />
      Right ({show(value)})
      <br />
      <br />
      Actual:
      <br />
      {show(or(success, failure('y'))(value))}
    </code>
  ))
  .add('failure OR failure', () => (
    <code>
      const value = {show(value)}
      <br />
      const testValue = Just('test')
      <br />
      const failure = e =&gt; v =&gt; Left(createFailures('FAILURE_' + e, v,
      testValue))
      <br />
      <br />
      <b>or(failure('x'), failure('y'))(value)</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "FAILURE_x", "testValue": Just
      ("test"){`}`}, {`{`}"errorType": "FAILURE_y", "testValue": Just ("test")
      {`}`}], "value": Just (1){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(or(failure('x'), failure('y'))(value))}
    </code>
  ))
  .add('failure OR failure OR failure', () => (
    <code>
      const value = {show(value)}
      <br />
      const testValue = {show(testValue)}
      <br />
      const failure = e =&gt; v =&gt; Left(createFailures('FAILURE_' + e, v,
      testValue))
      <br />
      <br />
      or(failure('x'), failure('y'), failure('x'))(value)
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "FAILURE_x", "testValue": Just
      ("test"){`}`}, {`{`}"errorType": "FAILURE_y", "testValue": Just ("test")
      {`}`}], "value": Just (1){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(or(failure('x'), failure('y'), failure('x'))(value))}
    </code>
  ))

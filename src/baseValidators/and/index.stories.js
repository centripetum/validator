import * as React from 'react'

import { Just, Left, Right, show } from 'sanctuary'

import and from './'
import createFailures from '../../utilities/createFailures'
import { storiesOf } from '@storybook/react'

const value = Just(1)
const testValue = Just('test')
const success = v => Right(v)
const failure = e => v => Left(createFailures('FAILURE_' + e, v, testValue))

storiesOf('baseValidators/and', module)
  .add('success AND success', () => (
    <code>
      const value = {show(value)}
      <br />
      const success = v =&gt; Right(v)
      <br />
      <br />
      <b>and([success, success])(value)</b>
      <br />
      <br />
      Expected:
      <br />
      Right ({show(value)})
      <br />
      <br />
      Actual:
      <br />
      {show(and([success, success])(value))}
    </code>
  ))
  .add('success AND success AND success', () => (
    <code>
      const value = {show(value)}
      <br />
      const success = v =&gt; Right(v)
      <br />
      <br />
      <b>and([success, success, success])(Just(1))</b>
      <br />
      <br />
      Expected:
      <br />
      Right ({show(value)})
      <br />
      <br />
      Actual:
      <br />
      {show(and([success, success, success])(value))}
    </code>
  ))
  .add('failure AND success', () => (
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
      <b>and([failure('x'), success])({show(value)})</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "FAILURE_x", "testValue":{' '}
      {show(testValue)}
      {`}`}], "value": {show(value)}
      {`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(and([failure('x'), success])(value))}
    </code>
  ))
  .add('success AND failure', () => (
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
      <b>and([success, failure('y')])({show(value)})</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "FAILURE_y", "testValue":{' '}
      {show(testValue)}
      {`}`}], "value": {show(value)}
      {`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(and([success, failure('y')])(value))}
    </code>
  ))
  .add('failure AND failure', () => (
    <code>
      const value = {show(value)}
      <br />
      const testValue = {show(testValue)}
      <br />
      const failure = e =&gt; v =&gt; Left(createFailures('FAILURE_' + e, v,
      testValue))
      <br />
      <br />
      <b>and([failure('x'), failure('y')])({show(value)})</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "FAILURE_x", "testValue":{' '}
      {show(testValue)}){`}`}, {`{`}"errorType": "FAILURE_y", "testValue": Just
      ("test")
      {`}`}], "value": {show(value)}
      {`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(and([failure('x'), failure('y')])(value))}
    </code>
  ))
  .add('failure AND failure AND failure', () => (
    <code>
      const value = {show(value)}
      <br />
      const testValue = {show(testValue)}
      <br />
      const failure = e =&gt; v =&gt; Left(createFailures('FAILURE_' + e, v,
      testValue))
      <br />
      <br />
      <b>and([failure('x'), failure('y'), failure('x')])({show(value)})</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "FAILURE_x", "testValue":{' '}
      {show(testValue)}){`}`}, {`{`}"errorType": "FAILURE_y", "testValue": Just
      ("test")
      {`}`}], "value": {show(value)}
      {`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(and([failure('x'), failure('y'), failure('x')])(value))}
    </code>
  ))

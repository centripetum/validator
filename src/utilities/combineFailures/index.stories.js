import * as React from 'react'

import { Just, Left, show } from 'sanctuary'

import combineFailures from './'
import createFailures from '../createFailures'
import { storiesOf } from '@storybook/react'

const failureOne = createFailures('FAIL_1', Just(1), Just(5))
const failureTwo = createFailures('FAIL_2', Just(3), Just(7))
const failureThree = createFailures('FAIL_3', Just(5), Just(9))

storiesOf('utilities/combineFailures', module)
  .add('handle single failure', () => (
    <code>
      const failureOne = createFailures('FAIL_1', Just(1), Just(5))
      <br />
      <br />
      <b>combineFailures([failureOne])</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "FAIL_1", "testValue": Just (5)
      {`}`}], "value": Just (1){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(combineFailures([failureOne]))}
    </code>
  ))
  .add('handle multiple errors', () => (
    <code>
      const failureOne = createFailures('FAIL_1', Just(1), Just(5))
      <br />
      const failureTwo = createFailures('FAIL_2', Just(3), Just(7))
      <br />
      const failureThree = createFailures('FAIL_3', Just(5), Just(9))
      <br />
      <br />
      <b>combineFailures([failureOne, failureTwo, failureThree])</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "FAIL_1", "testValue": Just (5)
      {`}`}, {`{`}"errorType": "FAIL_2", "testValue": Just (7){`}`}, {`{`}
      "errorType": "FAIL_3", "testValue": Just (9){`}`}], "value": Just (1){`}`}
      )
      <br />
      <br />
      Actual:
      <br />
      {show(combineFailures([failureOne, failureTwo, failureThree]))}
    </code>
  ))
  .add('handle duplicates', () => (
    <code>
      const failureOne = createFailures('FAIL_1', Just(1), Just(5))
      <br />
      const failureTwo = createFailures('FAIL_2', Just(3), Just(7))
      <br />
      <br />
      <b>combineFailures([failureOne, failureTwo, failureOne])</b>
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"failures": [{`{`}"errorType": "FAIL_1", "testValue": Just (5)
      {`}`}, {`{`}"errorType": "FAIL_2", "testValue": Just (7){`}`}], "value":
      Just (1){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(combineFailures([failureOne, failureTwo, failureOne]))}
    </code>
  ))

// @flow

import { Left, Nothing, Right, equals, isNothing } from 'sanctuary'

import { NOT_EQUAL_TO } from '../../errorTypes'
import createFailures from '../../utilities/createFailures'

export default (testValue: Maybe<mixed>): Function => (
  value: Maybe<mixed>
): Either<Failures, Maybe<mixed>> =>
  isNothing(value) || equals(value)(testValue)
    ? Right(value)
    : Left(createFailures(NOT_EQUAL_TO, value, testValue))

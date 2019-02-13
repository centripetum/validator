// @flow

import { Just, Left, Right, gte, isNothing } from 'sanctuary'

import { NOT_GTE } from '../../errorTypes'
import createFailures from '../../utilities/createFailures'

export default (testValue: Maybe<number>): Function => (
  value: Maybe<number>
): Either<Failures, Maybe<number>> =>
  isNothing(value) || gte(testValue)(value)
    ? Right(value)
    : Left(createFailures(NOT_GTE, value, testValue))

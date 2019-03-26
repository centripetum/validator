// @flow

import { Either, Left, Maybe, Right, isNothing, lte } from 'sanctuary'

import { NOT_LTE } from '../../errorTypes'
import createFailures from '../../utilities/createFailures'

export default (testValue: Maybe<number>): (() => mixed) => (
  value: Maybe<number>
): Either<Failures, Maybe<number>> =>
  isNothing(value) || lte(testValue)(value)
    ? Right(value)
    : Left(createFailures(NOT_LTE, value, testValue))

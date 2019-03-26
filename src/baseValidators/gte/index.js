// @flow

import { Either, Left, Maybe, Right, gte, isNothing } from 'sanctuary'

import { NOT_GTE } from '../../errorTypes'
import createFailures from '../../utilities/createFailures'

export default (testValue: Maybe<number>): (() => mixed) => (
  value: Maybe<number>
): Either<Failures, Maybe<number>> =>
  isNothing(value) || gte(testValue)(value)
    ? Right(value)
    : Left(createFailures(NOT_GTE, value, testValue))

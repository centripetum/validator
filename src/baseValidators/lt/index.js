// @flow

import { Either, Left, Maybe, Nothing, Right, isNothing, lt } from 'sanctuary'

import { NOT_LT } from '../../errorTypes'

import createFailures from '../../utilities/createFailures'

export default (testValue: Maybe<number>): (() => mixed) => (
  value: Maybe<number>
): Either<Failures, Maybe<number>> =>
  isNothing(value) || lt(testValue)(value)
    ? Right(value)
    : Left(createFailures(NOT_LT, value, testValue))

// @flow

import { Either, Left, Maybe, Right, equals, isNothing, not } from 'sanctuary'

import { NOT_UNEQUAL_TO } from '../../errorTypes'
import createFailures from '../../utilities/createFailures'

export default (testValue: Maybe<mixed>): (() => mixed) => (
  value: Maybe<mixed>
): Either<Failures, Maybe<mixed>> =>
  isNothing(value) || not(equals(value)(testValue))
    ? Right(value)
    : Left(createFailures(NOT_UNEQUAL_TO, value, testValue))

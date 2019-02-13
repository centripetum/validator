// @flow

import { Left, Right, equals, isNothing, min } from 'sanctuary'

import { NOT_ON_OR_BEFORE_DATE_TIME } from '../../errorTypes'
import createFailures from '../../utilities/createFailures'

export default (testValue: Maybe<Date>): Function => (
  value: Maybe<Date>
): Either<Failures, Maybe<Date>> =>
  isNothing(value) || equals(value)(min(testValue)(value))
    ? Right(value)
    : Left(createFailures(NOT_ON_OR_BEFORE_DATE_TIME, value, testValue))

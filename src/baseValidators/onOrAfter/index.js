// @flow

import { Left, Right, equals, isNothing, max } from 'sanctuary'

import { NOT_ON_OR_AFTER_DATE_TIME } from '../../errorTypes'
import createFailures from '../../utilities/createFailures'

export default (testValue: Maybe<Date>): Function => (
  value: Maybe<Date>
): Either<Failures, Maybe<Date>> =>
  isNothing(value) || equals(value)(max(testValue)(value))
    ? Right(value)
    : Left(createFailures(NOT_ON_OR_AFTER_DATE_TIME, value, testValue))

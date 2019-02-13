// @flow

import {
  Either,
  Left,
  Maybe,
  Right,
  equals,
  isNothing,
  max,
  not
} from 'sanctuary'

import { NOT_AFTER_DATE_TIME } from '../../errorTypes'
import createFailures from '../../utilities/createFailures'

export default (testValue: Maybe<Date>): Function => (
  value: Maybe<Date>
): Either<Failures, Maybe<Date>> =>
  isNothing(value) ||
  (not(equals(testValue)(value)) && equals(value)(max(testValue)(value)))
    ? Right(value)
    : Left(createFailures(NOT_AFTER_DATE_TIME, value, testValue))

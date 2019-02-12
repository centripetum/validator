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
import createError from '../../utilities/createError'

// after :: testValue -> value -> Either<Maybe<Date>>
export default function after (testValue: Maybe<Date>): Function {
  return (value: Maybe<Date>): Either<Maybe<Date>> =>
    isNothing(value) ||
    (not(equals(testValue)(value)) && equals(value)(max(testValue)(value)))
      ? Right(value)
      : Left(createError(NOT_AFTER_DATE_TIME, value, testValue))
}

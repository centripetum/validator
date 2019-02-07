import { Left, Right, equals, isNothing, min, not } from 'sanctuary'

import { NOT_BEFORE_DATE_TIME } from '../../errorTypes'
import createError from '../../utilities/createError'
import { BEGINNING_OF_TIME } from '../../constants'

export default (testValue = BEGINNING_OF_TIME) => value =>
  isNothing(value) ||
  (not(equals(testValue)(value)) && equals(value)(min(testValue)(value)))
    ? Right(value)
    : Left(createError(NOT_BEFORE_DATE_TIME, value, testValue))

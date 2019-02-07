import { Left, Right, equals, isNothing, max, not } from 'sanctuary'

import { NOT_AFTER_DATE_TIME } from '../../errorTypes'
import createError from '../../utilities/createError'
import { END_OF_TIME } from '../../constants'

export default (testValue = END_OF_TIME) => value =>
  isNothing(value) ||
  (not(equals(testValue)(value)) && equals(value)(max(testValue)(value)))
    ? Right(value)
    : Left(createError(NOT_AFTER_DATE_TIME, value, testValue))

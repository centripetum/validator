// @flow

import { Just, Left, Right, gt, isNothing } from 'sanctuary'

import { NOT_GT } from '../../errorTypes'
import createError from '../../utilities/createError'

export default (testValue: Maybe<Number>): Function => (
  value: Maybe<Number>
): Either<Object, Maybe<Number>> =>
  isNothing(value) || gt(testValue)(value)
    ? Right(value)
    : Left(createError(NOT_GT, value, testValue))

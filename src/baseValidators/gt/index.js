// @flow

import { Just, Left, Right, gt, isNothing } from 'sanctuary'

import { NOT_GT } from '../../errorTypes'
import createFailures from '../../utilities/createFailures'

export default (testValue: Maybe<number>): Function => (
  value: Maybe<number>
): Either<Failures, Maybe<number>> =>
  isNothing(value) || gt(testValue)(value)
    ? Right(value)
    : Left(createFailures(NOT_GT, value, testValue))

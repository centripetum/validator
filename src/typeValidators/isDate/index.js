// @flow

import {
  Maybe,
  isNothing,
  is,
  maybeToNullable,
  Left,
  Right,
  Either
} from 'sanctuary'
import $ from 'sanctuary-def'

import createFailures from '../../utilities/createFailures'
import { NOT_A_DATE_TIME } from '../../errorTypes'

export default (value: Maybe<Date>): Either<Failures, Maybe<mixed>> =>
  isNothing(value) || is($.ValidDate)(maybeToNullable(value))
    ? Right(value)
    : Left(createFailures(NOT_A_DATE_TIME, value))

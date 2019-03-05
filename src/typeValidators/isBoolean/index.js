// @flow

import {
  Either,
  Left,
  Maybe,
  Right,
  is,
  isNothing,
  maybeToNullable
} from 'sanctuary'

import $ from 'sanctuary-def'
import { NOT_A_BOOLEAN } from '../../errorTypes'
import createFailures from '../../utilities/createFailures'

export default (value: Maybe<Boolean>): Either<Failures, Maybe<Boolean>> =>
  isNothing(value) || is($.Boolean)(maybeToNullable(value))
    ? Right(value)
    : Left(createFailures(NOT_A_BOOLEAN, value))

// @flow

import {
  Either,
  Left,
  Maybe,
  Nothing,
  Right,
  is,
  isNothing,
  maybeToNullable
} from 'sanctuary'

import $ from 'sanctuary-def'
import { NOT_A_STRING } from '../../errorTypes'
import createFailures from '../../utilities/createFailures'

export default (value: Maybe<string>): Either<Failures, Maybe<string>> =>
  isNothing(value) || is($.String)(maybeToNullable(value))
    ? Right(value)
    : Left(createFailures(NOT_A_STRING, value))

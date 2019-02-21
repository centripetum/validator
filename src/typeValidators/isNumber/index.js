// @flow

import {
  Either,
  Left,
  Maybe,
  Nothing,
  Right,
  is,
  isJust,
  maybeToNullable,
  pipe,
  parseFloat
} from 'sanctuary'

import $ from 'sanctuary-def'

import { NOT_A_NUMBER } from '../../errorTypes'

import createFailures from '../../utilities/createFailures'

// Nothing, string, number

export default (value: Maybe<string>): Either<Failures, Maybe<string>> => {
  const parsedValue = pipe([maybeToNullable, String, parseFloat])(value)
  isJust(parsedValue)
    ? Right(parsedValue)
    : Left(createFailures(NOT_A_NUMBER, value))
}

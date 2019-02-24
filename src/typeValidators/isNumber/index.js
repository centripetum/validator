// @flow

import {
  Either,
  Left,
  Maybe,
  Right,
  isJust,
  maybeToNullable,
  pipe,
  parseFloat
} from 'sanctuary'

import { NOT_A_NUMBER } from '../../errorTypes'

import createFailures from '../../utilities/createFailures'

export default (value: Maybe<number>): Either<Failures, Maybe<number>> => {
  const parsedValue = pipe([maybeToNullable, String, parseFloat])(value)
  return isJust(parsedValue)
    ? Right(parsedValue)
    : Left(createFailures(NOT_A_NUMBER, value))
}

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

export default (value: Maybe<mixed>): Either<Failures, Maybe<mixed>> => {
  const parsedValue = pipe([maybeToNullable, String, parseFloat])(value)
  return isJust(parsedValue) && maybeToNullable(parsedValue)
    ? Right(parsedValue)
    : Left(createFailures(NOT_A_NUMBER, value))
}

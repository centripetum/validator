// @flow

import {
  Either,
  Left,
  Maybe,
  Nothing,
  Right,
  equals,
  isNothing
} from 'sanctuary'

import { NOT_EQUAL_TO } from '../../errorTypes'

import createFailures from '../../utilities/createFailures'

export default (testValue: Maybe<mixed>): (() => mixed) => (
  value: Maybe<mixed>
): Either<Failures, Maybe<mixed>> =>
  isNothing(value) || equals(value)(testValue)
    ? Right(value)
    : Left(createFailures(NOT_EQUAL_TO, value, testValue))

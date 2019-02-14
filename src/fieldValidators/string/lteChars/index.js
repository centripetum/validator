// @flow

import { Either, Left, Maybe, Right, isNothing, lte } from 'sanctuary'

import { TOO_MANY_CHARACTERS } from '../../../errorTypes'

import charCount from '../../../utilities/charCount'
import createFailures from '../../../utilities/createFailures'

export default (testValue: Maybe<number>): (() => mixed) => (
  value: Maybe<string>
): Either<Failures, Maybe<string>> =>
  isNothing(value) || lte(testValue)(charCount(value))
    ? Right(value)
    : Left(createFailures(TOO_MANY_CHARACTERS, value, testValue))

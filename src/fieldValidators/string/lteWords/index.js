// @flow

import { Either, Left, Maybe, Right, isNothing, lte } from 'sanctuary'

import { TOO_MANY_WORDS } from '../../../errorTypes'

import createFailures from '../../../utilities/createFailures'
import wordCount from '../../../utilities/wordCount'

export default (testValue: Maybe<number>): (() => mixed) => (
  value: Maybe<string>
): Either<Failures, Maybe<string>> =>
  isNothing(value) || lte(testValue)(wordCount(value))
    ? Right(value)
    : Left(createFailures(TOO_MANY_WORDS, value, testValue))

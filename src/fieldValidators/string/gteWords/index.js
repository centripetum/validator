// @flow

import { Either, Left, Maybe, Right, gte, isNothing } from 'sanctuary'

import { TOO_FEW_WORDS } from '../../../errorTypes'
import createFailures from '../../../utilities/createFailures'
import wordCount from '../../../utilities/wordCount'

export default (testValue: Maybe<number>): Function => (
  value: Maybe<string>
): Either<Failures, Maybe<string>> =>
  isNothing(value) || gte(testValue)(wordCount(value))
    ? Right(value)
    : Left(createFailures(TOO_FEW_WORDS, value, testValue))

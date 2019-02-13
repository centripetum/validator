// @flow

import { Left, Right, isNothing, lt } from 'sanctuary'

import { TOO_MANY_WORDS } from '../../../errorTypes'
import createFailures from '../../../utilities/createFailures'
import wordCount from '../../../utilities/wordCount'

export default (testValue: Maybe<number>): Function => (
  value: Maybe<string>
): Either<Failures, Maybe<string>> =>
  isNothing(value) || lt(testValue)(wordCount(value))
    ? Right(value)
    : Left(createFailures(TOO_MANY_WORDS, value, testValue))

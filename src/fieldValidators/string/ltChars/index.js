// @flow

import { Left, Right, isNothing, lt } from 'sanctuary'

import { TOO_MANY_CHARACTERS } from '../../../errorTypes'
import charCount from '../../../utilities/charCount'
import createFailures from '../../../utilities/createFailures'

export default (testValue: Maybe<number>): Function => (
  value: Maybe<string>
): Either<Failures, Maybe<string>> =>
  isNothing(value) || lt(testValue)(charCount(value))
    ? Right(value)
    : Left(createFailures(TOO_MANY_CHARACTERS, value, testValue))

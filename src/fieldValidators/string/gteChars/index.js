// @flow

import { Either, Left, Maybe, Right, gte, isNothing } from 'sanctuary'

import { TOO_FEW_CHARACTERS } from '../../../errorTypes'
import charCount from '../../../utilities/charCount'
import createFailures from '../../../utilities/createFailures'

export default (testValue: Maybe<number>): Function => (
  value: Maybe<string>
): Either<Failures, Maybe<string>> =>
  isNothing(value) || gte(testValue)(charCount(value))
    ? Right(value)
    : Left(createFailures(TOO_FEW_CHARACTERS, value, testValue))

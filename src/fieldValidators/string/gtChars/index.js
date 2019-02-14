// @flow

import { Either, Left, Maybe, Right, gt, isNothing } from 'sanctuary'

import { TOO_FEW_CHARACTERS } from '../../../errorTypes'

import charCount from '../../../utilities/charCount'
import createFailures from '../../../utilities/createFailures'

export default (testValue: Maybe<number>): (() => mixed) => (
  value: Maybe<string>
): Either<Failures, Maybe<string>> =>
  isNothing(value) || gt(testValue)(charCount(value))
    ? Right(value)
    : Left(createFailures(TOO_FEW_CHARACTERS, value, testValue))

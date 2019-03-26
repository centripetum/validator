// @flow

import { Either, Left, Maybe, Right, isJust } from 'sanctuary'

import { IS_NULL } from '../../errorTypes'
import createFailures from '../../utilities/createFailures'

export default (value: Maybe<mixed>): Either<Failures, Maybe<mixed>> =>
  isJust(value) ? Right(value) : Left(createFailures(IS_NULL, value))

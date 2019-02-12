// @flow

import { Either, Left, Maybe, Nothing, Right, isJust } from 'sanctuary'

import { IS_NULL } from '../../errorTypes'
import createError from '../../utilities/createError'

export default (value: Maybe<mixed> = Nothing): Either<Object, mixed> =>
  isJust(value) ? Right(value) : Left(createError(IS_NULL, value))

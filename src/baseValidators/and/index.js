// @flow

import { Left, Nothing, Right, equals, lefts, map, pipe, size } from 'sanctuary'

import combineFailures from '../../utilities/combineFailures'
import isEmpty from '../../utilities/isEmpty'

export default (funcs: Array<Function>): Function => (
  value: Maybe<mixed> = Nothing
): Either<Failures, mixed> => {
  const errors: Array<Left> = lefts(map(f => f(value))(funcs))

  return isEmpty(errors) ? Right(value) : combineFailures(errors)
}

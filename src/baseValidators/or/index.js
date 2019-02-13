// @flow

import { Left, Nothing, Right, lefts, map, rights } from 'sanctuary'

import combineFailures from '../../utilities/combineFailures'
import isEmpty from '../../utilities/isEmpty'

export default (funcs: Array<Function>): Function => (
  value: Maybe<mixed> = Nothing
): Either<Failures, mixed> => {
  const results: Array<Either<Failures, mixed>> = map(f => f(value))(funcs)

  return isEmpty(rights(results))
    ? combineFailures(lefts(results))
    : Right(value)
}

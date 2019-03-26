// @flow

import { Either, Maybe, Nothing, Right, lefts, map, rights } from 'sanctuary'

import combineFailures from '../../utilities/combineFailures'
import isEmpty from '../../utilities/isEmpty'

export default (validators: Array<() => mixed>): (() => mixed) => (
  value: Maybe<mixed> = Nothing
): Either<Failures, mixed> => {
  const results: Array<Either<Failures, mixed>> = map(validator =>
    validator(value)
  )(validators)

  return isEmpty(rights(results))
    ? combineFailures(lefts(results))
    : Right(value)
}

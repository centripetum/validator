// @flow

import {
  Either,
  Left,
  Maybe,
  Nothing,
  Right,
  equals,
  lefts,
  map,
  pipe,
  size
} from 'sanctuary'

import combineFailures from '../../utilities/combineFailures'
import isEmpty from '../../utilities/isEmpty'

export default (validators: Array<() => mixed>): (() => mixed) => (
  value: Maybe<mixed> = Nothing
): Either<Failures, mixed> => {
  const errors: Array<Left> = lefts(
    map(validator => validator(value))(validators)
  )

  return isEmpty(errors) ? Right(value) : combineFailures(errors)
}

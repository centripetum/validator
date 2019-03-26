// @flow

import {
  Left,
  head,
  map,
  maybeToNullable,
  pipe,
  prop,
  reduce,
  values
} from 'sanctuary'

import flatMap from '../flatMap'

const unique: () => mixed = pipe([
  reduce(xs => x => ({ ...xs, [prop('errorType')(x)]: x }))({}),
  values
])

const mergeFailures: (Array<Failures>) => mixed = pipe([
  map(prop('failures')),
  flatMap,
  unique
])

const getValue: (Array<Failures>) => mixed = pipe([
  head,
  maybeToNullable,
  prop('value')
])

export default (errors: Array<Failures>): Left<Failures> =>
  Left({
    failures: mergeFailures(errors),
    value: getValue(errors)
  })

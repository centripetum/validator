// @flow

import {
  Left,
  Nothing,
  equals,
  groupBy,
  head,
  isJust,
  join,
  map,
  maybeToNullable,
  pipe,
  prop,
  reduce,
  show,
  sortBy,
  values
} from 'sanctuary'

import flatMap from '../flatMap'

const mapFailures: () => mixed = map(prop('failures'))

const unique: () => mixed = pipe([
  reduce(xs => x => ({ ...xs, [prop('errorType')(x)]: x }))({}),
  values
])

const mergeFailures: (Array<Failures>) => mixed = pipe([
  mapFailures,
  flatMap,
  unique
])

const getValue: (Array<Failures>) => mixed = pipe([
  head,
  maybeToNullable,
  prop('value')
])

export default (errors: Array<Failures> = []): Left<Failures> =>
  Left({
    failures: mergeFailures(errors),
    value: getValue(errors)
  })

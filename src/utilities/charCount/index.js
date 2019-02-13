// @flow

import { Maybe, Nothing, maybe, pipe, prop, toMaybe } from 'sanctuary'

export default (value: Maybe<string>): Maybe<number> =>
  maybe(Nothing)(pipe([prop('length'), toMaybe]))(value)

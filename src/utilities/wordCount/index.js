// @flow

import { Maybe, Nothing, maybe, pipe, prop, toMaybe, words } from 'sanctuary'

export default (value: Maybe = Nothing): Maybe =>
  maybe(Nothing)(pipe([words, prop('length'), toMaybe]))(value)

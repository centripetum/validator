// @flow

import { Maybe, Nothing, maybe, pipe, prop, toMaybe } from 'sanctuary'

export default (value: Maybe = Nothing): Maybe =>
  maybe(Nothing)(pipe([prop('length'), toMaybe]))(value)

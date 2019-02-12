// @flow

import { Maybe, Nothing, equals, is, toMaybe } from 'sanctuary'
import $ from 'sanctuary-def'

export default (rawValue: mixed): Maybe<mixed> =>
  is($.String)(rawValue) && equals('')(rawValue) ? Nothing : toMaybe(rawValue)

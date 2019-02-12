// @flow

import {
  Either,
  Left,
  Maybe,
  Nothing,
  Right,
  is,
  isJust,
  maybeToNullable
} from 'sanctuary'
import $ from 'sanctuary-def'

import { NOT_A_STRING } from '../../errorTypes'
import createError from '../../utilities/createError'

export default (value: Maybe = Nothing): Either =>
  isJust(value) && is($.String)(maybeToNullable(value))
    ? Right(value)
    : Left(createError(NOT_A_STRING, value))

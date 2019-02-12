// @flow

import { Maybe } from 'sanctuary'

export default (
  errorType: string,
  value: Maybe<mixed>,
  testValue?: Maybe<mixed>
): Object =>
  testValue
    ? {
        errorType,
        testValue,
        value
      }
    : {
        errorType,
        value
      }

// @flow

import { Maybe } from 'sanctuary'

export default (
  errorType: string,
  value: Maybe<mixed>,
  testValue?: Maybe<mixed>
): Failures => ({
  value,
  failures: [
    {
      errorType,
      ...(testValue ? { testValue } : {})
    }
  ]
})

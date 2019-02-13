// @flow

import { Maybe } from 'sanctuary'

type Failure = {
  errorType: string,
  testValue: ?Maybe<mixed>
}

type Failures = {
  value: Maybe<mixed>,
  failures: Array<Failure>
}

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

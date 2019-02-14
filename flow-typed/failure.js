import { Maybe } from 'sanctuary'

declare type Failure = {
  errorType: string,
  testValue: ?Maybe<mixed>,
}

import { Maybe } from 'sanctuary'

declare type Failures = {
  value: Maybe<mixed>,
  failures: Array<Failure>,
}

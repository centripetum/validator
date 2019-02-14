import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import charCount from './'
import { storiesOf } from '@storybook/react'

storiesOf('utilities/charCount', module)
  .add("Just('Bob')", () => (
    <code>
      <b>charCount(Just('Bob'))</b>
      <br />
      <br />
      Expected:
      <br />
      Just (3)
      <br />
      <br />
      Actual:
      <br />
      {show(charCount(Just('Bob')))}
    </code>
  ))
  .add("Just('Tommy')", () => (
    <code>
      <b>charCount(Just('Tommy'))</b>
      <br />
      <br />
      Expected:
      <br />
      Just (5)
      <br />
      <br />
      Actual:
      <br />
      {show(charCount(Just('Tommy')))}
    </code>
  ))
  .add('Nothing', () => (
    <code>
      <b>charCount(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Nothing
      <br />
      <br />
      Actual:
      <br />
      {show(charCount(Nothing))}
    </code>
  ))

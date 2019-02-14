import * as React from 'react'

import { Just, Nothing, show } from 'sanctuary'

import { storiesOf } from '@storybook/react'
import wordCount from './'

storiesOf('utilities/wordCount', module)
  .add("Just('Bob is dead')", () => (
    <code>
      <b>wordCount(Just('Bob is dead'))</b>
      <br />
      <br />
      Expected:
      <br />
      Just (3)
      <br />
      <br />
      Actual:
      <br />
      {show(wordCount(Just('Bob is dead')))}
    </code>
  ))
  .add("Just('Tommy is no more, too')", () => (
    <code>
      <b>wordCount(Just('Tommy is no more, too'))</b>
      <br />
      <br />
      Expected:
      <br />
      Just (5)
      <br />
      <br />
      Actual:
      <br />
      {show(wordCount(Just('Tommy is no more, too')))}
    </code>
  ))
  .add('Nothing', () => (
    <code>
      <b>wordCount(Nothing)</b>
      <br />
      <br />
      Expected:
      <br />
      Nothing
      <br />
      <br />
      Actual:
      <br />
      {show(wordCount(Nothing))}
    </code>
  ))

import 'highlight.js/styles/paraiso-light.css'

import { configure } from '@storybook/react'
import hljs from 'highlight.js/lib/highlight'
import { map } from 'sanctuary'

hljs.registerLanguage(
  'javascript',
  require('highlight.js/lib/languages/javascript')
)
const req = require.context('../src/', true, /\.stories\.js$/)

function loadStories () {
  map(filename => req(filename))(req.keys())
}

configure(loadStories, module)

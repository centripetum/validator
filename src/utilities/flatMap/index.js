import { unchecked } from 'sanctuary'

const flatMap: Function = unchecked.reduce(xs => x => [
  ...xs,
  ...(Array.isArray(x) ? flatMap(x) : [x])
])([])

export default flatMap

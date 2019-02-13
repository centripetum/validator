import { reduce } from 'sanctuary'

const flatMap: Function = reduce(xs => x => [
  ...xs,
  ...(Array.isArray(x) ? flatMap(x) : [x])
])([])

export default flatMap

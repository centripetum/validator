import { equals, pipe, size } from 'sanctuary'

const isEmpty = pipe([size, equals(0)])

export default isEmpty

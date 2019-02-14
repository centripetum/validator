import { equals, pipe, size } from 'sanctuary'

export default pipe([size, equals(0)])

import * as p1 from './env.js'
import * as p2 from './string.js'
import * as p3 from './array.js'
import * as p4 from './function.js'
import * as p5 from './math.js'

[ p1, p2, p3, p4, p5 ].forEach(p => Object.assign(global, p))

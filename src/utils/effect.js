import * as p1 from './env.js'
import * as p2 from './string.js'
import * as p3 from './array.js'
import * as p4 from './math.js'
import * as p5 from './function.js'
import * as p6 from './matrix.js'
import * as p7 from './iter.js'
import * as p8 from './object.js'

[ p1, p2, p3, p4, p5, p6, p7, p8 ].forEach(p => Object.assign(global, p))

import { apply, comp, flip, curry, uncurry } from './function.js'
import { every, some } from './array.js'

export const toNum = Number

export const add = n => x => x + n
export const sub = n => x => x - n
export const mul = n => x => x * n
export const div = n => x => x / n
export const divInt = n => x => x |> div(n) |> floor
export const mod = n => x => x % n
export const divMod = n => x => x
	|> apply
	|> flip(map)([ div(n), mod(n) ])
export const pow = n => x => x ** n

export const neg = x => - x
export const abs = Math.abs
export const floor = Math.floor
export const ceil = Math.ceil
export const round = Math.round

export const and = x => y => x && y
export const or = x => y => x || y
export const not = x => ! x

export const andF = fs => comp(apply, flip(every)(fs))
export const orF = fs => comp(apply, flip(some)(fs))
export const notF = f => x => x |> f |> not

export const eq = o => x => x === o
export const neq = o => x => x !== o

export const isNull = o => o == null
export const notNull = notF(isNull)

export const between = (l, r) => x => x >= l && x <= r 


import { apply, flip } from './function.js'

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

export const notF = f => x => ! f(x)

export const eq = o => x => x === o

export const isNull = o => o == null
export const notNull = notF(isNull)


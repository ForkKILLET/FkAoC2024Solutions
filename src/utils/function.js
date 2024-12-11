import { fold1 } from './array.js'

export const id = x => x
export const flip = f => x => y => f(y)(x)
export const apply = x => f => f(x)
export const to = f => x => (f(x), x)
export const powF = n => f => n === 1 ? f : f |> powF(n - 1)
export const compose = f => g => x => x |> f |> g
export const ret = x => () => x

export const curry = f => a => b => f(a, b)
export const uncurry = f => (a, b) => f(a)(b)

export const rest = f => (...xs) => f(xs)
export const unrest = f => xs => f(...xs)

export const foldM = f => fold1(uncurry(f))
export const comp = compose |> foldM |> rest

export const maybe = f => x => x == null ? x : x |> f

export const withMem = apply({})

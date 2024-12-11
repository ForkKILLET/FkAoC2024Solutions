import { uncurry, id } from './function.js'
import { add, eq } from './math.js'

export const len = xs => xs.length
export const empty = xs => xs |> len |> eq(0)

export const map = f => xs => xs.map(f)
export const flatMap = f => xs => xs.flatMap(f)
export const flat = n => xs => xs.flat(n)
export const filter = f => xs => xs.filter(f)
export const find = f => xs => xs.find(f)
export const fold = f => x0 => xs => xs.reduce(f, x0)
export const fold1 = f => xs => fold(f)(xs[0])(xs.slice(1))
export const foldWith = f => fold((a, c) => (f(a, c), a))

export const sum = xs => xs |> foldM(add)

export const arrN = n => Array.from({ length: n })
export const rangeN = n => n |> arrN |> map((_, i) => i)
export const dirProd = xs => ys => xs |> flatMap(x => ys |> map(y => [ x, y ]))

export const join = d => xs => xs.join(d)

export const every = f => xs => xs.every(f)
export const some = f => xs => xs.some(f)

export const at = i => xs => xs.at(i)
export const slice = (...a) => xs => xs.slice(...a)
export const elem = xs => x => xs.includes(x)
export const indexIn = xs => x => xs.indexOf(x)

export const same = xs => ys => (xs |> every(elem(ys))) && (ys |> every(elem(xs)))
export const arrEq = xs => ys => eq(xs |> len)(ys |> len)
	&& (xs |> every((x, i) => eq(x)(ys[i])))

export const uniqBy = eq => xs => xs |> filter((x, i) => xs
	|> slice(i + 1)
	|> some(eq(x))
	|> not
)
export const uniqOn = tr => uniqBy(x => y => eq(x |> tr)(y |> tr))
export const uniq = uniqBy(eq)

export const sort = cmp => xs => xs.sort(cmp)
export const toSorted = cmp => xs => xs.toSorted(cmp)

export const pushTo = xs => x => xs.push(x)

export const zip = ([ xs, ys ]) => xs |> map((x, i) => [ x, ys[i] ])
export const unzip = xys => xys |> reduceOn
	((xsys, [ x, y ]) => { xsys[0].push(x); xsys[1].push(y) })
	([ [], [] ])

export const groupMapOn = tag => tr => foldWith
	((d, x) => x |> tr |> pushTo(d[x |> tag] ??= []))
	({})
export const groupOn = tag => groupMapOn(tag)(id)
export const count = xs => xs
	|> groupOn(id)
	|> mapObj(len)

export const len = xs => xs.length
export const map = f => xs => xs.map(f)
export const flatMap = f => xs => xs.flatMap(f)
export const flat = n => xs => xs.flat(n)
export const filter = f => xs => xs.filter(f)
export const reduce = f => x0 => xs => xs.reduce(f, x0)
export const reduceOn = f => x0 => xs => xs.reduce((a, c) => (f(a, c), a), x0)

export const sum = xs => xs.reduce((a, c) => a + c, 0)

export const arrN = n => Array.from({ length: n })
export const dirProd = (xs, ys) => xs |> flatMap(x => ys |> map(y => [ x, y ]))

export const toArray = o => o.toArray()

export const join = d => xs => xs.join(d)

export const every = f => xs => xs.every(f)
export const some = f => xs => xs.some(f)

export const at = i => xs => xs.at(i)
export const elem = xs => x => xs.includes(x)
export const indexIn = xs => x => xs.indexOf(x)

export const same = (xs, ys) => (xs |> every(elem(ys))) && (ys |> every(elem(xs)))

export const sort = cmp => xs => xs.sort(cmp)
export const toSorted = cmp => xs => xs.toSorted(cmp)

export const zip = ([ xs, ys ]) => xs |> map((x, i) => [ x, ys[i] ])
export const unzip = xys => xys |> reduceOn
	((xsys, [ x, y ]) => { xsys[0].push(x); xsys[1].push(y) })
	([ [], [] ])

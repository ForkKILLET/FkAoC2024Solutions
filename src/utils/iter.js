export const iter = function* (g, x) {
	while (true) {
		yield x
		x = g(x)
	}
}

export const iterFromN = function* (g) {
	let i = 0
	while (true) yield g(i ++) 
}

export const iterN = function* (n) {
	let i = 0
	while (i < n) yield i ++
}

export const toArray = it => it.toArray()

export const take = x => it => it.take(x)
export const drop = x => it => it.drop(x)

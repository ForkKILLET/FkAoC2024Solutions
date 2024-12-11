export const prop = k => o => o[k]

export const objToEnt = Object.entries
export const objFromEnt = Object.fromEntries

export const mapObj = f => o => o
	|> objToEnt
	|> map(([ k, v ]) => [ k, f(v, k) ])
	|> objFromEnt

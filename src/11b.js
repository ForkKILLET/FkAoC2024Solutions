import './utils/effect.js'

export const blink = x => {
	if (x === 0) return [ 1 ]
	const s = x |> toStr
	const l = s |> len
	if (l |> mod(2) |> eq(0)) return [
		s |> slice(0, l / 2),
		s |> slice(l / 2),
	] |> map(toNum)
	return [ x * 2024 ]
}

export const calcOne = withMem(mem => n => x => (mem[x] ??= {})[n]
	??= x |> blink |> calc(n)
)

export const calc = n => xs => xs
	|> count
	|> objToEnt
	|> map(([ k, v ]) => v * (n
		? k |> toNum |> calcOne(n - 1)
		: 1
	))
	|> sum

input('11')
	|> await
	|> trim
	|> split(' ')
	|> map(toNum)
	|> calc(75)
	|> toLog


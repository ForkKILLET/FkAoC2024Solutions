import './utils/effect.js'

const blink = x => {
	if (x === 0) return [ 1 ]
	const s = x |> toStr
	const l = s |> len
	if (l |> mod(2) |> eq(0)) return [ s |> slice(0, l / 2), s |> slice(l / 2) ] |> map(toNum)
	return [ x * 2024 ]
}

input('11')
	|> await
	|> trim
	|> split(' ')
	|> map(toNum)
	|> iter(comp(
		flatMap(blink),
		toLog,
	))
	|> iterAt(26)
	|> len
	|> toLog

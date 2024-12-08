import './utils/effect.js'

input('7')
	|> await
	|> trim
	|> split('\n')
	|> map(ln => ln
		|> split(': ')
		|> ([ l, r ]) => [
			l |> Number,
			r |> split(' ') |> map(Number),
		]
	)
	|> filter(([ l, r ]) => {
		const n = r |> len |> sub(1)
		return rangeN(3 ** n)
			|> map(t => t |> toString(3) |> padStart(n, '0'))
			|> some(t => r
				|> fold1((a, c, i) => [
					add,
					mul,
					x => y => + `${x}${y}`,
				][t[i]](a)(c))
				|> eq(l)
			)
	})
	|> map(at(0))
	|> sum
	|> runLog

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
	|> filter(([ l, r ]) => iterN(1 << (r |> len |> sub(1)))
		|> some(b => r
			|> fold1((a, c, i) => b && (1 << i) ? a + c : a * c)
			|> eq(l)
		)
	)
	|> map(at(0))
	|> sum
	|> runLog

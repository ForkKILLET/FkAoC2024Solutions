import './utils/effect.js'

const [ rulesInput, updatesInput ] = input('5')
	|> await
	|> trim
	|> split('\n\n')

const rules = rulesInput
	|> split('\n')
	|> map(split('|'))
	|> reduce((p, [ x, y ]) => ((p[x] ??= []).push(y), p))({})

updatesInput
	|> split('\n')
	|> map(split(','))
	|> filter(update => rules
		|> Object.entries
		|> some(([ x, ys ]) => ys |> some(y => {
			const [ xi, yi ] = [ x, y ] |> map(indexIn(update))
			return xi > yi && yi >= 0
		}))
	)
	|> map(toSorted((x, y) =>
		y |> elem(rules[x] ?? []) ? - 1 :
		x |> elem(rules[y] ?? []) ? + 1 :
		0
	))
	|> map(update => update[ update |> len |> sub(1) |> div(2) ] |> Number)
	|> sum
	|> runLog


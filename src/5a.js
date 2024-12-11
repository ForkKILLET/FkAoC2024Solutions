import './utils/effect.js'

const [ rulesInput, updatesInput ] = input('5')
	|> await
	|> trim
	|> split('\n\n')

const rules = rulesInput
	|> split('\n')
	|> map(split('|'))

const checkRule = update => (xy) => {
	const [ ix, iy ] = xy |> map(indexIn(update))
	return ix < 0 || iy < 0 || ix < iy
}

updatesInput
	|> split('\n')
	|> map(split(','))
	|> filter(update => rules |> every(checkRule(update)))
	|> map(update => update[ update |> len |> sub(1) |> div(2) ] |> Number)
	|> sum
	|> toLog

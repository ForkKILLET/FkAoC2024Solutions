import './utils/effect.js'

const mat = input('10')
	|> await
	|> trim
	|> matFromStr

const get = flip(matAt)(mat)

const searchTrails = h => pos => h === 10
	? [ pos ]
	: neighborOf(pos)
		|> filter(andF([
			inMat(mat),
			comp(get, eq(h |> toStr)),
		]))
		|> flatMap(searchTrails(h |> add(1)))

mat
	|> matIter
	|> filter(comp(at(0), eq('0')))
	|> toArr
	|> map(at(1))
	|> map(pos => pos
		|> searchTrails(1)
		|> uniqBy(arrEq)
		|> len
	)
	|> sum
	|> toLog


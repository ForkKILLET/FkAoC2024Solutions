import './utils/effect.js'

const mat = input('8.ex')
	|> await
	|> trim
	|> matFromStr

const [ row, col ] = mat |> matSize

const amat = matMN(row)(col)

mat
	|> matIter
	|> toArr
	|> filter(comp(at(0), notF(eq('.'))))
	|> groupOn(at(0))
	|> toLog
	|> Object.values
	|> map(g => dirProd(g)(g)
		|> filter(notF(uncurry(arrEq)))
		|> toLog
	)

import { split } from './string.js'
import { join, map, arrN } from './array.js'

export const matMN = m => n => arrN(m).map(() => arrN(n))
export const mapMat = f => mat => mat
	|> map((row, i) =>
		row |> map((x, j) => f(x, [ i, j ], mat))
	)
export const matFromStr = str => str
	|> split('\n')
	|> map(split(''))
export const matToStr = mat => mat
	|> map(join(''))
	|> join('\n')

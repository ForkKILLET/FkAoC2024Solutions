import { split } from './string.js'
import { flip, maybe } from './function.js'
import { join, map, arrN, len } from './array.js'

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

export const matSize = mat => [ mat |> len, mat[0] |> len ]
export const matRow = len
export const matCol = mat => mat[0] |> len
export const matIter = function* (mat) {
	const [ row, col ] = mat |> matSize
	let i = 0, j = 0
	while (true) {
		yield [ mat[i][j], [ i, j ] ]
		if (++ i === col) {
			i = 0
			if (++ j === row) return
		}
	}
}
export const matAt = ([ i, j ]) => mat => mat[i][j]
export const coordOf = x => mat => mat
	|> matIter
	|> find(i => i |> at(0) |> eq(x))
	|> maybe(at(1))
export const coordIn = flip(coordOf)

export const neighborOf = ([ i, j ]) => [ [ i + 1, j ], [ i, j - 1 ], [ i - 1, j ], [ i, j + 1 ] ]

export const inMat = mat => ([ i, j ]) => and
	(i |> between(0, mat |> matRow |> sub(1)))
	(j |> between(0, mat |> matCol |> sub(1)))

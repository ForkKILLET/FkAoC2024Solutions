import fs from 'fs/promises'
import { map, flat, flatMap, len, sum, arrN, dirProd } from './utils/array.js'
import { reverse, trim } from './utils/string.js'
import { id, pipe, run } from './utils/function.js'
import { matMN, mapMat, matFromStr, matToStr } from './utils/matrix.js'

const input = fs.readFile('./4.in', 'utf-8') |> await
const mat = input |> trim |> matFromStr
const size = mat |> len
const resMat = matMN(size)(size)

const dirs = [ [ 1, 0 ], [ 0, 1 ], [ 1, 1 ], [ 1, - 1 ] ]
const words = [ id, reverse ] |> map(pipe('XMAS'))
const dirsXwords = dirProd(dirs)(words)
const judge = (i, j, [ di, dj ], w, l, k) =>
	mat[i][j] === w[k]
		&& (k === l - 1
			|| (i + di < size && j + dj < size
				&& judge(i + di, j + dj, [ di, dj ], w, l, k + 1)
			)
		)
	|> run(res => resMat[i][j] ||= res)

mat
	|> mapMat((_, [ i, j ]) => dirsXwords
		|> map(([ d, w ]) => judge(i, j, d, w, w |> len, 0))
	)
	|> flat(3)
	|> sum
	|> toLog

const color = s => `\x1B[32m${s}\x1B[0m`
resMat
	|> mapMat((res, [ i, j ]) => mat[i][j] |> (res ? color : id))
	|> matToStr
	|> toLog


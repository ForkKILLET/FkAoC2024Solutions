import fs from 'fs/promises'
import { same, len, map, flat, sum } from './utils/array.js'
import { trim } from './utils/string.js'
import { matFromStr, matMN, mapMat } from './utils/matrix.js'

const input = fs.readFile('./4.in', 'utf-8') |> await
const mat = input |> trim |> matFromStr

const size = mat |> len
const judge = (i, j, [ l, m, r ]) =>
	mat[i][j] === m
		&& same([ mat[i + 1][j + 1], mat[i - 1][j - 1] ], [ l, r ])
		&& same([ mat[i + 1][j - 1], mat[i - 1][j + 1] ], [ l, r ])

matMN(size - 2)(size - 2)
	|> mapMat((_, [ i, j ]) => judge(i + 1, j + 1, [...'MAS']))
	|> flat(3)
	|> sum
	|> toLog

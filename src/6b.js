import './utils/effect.js'

const map = input('6')
	|> await
	|> trim
	|> matFromStr

const start = map |> coordOf('^')

const [ col, row ] = map |> matSize

const path = []

const patrol = (calcPath) => iter(({ done, loop, pos: [ i, j ], dir: [ di, dj ], visit }) => {
	let ni, nj
	while (true) {
		[ ni, nj ] = [ i + di, j + dj ]
		if (ni < 0 || nj < 0 || ni === row || nj === col) return { done: true, loop: false }
		if (map[ni][nj] == '#') [ di, dj ] = [ dj, - di ]
		else break
	}

	const dh = (di + dj == 1) + ((di == 0) << 1)
	const v = visit[ni][nj]
	if (v[dh]) return { done: true, loop: true }
	v[dh] = true

	if (calcPath
		&& ! arrEq(start)([ ni, nj ])
		&& ! (path |> some(arrEq([ ni, nj ])))
	) path.push([ ni, nj ])
	return { done: false, pos: [ ni, nj ], dir: [ di, dj ], visit }
}, {
	pos: start,
	dir: [ - 1, 0 ],
	visit: map |> mapMat(() => []),
}) |> find(prop('done'))

patrol(true)

path
	|> filter(([ i, j ]) => (map[i][j] = '#')
		|> ret(patrol(false))
		|> prop('loop')
		|> run(() => map[i][j] = '.')
	)
	|> len
	|> runLog

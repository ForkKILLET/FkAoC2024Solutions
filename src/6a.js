import './utils/effect.js'

const map = input('6')
	|> await
	|> matFromStr

const start = map |> coordOf('^')

const [ row, col ] = map |> matSize

const visited = map |> mapMat(() => [])

iter(([ done, [ i, j ], [ di, dj ] ]) => {
	map[i][j] = '*'
	let ni, nj
	while (true) {
		[ ni, nj ] = [ i + di, j + dj ]
		if (ni < 0 || nj < 0 || ni === col || nj === row) return [ true ]
		if (map[ni][nj] == '#') [ di, dj ] = [ dj, - di ]
		else break
	}
	const dh = (di + dj == 1) + ((di == 0) << 1)
	const v = visited[ni][nj]
	if (v[dh]) return [ true, count ] 
	v[dh] = true
	return [ false, [ ni, nj ], [ di, dj ] ]
}, [ false, start, [ - 1, 0 ] ]) |> find(at(0))

map |> flat() |> filter(eq('*')) |> len |> toLog

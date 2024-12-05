import './utils/effect.js'

input('3')
	|> await
	|> matchAll(/mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g)
	|> toArray
	|> reduce
		(([ a, f ], [ s, l, r ]) => {
			if (s[2] === '(') f = true
			else if (s[2] === 'n') f = false
			else if (f) a += l * r
			return [ a, f ]
		})
		([ 0, true ])
	|> at(0)
	|> runLog

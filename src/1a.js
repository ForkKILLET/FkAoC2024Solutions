import './utils/effect.js'

input('1')
	|> await
	|> trim
	|> split('\n')
	|> map(ln => ln
		|> split(/ +/)
		|> map(Number)
	)
	|> unzip
	|> map(sort(undefined))
	|> zip
	|> map(([ x, y ]) => x - y |> abs)
	|> sum
	|> toLog


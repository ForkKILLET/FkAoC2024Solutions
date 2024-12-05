
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
	|> (([ xs, ys ]) => xs
		|> map(x => x * (ys |> filter(eq(x)) |> len))
		|> sum
	)
	|> runLog

import './utils/effect.js'

const isSafe = report => {
	for (let i = 1, d; i < report.length; i ++) {
		let new_d = report[i] - report[i - 1]
		if (new_d * d <= 0 || Math.abs(new_d) > 3) return false
		d = new_d
	}
	return true
}

input('2')
	|> await
	|> trim
	|> split('\n')
	|> map(ln => ln
		|> split(' ')
		|> map(Number)
	)
	|> filter(report =>
		(report |> isSafe) ||
		(arrN(report |> len)
			|> some((_, i) => [ ...report.slice(0, i), ...report.slice(i + 1) ] |> isSafe)
		)
	)
	|> len
	|> toLog

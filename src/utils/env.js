import url from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'

export const input = name => {
	const inputPath = path.resolve(import.meta.url |> url.fileURLToPath, '../..', name + '.in')
	return fs.readFile(inputPath, 'utf-8')
}

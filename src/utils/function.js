export const id = x => x
export const pipe = x => f => f(x)
export const run = f => x => (f(x), x)
export const to = f => x => f(x)
export const compose = (f, g) => x => x |> f |> g
export const fpow = n => f => n === 1 ? f : f |> fpow(n - 1)
export const runLog = run(console.log)

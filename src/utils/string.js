export const split = d => s => s.split(d)
export const reverse = s => [ ...s ].reverse().join('')
export const trim = s => s.trim()

export const match = re => s => s.match(re)
export const matchAll = re => s => s.matchAll(re)

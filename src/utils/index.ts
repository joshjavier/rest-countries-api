export function isStringArray(x: unknown[]): x is string[] {
  return x.every(i => typeof i === 'string')
}

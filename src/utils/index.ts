export function isStringArray(x: any[]): x is string[] {
  return x.every(i => typeof i === 'string')
}

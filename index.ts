const sum = (array: number[]): number => array.reduce((m, x) => m + x)

const peak = (array: number[]): number => {
  let input: number[] = array
  while (true) {
    const s: number = sum(input)
    if (s < 10) {
      return s
    }
    input = String(s)
      .split('')
      .map(x => parseInt(x, 10))
  }
}

const cycle = (start: number, end: number, array: number[]): number => {
  const base: number = end - start + 1
  const offset: number = start - 1
  const sum: number = array.reduce((m, x) => m + x)
  const rotation: number = sum % base || base
  return rotation + offset
}

const split = (value: number): number[] =>
  value
    .toString()
    .split('')
    .map(x => parseInt(x, 10))

export { sum, peak, cycle, split }

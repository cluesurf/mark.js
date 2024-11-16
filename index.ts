const sum = (array: Array<number>): number =>
  array.reduce((m, x) => m + x, 0)

const peak = (array: Array<number>): number => {
  let input: Array<number> = array
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

const cycle = (
  start: number,
  end: number,
  array: Array<number>,
): number => {
  const base: number = end - start + 1
  const offset: number = start - 1
  const sum: number = array.reduce((m, x) => m + x)
  const rotation: number = sum % base || base
  return rotation + offset
}

const split = (value: number): Array<number> =>
  value
    .toString()
    .split('')
    .map(x => parseInt(x, 10))

export { sum, peak, cycle, split }

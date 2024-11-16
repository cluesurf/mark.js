export type Line = {
  text: string
  mark: number
}

export const sum = (array: Array<number>): number =>
  array.reduce((m, x) => m + x, 0)

export const fold = (number: number): number => {
  let input: Array<number> = split(number)
  while (true) {
    const s: number = sum(input)
    if (s < 10) {
      return s
    }
    input = split(s)
  }
}

export const mass = (lines: Array<Line>) => {
  return sum(lines.map(line => line.mark))
}

export const link = (lines: Array<Line>) => {
  return lines.map(line => line.mark).join('')
}

export const split = (number: number) =>
  String(number)
    .split('')
    .map(x => parseInt(x, 10))

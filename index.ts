export type Span = {
  text: string
  mark?: number
}

export const sizes: Array<number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000,
  6000, 7000, 8000, 9000,
]

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

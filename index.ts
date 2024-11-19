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

export const mass = (lines: Array<Span>) => {
  return sum(
    lines.map(line => line.mark).filter(mark => mark) as Array<
      Required<number>
    >,
  )
}

export const link = (lines: Array<Span>) => {
  return lines
    .map(line => line.mark)
    .filter(x => x)
    .join('')
}

export const split = (number: number) =>
  String(number)
    .split('')
    .map(x => parseInt(x, 10))

export const buildSiteLister =
  (
    base: Record<string, number>,
    mappings: Record<string, string> = {},
  ) =>
  (text: string) => {
    const glyphs = [...text]
    const spans: Array<Span> = []

    for (const glyph of glyphs) {
      let key = glyph
      const mapping = mappings[key]
      if (mapping) {
        key = mapping
      }
      const mark = base[key]

      if (mark) {
        spans.push({
          mark,
          text: glyph,
        })
      } else {
        const last = spans[spans.length - 1]
        if (last && !last.mark) {
          last.text += glyph
        } else {
          spans.push({
            text: glyph,
          })
        }
      }
    }

    return spans
  }

export const buildFoldLister =
  (listSite: (text: string) => Array<Span>) => (text: string) => {
    return listSite(text).map(({ text, mark }) => ({
      text,
      mark: mark ? fold(mark) : undefined,
    }))
  }

export const buildSizeLister =
  (listSite: (text: string) => Array<Span>) => (text: string) => {
    return listSite(text).map(({ text, mark }) => ({
      text,
      mark: mark ? sizes[mark - 1]! : undefined,
    }))
  }

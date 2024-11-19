import { chunk, serialize } from '@termsurf/talk/make/talk/prosody'
import { base, sizes } from '..'

export const positions: Record<string, number> = {
  i: 1,
  e: 2,
  a: 3,
  o: 4,
  u: 5,
  m: 6,
  n: 7,
  q: 8,
  g: 9,
  d: 10,
  b: 11,
  p: 12,
  t: 13,
  k: 14,
  h: 15,
  s: 16,
  f: 17,
  v: 18,
  z: 19,
  j: 20,
  x: 21,
  c: 22,
  C: 23,
  w: 24,
  y: 25,
  l: 26,
  r: 27,
}

export const mappings: Record<string, string> = {
  I: 'i',
  E: 'e',
  A: 'a',
  O: 'o',
  U: 'u',
  i$: 'i',
  e$: 'e',
  a$: 'a',
  o$: 'o',
  u$: 'u',
  N: 'n',
  "'": 'k',
  Q: 'h',
  G: 'r',
  D: 'd',
  T: 't',
  K: 'k',
  H: 'h',
  S: 's',
  F: 'f',
  V: 'v',
  Z: 'z',
  J: 'j',
  X: 'x',
  L: 'l',
  R: 'r',
}

export const listSite = (text: string) => {
  return chunk(text).map(chunk => {
    let key = chunk.value!
    const mapping = mappings[key]
    if (mapping) {
      key = mapping
    }
    const mark = positions[key]!
    return {
      mark,
      text: serialize(chunk),
    }
  })
}

export const listFold = (text: string) => {
  return listSite(text).map(({ text, mark }) => ({
    text,
    mark: base(mark),
  }))
}

export const listSize = (text: string) => {
  return listSite(text).map(({ text, mark }) => ({
    text,
    mark: sizes[mark - 1]!,
  }))
}

import { buildBaseLister, buildSiteLister, buildSizeLister } from '..'

export const kabbalah: Record<string, number> = {
  a: 1,
  l: 2,
  w: 3,
  h: 4,
  s: 5,
  d: 6,
  o: 7,
  z: 8,
  k: 9,
  v: 10,
  g: 11,
  r: 12,
  c: 13,
  n: 14,
  y: 15,
  j: 16,
  u: 17,
  f: 18,
  q: 19,
  b: 20,
  m: 21,
  x: 22,
  i: 23,
  t: 24,
  e: 25,
  p: 26,
}

export const alphabet: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
}

export const hebrew: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 24,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 25,
  w: 27,
  x: 21,
  y: 22,
  z: 23,
}

export const chaldean: Record<string, number> = {
  a: 1,
  i: 1,
  j: 1,
  q: 1,
  y: 1,
  b: 2,
  k: 2,
  r: 2,
  c: 3,
  g: 3,
  l: 3,
  s: 3,
  d: 4,
  m: 4,
  t: 4,
  e: 5,
  h: 5,
  n: 5,
  x: 5,
  u: 6,
  v: 6,
  w: 6,
  o: 7,
  z: 7,
  f: 8,
  p: 8,
}

export const pythagorean: Record<string, number> = {
  a: 1,
  j: 1,
  s: 1,
  b: 2,
  k: 2,
  t: 2,
  c: 3,
  l: 3,
  u: 3,
  d: 4,
  m: 4,
  v: 4,
  e: 5,
  n: 5,
  w: 5,
  f: 6,
  o: 6,
  x: 6,
  g: 7,
  p: 7,
  y: 7,
  h: 8,
  q: 8,
  z: 8,
  i: 9,
  r: 9,
}

export const listKabbalahSite = buildSiteLister(kabbalah)
export const listKabbalahFold = buildBaseLister(listKabbalahSite)
export const listKabbalahSize = buildSizeLister(listKabbalahSite)

export const listAlphabetSite = buildSiteLister(alphabet)
export const listAlphabetFold = buildBaseLister(listAlphabetSite)
export const listAlphabetSize = buildSizeLister(listAlphabetSite)

export const listHebrewSite = buildSiteLister(hebrew)
export const listHebrewFold = buildBaseLister(listHebrewSite)
export const listHebrewSize = buildSizeLister(listHebrewSite)

export const listChaldeanSite = buildSiteLister(chaldean)
export const listChaldeanFold = buildBaseLister(listChaldeanSite)
export const listChaldeanSize = buildSizeLister(listChaldeanSite)

export const listPythagoreanSite = buildSiteLister(chaldean)
export const listPythagoreanFold = buildBaseLister(listPythagoreanSite)
export const listPythagoreanSize = buildSizeLister(listPythagoreanSite)

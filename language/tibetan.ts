const ALPHABET_MAP: { [key: string]: number } = {
  ཀ: 1,
  ཫ: 1,
  ཁ: 2,
  ག: 3,
  ང: 4,
  ག༹: 4,
  ཅ: 5,
  ཆ: 6,
  ཇ: 7,
  ཉ: 8,
  ཏ: 9,
  ཊ: 9,
  ཐ: 10,
  ཋ: 10,
  ད: 11,
  ཌ: 11,
  ན: 12,
  ཎ: 12,
  ཙ: 13,
  ཚ: 14,
  ཛ: 15,
  ཝ: 16,
  པ: 17,
  ཕ: 18,
  བ: 19,
  མ: 20,
  ཞ: 21,
  ཟ: 22,
  འ: 23,
  ཡ: 24,
  ར: 25,
  ཬ: 25,
  ལ: 26,
  ཤ: 27,
  ཥ: 27,
  ས: 28,
  ཧ: 29,
}

const size: Array<number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  200, 300, 400, 500, 600, 700, 800, 900,
]

const map27 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[(ALPHABET_MAP[x] ?? 1 - 1) % 27])
    .filter(x => x) as Array<number>
const map9 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[(ALPHABET_MAP[x] ?? 1 - 1) % 9])
    .filter(x => x) as Array<number>

export { ALPHABET_MAP, map27, map9 }

import { Span } from '~/language/types.js'

export const virama = '\u094D'

export const originalConsonant25: { [key: string]: number } = {
  क: 1,
  ख: 2,
  ग: 3,
  घ: 4,
  ङ: 5,
  च: 6,
  छ: 7,
  ज: 8,
  झ: 9,
  ञ: 10,
  ट: 11,
  ठ: 12,
  ड: 13,
  ढ: 14,
  ण: 15,
  त: 16,
  थ: 17,
  द: 18,
  ध: 19,
  न: 20,
  प: 21,
  फ: 22,
  ब: 23,
  भ: 24,
  म: 25,
}

export const the4Semivowels: { [key: string]: number } = {
  य: 26,
  र: 27,
  ल: 28,
  व: 29,
}

export const the3Sibilants: { [key: string]: number } = {
  श: 30,
  ष: 31,
  स: 32,
}

export const theGlottal: { [key: string]: number } = {
  ह: 33,
}

export const extraConsonants: { [key: string]: number } = {
  क़: 1,
  ख़: 2,
  ग़: 3,
  ज़: 8,
  ड़: 13,
  ढ़: 14,
  फ़: 22,
  ॠ: 27,
}

export const combinationCharacters: { [key: string]: number } = {
  क्ष: 31,
  त्र: 24,
  ज्ञ: 29,
  श्र: 43,
}

export const CONSONANT_MAP: { [key: string]: number } = {
  ...originalConsonant25,
  ...the4Semivowels,
  ...the3Sibilants,
  ...theGlottal,
  ...extraConsonants,
  ...combinationCharacters,
}

export const VOWEL_MAP: { [key: string]: number } = {
  अ: 1,
  आ: 2,
  'ा': 2,
  इ: 3,
  'ि': 3,
  ई: 4,
  'ी': 4,
  उ: 5,
  'ु': 5,
  ऊ: 6,
  'ू': 6,
  ऋ: 7,
  'ृ': 7,
  ए: 8,
  'े': 8,
  ऐ: 9,
  'ै': 9,
  ओ: 10,
  'ो': 10,
  औ: 11,
  'ौ': 11,
}

export const ALPHABET_MAP: { [key: string]: number } = {
  ...CONSONANT_MAP,
  // ...VOWEL_MAP,
}

export const katapayadi = {
  क: 1,
  ट: 1,
  प: 1,
  य: 1,
  ख: 2,
  ठ: 2,
  फ: 2,
  र: 2,
  ग: 3,
  ड: 3,
  ब: 3,
  ल: 3,
  घ: 4,
  ढ: 4,
  भ: 4,
  व: 4,
  ङ: 5,
  ण: 5,
  म: 5,
  श: 5,
  च: 6,
  त: 6,
  ष: 6,
  छ: 7,
  थ: 7,
  स: 7,
  ज: 8,
  द: 8,
  ह: 8,
  झ: 9,
  ध: 9,
  ञ: 0,
  न: 0,
}

export const mapKatapayadi = (text: string) => {
  const list: Array<{ value: string; hasVowel: boolean }> = []
  const chars = [...text]
  chars.forEach(char => {
    if (CONSONANT_MAP[char]) {
      if (!katapayadi[char]) {
        throw new Error(`${char} not supported`)
      }
      list.push({ value: char, hasVowel: true })
    } else if (virama === char) {
      const last = list[list.length - 1]
      if (last) {
        last.hasVowel = false
      }
    }
  })
  return list.map(item => {
    if (item.hasVowel) {
      return katapayadi[item.value]
    } else {
      return 0
    }
  })
}

export const size: Array<number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  200, 300, 400, 500, 600, 700, 800, 900,
]

export const map27 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[((ALPHABET_MAP[x] as number) - 1) % 27])
    .filter(x => x != null) as Array<number>

export const map9 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[((ALPHABET_MAP[x] as number) - 1) % 9])
    .filter(x => x != null) as Array<number>

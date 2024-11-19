import {
  buildBaseLister,
  buildSiteLister,
  buildSizeLister,
} from '~/index.js'

export const consonants1: Record<string, number> = {
  א: 1,
  ב: 2,
  ג: 3,
  ד: 4,
  ה: 5,
  ו: 6,
  ז: 7,
  ח: 8,
  ט: 9,
  י: 10,
  כ: 11,
  ל: 12,
  מ: 13,
  נ: 14,
  ס: 15,
  ע: 16,
  פ: 17,
  צ: 18,
  ק: 19,
  ר: 20,
  ש: 21,
  ת: 22,
  ך: 11,
  ם: 13,
  ן: 14,
  ף: 17,
  ץ: 18,
}

export const consonants2: Record<string, number> = {
  א: 1,
  ב: 2,
  ג: 3,
  ד: 4,
  ה: 5,
  ו: 6,
  ז: 7,
  ח: 8,
  ט: 9,
  י: 10,
  כ: 11,
  ל: 12,
  מ: 13,
  נ: 14,
  ס: 15,
  ע: 16,
  פ: 17,
  צ: 18,
  ק: 19,
  ר: 20,
  ש: 21,
  ת: 22,
  ך: 23,
  ם: 24,
  ן: 25,
  ף: 26,
  ץ: 27,
}

export const listConsonants1Site = buildSiteLister(consonants1)
export const listConsonants1Base = buildBaseLister(listConsonants1Site)
export const listConsonants1Size = buildSizeLister(listConsonants1Site)

export const listConsonants2Site = buildSiteLister(consonants2)
export const listConsonants2Base = buildBaseLister(listConsonants2Site)
export const listConsonants2Size = buildSizeLister(listConsonants2Site)

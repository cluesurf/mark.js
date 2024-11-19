import {
  buildFoldLister,
  buildSiteLister,
  buildSizeLister,
} from '~/index.js'

export const alphabet = {
  ⲁ: 1,
  ⲃ: 2,
  ⲅ: 3,
  ⲇ: 4,
  ⲉ: 5,
  ⲋ: 6,
  ⲍ: 7,
  ⲏ: 8,
  ⲑ: 9,
  ⲓ: 10,
  ⲕ: 11,
  ⲗ: 12,
  ⲙ: 13,
  ⲛ: 14,
  ⲝ: 15,
  ⲟ: 16,
  ⲡ: 17,
  ⲣ: 18,
  ⲥ: 19,
  ⲧ: 20,
  ⲩ: 21,
  ⲫ: 22,
  ⲭ: 23,
  ⲯ: 24,
  ⲱ: 25,
  ϣ: 26,
  ϥ: 27,
  ϧ: 28,
  ⳉ: 29,
  ϩ: 30,
  ϫ: 31,
  ϭ: 32,
  ϯ: 33,
}

export const listAlphabetSite = buildSiteLister(alphabet)
export const listAlphabetFold = buildFoldLister(listAlphabetSite)
export const listAlphabetSize = buildSizeLister(listAlphabetSite)

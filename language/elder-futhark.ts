import {
  buildBaseLister,
  buildSiteLister,
  buildSizeLister,
} from '~/index.js'

const alphabet: Record<string, number> = {
  ᚠ: 1,
  ᚢ: 2,
  ᚦ: 3,
  ᚨ: 4,
  ᚱ: 5,
  ᚲ: 6,
  ᚷ: 7,
  ᚹ: 8,
  ᚺ: 9,
  ᚾ: 10,
  ᛁ: 11,
  ᛃ: 12,
  ᛈ: 13,
  ᛇ: 14,
  ᛉ: 15,
  ᛊ: 16,
  ᛏ: 17,
  ᛒ: 18,
  ᛖ: 19,
  ᛗ: 20,
  ᛚ: 21,
  ᛜ: 22,
  ᛞ: 23,
  ᛟ: 24,
}

export const listAlphabetSite = buildSiteLister(alphabet)
export const listAlphabetBase = buildBaseLister(listAlphabetSite)
export const listAlphabetSize = buildSizeLister(listAlphabetSite)

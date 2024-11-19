import {
  buildFoldLister,
  buildSiteLister,
  buildSizeLister,
} from '~/index.js'

const alphabet: Record<string, number> = {
  '𐌰': 1,
  '𐌱': 2,
  '𐌲': 3,
  '𐌳': 4,
  '𐌴': 5,
  '𐌵': 6,
  '𐌶': 7,
  '𐌷': 8,
  '𐌸': 9,
  '𐌹': 10,
  '𐌺': 11,
  '𐌻': 12,
  '𐌼': 13,
  '𐌽': 14,
  '𐌾': 15,
  '𐌿': 16,
  '𐍀': 17,
  '𐍁': 18,
  '𐍂': 19,
  '𐍃': 20,
  '𐍄': 21,
  '𐍅': 22,
  '𐍆': 23,
  '𐍇': 24,
  '𐍈': 25,
  '𐍉': 26,
  '𐍊': 27,
}

export const listAlphabetSite = buildSiteLister(alphabet)
export const listAlphabetFold = buildFoldLister(listAlphabetSite)
export const listAlphabetSize = buildSizeLister(listAlphabetSite)

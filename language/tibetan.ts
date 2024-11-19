import {
  buildBaseLister,
  buildSiteLister,
  buildSizeLister,
} from '~/index.js'

import { subjoinedConsonantsToBaseConsonants } from '@termsurf/text/tibetan'

export const consonants: Record<string, number> = {
  ཀ: 1,
  ཫ: 1,
  ཁ: 2,
  ག: 3,
  ང: 4,
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
  ཨ: 30,
}

export const listConsonantsSite = buildSiteLister(
  consonants,
  subjoinedConsonantsToBaseConsonants,
)
export const listConsonantsFold = buildBaseLister(listConsonantsSite)
export const listConsonantsSize = buildSizeLister(listConsonantsSite)

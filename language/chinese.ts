import {
  buildBaseLister,
  buildSiteLister,
  buildSizeLister,
} from '~/index.js'
import lineCounts from './characters.json'

const characters: Record<string, number> = {}

for (const char in lineCounts) {
  characters[char] = ((lineCounts[char] - 1) % 32) + 1
}

export const listSite = buildSiteLister(characters)
export const listFold = buildBaseLister(listSite)
export const listSize = buildSizeLister(listSite)

import {
  buildBaseLister,
  buildSiteLister,
  buildSizeLister,
} from '~/index.js'

const alphabet: Record<string, number> = {
  α: 1,
  β: 2,
  γ: 3,
  δ: 4,
  ε: 5,
  ϝ: 6,
  ϛ: 6,
  ζ: 7,
  η: 8,
  θ: 9,
  ι: 10,
  κ: 11,
  λ: 12,
  μ: 13,
  ν: 14,
  ξ: 15,
  ο: 16,
  π: 17,
  ϙ: 18,
  ρ: 19,
  σ: 20,
  ς: 20,
  τ: 21,
  υ: 22,
  φ: 23,
  χ: 24,
  ψ: 25,
  ω: 26,
  ϡ: 27,
}

export const listAlphabetSite = buildSiteLister(alphabet)
export const listAlphabetFold = buildBaseLister(listAlphabetSite)
export const listAlphabetSize = buildSizeLister(listAlphabetSite)

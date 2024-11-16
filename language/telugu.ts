const virama = '\u0C4d'

const consonants = {
  క: 'ka',
  ఖ: 'kh~a',
  గ: 'ga',
  ఘ: 'gh~a',
  ఙ: 'qa',
  చ: 'txa',
  ఛ: 'txh~a',
  జ: 'dja',
  ఝ: 'djh~a',
  ఞ: 'ny~a',
  ట: 'Ta',
  ఠ: 'Th~a',
  డ: 'Da',
  ఢ: 'Dh~a',
  ణ: 'Na',
  త: 'ta',
  థ: 'th~a',
  ద: 'da',
  ధ: 'dh~a',
  న: 'na',
  ప: 'pa',
  ఫ: 'ph~a',
  బ: 'ba',
  భ: 'bh~a',
  మ: 'ma',
  య: 'ya',
  ర: 'ra',
  ల: 'la',
  వ: 'Va',
  ళ: 'La',
  శ: 'xa',
  ష: 'Xa',
  స: 'sa',
  హ: 'ha',
  ఴ: 'Ra',
  ఱ: 'rra',
  ౚ: 'da',
  ౘ: 'tsa',
  ౙ: 'dza',
}

const consonantDiacritics = {
  '్క': 'ka',
  '్ఖ': 'kh~a',
  '్గ': 'ga',
  '్ఘ': 'gh~a',
  '్ఙ': 'qa',
  '్చ': 'txa',
  '్ఛ': 'txh~a',
  '్జ': 'dja',
  '్ఝ': 'djh~a',
  '్ఞ': 'ny~a',
  '్ట': 'Ta',
  '్ఠ': 'Th~a',
  '్డ': 'Da',
  '్ఢ': 'Dh~a',
  '్ణ': 'Na',
  '్త': 'ta',
  '్థ': 'th~a',
  '్ద': 'da',
  '్ధ': 'dh~a',
  '్న': 'na',
  '్ప': 'pa',
  '్ఫ': 'ph~a',
  '్బ': 'ba',
  '్భ': 'bh~a',
  '్మ': 'ma',
  '్య': 'ya',
  '్ర': 'ra',
  '్ల': 'la',
  '్వ': 'Va',
  '్ళ': 'La',
  '్శ': 'xa',
  '్ష': 'Xa',
  '్స': 'sa',
  '్హ': 'ha',
}

const allConsonants = {
  ...consonants,
  ...consonantDiacritics,
}

// https://sanskrit.iitk.ac.in/jnanasangraha/sankhya/katapayaadi/encode/sa/
export const katapayadi = {
  క: 1,
  ట: 1,
  ప: 1,
  య: 1,
  ఖ: 2,
  ఠ: 2,
  ఫ: 2,
  ర: 2,
  గ: 3,
  డ: 3,
  ల: 3,
  ఘ: 4,
  ఢ: 4,
  భ: 4,
  వ: 4,
  ఙ: 5,
  ణ: 5,
  మ: 5,
  శ: 5,
  చ: 6,
  త: 6,
  ష: 6,
  ఛ: 7,
  థ: 7,
  స: 7,
  జ: 8,
  ద: 8,
  హ: 8,
  ఝ: 9,
  ధ: 9,
  ఞ: 0,
  న: 0,
}

export const mapKatapayadi = (text: string) => {
  const list: Array<{ value: string; hasVowel: boolean }> = []
  const chars = [...text]
  chars.forEach(char => {
    if (allConsonants[char]) {
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

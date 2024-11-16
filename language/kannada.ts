const virama = '\u0ccd'

export const katapayadi = {
  ಕ: 1,
  ಟ: 1,
  ಪ: 1,
  ಯ: 1,
  ಖ: 2,
  ಠ: 2,
  ಫ: 2,
  ರ: 2,
  ಗ: 3,
  ಡ: 3,
  బ: 3,
  ల: 3,
  ಘ: 4,
  ಢ: 4,
  ಭ: 4,
  ವ: 4,
  ಙ: 5,
  ಣ: 5,
  ಮ: 5,
  ಶ: 5,
  ಚ: 6,
  ತ: 6,
  ಷ: 6,
  ಛ: 7,
  ಥ: 7,
  ಸ: 7,
  ಜ: 8,
  ದ: 8,
  ಹ: 8,
  ಝ: 9,
  ಧ: 9,
  ಞ: 0,
  ನ: 0,
}

export const consonants = {
  ಕ: 'ka',
  ಖ: 'kh~a',
  ಗ: 'ga',
  ಘ: 'gh~a',
  ಙ: 'ṅa',
  ಚ: 'txa',
  ಛ: 'txh~a',
  ಜ: 'dja',
  ಝ: 'djh~a',
  ಞ: 'nya',
  ಟ: 'Ta',
  ಠ: 'Th~a',
  ಡ: 'Da',
  ಢ: 'Dh~a',
  ಣ: 'Na',
  ತ: 'ta',
  ಥ: 'th~a',
  ದ: 'da',
  ಧ: 'dh~a',
  ನ: 'na',
  ಪ: 'pa',
  ಫ: 'ph~a',
  ಬ: 'ba',
  ಭ: 'bh~a',
  ಮ: 'ma',
  ಯ: 'ya',
  ರ: 'ra',
  ಱ: 'rra',
  ಲ: 'la',
  ವ: 'va',
  ಶ: 'xa',
  ಷ: 'Xa',
  ಸ: 'sa',
  ಹ: 'hh~a',
  ಳ: 'La',
  ೞ: 'lla',
}

export const mapKatapayadi = (text: string) => {
  const list: Array<{ value: string; hasVowel: boolean }> = []
  const chars = [...text]
  chars.forEach(char => {
    if (consonants[char]) {
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

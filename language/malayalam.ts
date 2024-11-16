const virama = '\u0D4d'

const chilluConsonants = {
  ൿ: 'ka',
  ൾ: 'lla',
  ൽ: 'la',
  ർ: 'ra',
  ൻ: 'na',
  ൺ: 'Na',
}

const consonants = {
  ക: 'ka',
  ഖ: 'kh~a',
  ഗ: 'ga',
  ഘ: 'gh~a',
  ങ: 'qa',
  ച: 'txa',
  ഛ: 'txh~a',
  ജ: 'dja',
  ഝ: 'djh~a',
  ഞ: 'ny~a',
  ട: 'Ta',
  ഠ: 'Th~a',
  ഡ: 'Da',
  ഢ: 'Dh~a',
  ണ: 'Na',
  ത: 'ta',
  ഥ: 'th~a',
  ദ: 'da',
  ധ: 'dh~a',
  ന: 'na',
  പ: 'pa',
  ഫ: 'ph~a',
  ബ: 'ba',
  ഭ: 'bh~a',
  മ: 'ma',
  യ: 'ya',
  ര: 'ra',
  ല: 'la',
  വ: 'Va',
  ശ: 'xa',
  ഷ: 'Xa',
  സ: 'sa',
  ഹ: 'ha',
  ള: 'La',
  ഴ: 'Ra',
  റ: 'ra',
  ഩ: 'na',
  ഺ: 'ta',
  ...chilluConsonants,
}

export const katapayadi = {
  ക: 1,
  ട: 1,
  പ: 1,
  യ: 1,
  ഖ: 2,
  ഠ: 2,
  ഫ: 2,
  ര: 2,
  ഗ: 3,
  ഡ: 3,
  ബ: 3,
  ല: 3,
  ഘ: 4,
  ഢ: 4,
  ഭ: 4,
  വ: 4,
  ങ: 5,
  ണ: 5,
  മ: 5,
  ശ: 5,
  ച: 6,
  ത: 6,
  ഷ: 6,
  ഛ: 7,
  ഥ: 7,
  സ: 7,
  ജ: 8,
  ദ: 8,
  ഹ: 8,
  ഝ: 9,
  ധ: 9,
  ഞ: 0,
  ന: 0,
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

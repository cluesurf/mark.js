import { sum, link, mass, base } from '.'
import fs from 'fs'
import * as chinese from './language/chinese'
import * as latin from './language/latin'
import * as greek from './language/greek'
import * as hebrew from './language/hebrew'
import * as gothic from './language/gothic'
import * as devanagari from './language/devanagari'
import * as talk from './language/talk'

const chars = JSON.parse(
  fs.readFileSync('./language/characters.json', 'utf-8'),
)
for (const char in chars) {
  chars[char] = chars[char].lineCount
}
fs.writeFileSync(
  './language/characters.json',
  JSON.stringify(chars, null, 2),
)
// logLang('chinese', '9', [...'幸福'])
// logLang('latin', '9', [...'hello world'])
// logLang('latin', 'Hebrew', [...'hello world'])
// logLang('greek', 'Alphabet', [...'χξϛ'])
// logLang('hebrew', 'MisparHechrachi', [...'יהוה'])
// logLang('gothic', 'Alphabet', [...'𐌼𐌰𐌽𐌰𐍃𐌴𐌸𐍃'])
// logLang('devanagari', '27', [...'कृष्ण'])
// logLang('devanagari', '9', [...'कृष्ण'])

logLatinAlphabet('dog')
logLatinAlphabet('gold')
logLatinAlphabet('pattern')
logLatinAlphabet('sophistication')
// logTalk('UwekInd')
// logTalk('vIdiyo')
// logTalk('AdvAntsmEnt')

function logTalk(text: string) {
  console.log(text)
  console.log('  base', base(mass(talk.listFold(text))))
  console.log('  site', mass(talk.listSite(text)))
  console.log('  size', mass(talk.listSize(text)))
  console.log('  link', link(talk.listFold(text)))
}

function logLatinAlphabet(text: string) {
  console.log(text)
  console.log('  site:', mass(latin.listAlphabetSite(text)))
  console.log('    base:', base(mass(latin.listAlphabetSite(text))))
  console.log('  size:', mass(latin.listAlphabetSize(text)))
  console.log('    base:', base(mass(latin.listAlphabetSize(text))))
  console.log('  base:', mass(latin.listAlphabetBase(text)))
  console.log('    base:', base(mass(latin.listAlphabetBase(text))))
}

import { sum, link, mass, fold } from '.'

import * as chinese from './language/chinese'
import * as latin from './language/latin'
import * as greek from './language/greek'
import * as hebrew from './language/hebrew'
import * as gothic from './language/gothic'
import * as devanagari from './language/devanagari'
import * as talk from './language/talk'

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
  console.log('  fold', fold(mass(talk.listFold(text))))
  console.log('  site', mass(talk.listSite(text)))
  console.log('  size', mass(talk.listSize(text)))
  console.log('  link', link(talk.listFold(text)))
}

function logLatinAlphabet(text: string) {
  console.log(text)
  console.log('  site:', mass(latin.listAlphabetSite(text)))
  console.log('    base:', fold(mass(latin.listAlphabetSite(text))))
  console.log('  size:', mass(latin.listAlphabetSize(text)))
  console.log('    base:', fold(mass(latin.listAlphabetSize(text))))
  console.log('  fold:', mass(latin.listAlphabetFold(text)))
  console.log('    base:', fold(mass(latin.listAlphabetFold(text))))
}

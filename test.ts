import { mass, base } from '.'

import * as chinese from './language/chinese'
import * as latin from './language/latin'
import * as greek from './language/greek'
import * as hebrew from './language/hebrew'
import * as gothic from './language/gothic'
import * as devanagari from './language/devanagari'
import * as tibetan from './language/tibetan'
import * as talk from './language/talk'

logLatinAlphabet('gold')
logLatinAlphabet('pattern')
logLatinAlphabet('sophistication')
logTalk('UwekInd')
logTalk('vIdiyo')
logTalk('AdvAntsmEnt')
logTibetanAlphabet('བསྒྲུབས')
logTibetanAlphabet('རིག་པ་')
logGreekAlphabet('χξϛ')
logChinese('幸福')
logGothicAlphabet('𐌼𐌰𐌽𐌰𐍃𐌴𐌸𐍃')
// logDevanagariConsonants('कृष्ण')

function logTalk(text: string) {
  console.log(text)
  console.log('  base', base(mass(talk.listFold(text))))
  console.log('  fold', mass(talk.listFold(text)))
  console.log('  site', mass(talk.listSite(text)))
  console.log('  size', mass(talk.listSize(text)))
}

function logLatinAlphabet(text: string) {
  console.log(text)
  console.log('  base', base(mass(latin.listAlphabetSite(text))))
  console.log('  fold', mass(latin.listAlphabetFold(text)))
  console.log('  site', mass(latin.listAlphabetSite(text)))
  console.log('  size', mass(latin.listAlphabetSize(text)))
}

// function logDevanagariConsonants(text: string) {
//   console.log(text)
//   console.log('  base', base(mass(devanagari.listConsonantsSite(text))))
//   console.log('  fold', mass(devanagari.listConsonantsFold(text)))
//   console.log('  site', mass(devanagari.listConsonantsSite(text)))
//   console.log('  size', mass(devanagari.listConsonantsSize(text)))
// }

function logGothicAlphabet(text: string) {
  console.log(text)
  console.log('  base', base(mass(gothic.listAlphabetSite(text))))
  console.log('  fold', mass(gothic.listAlphabetFold(text)))
  console.log('  site', mass(gothic.listAlphabetSite(text)))
  console.log('  size', mass(gothic.listAlphabetSize(text)))
}

function logChinese(text: string) {
  console.log(text)
  console.log('  base', base(mass(chinese.listSite(text))))
  console.log('  fold', mass(chinese.listFold(text)))
  console.log('  site', mass(chinese.listSite(text)))
  console.log('  size', mass(chinese.listSize(text)))
}

function logGreekAlphabet(text: string) {
  console.log(text)
  console.log('  base', base(mass(greek.listAlphabetSite(text))))
  console.log('  fold', mass(greek.listAlphabetFold(text)))
  console.log('  site', mass(greek.listAlphabetSite(text)))
  console.log('  size', mass(greek.listAlphabetSize(text)))
}

function logTibetanAlphabet(text: string) {
  console.log(text)
  console.log('  base', base(mass(tibetan.listConsonantsSite(text))))
  console.log('  fold', mass(tibetan.listConsonantsFold(text)))
  console.log('  site', mass(tibetan.listConsonantsSite(text)))
  console.log('  size', mass(tibetan.listConsonantsSize(text)))
}

import { sum, link, mass, fold } from '.'

import * as chinese from './language/chinese'
import * as latin from './language/latin'
import * as greek from './language/greek'
import * as hebrew from './language/hebrew'
import * as gothic from './language/gothic'
import * as devanagari from './language/devanagari'
import * as tone from './language/tone'

// logLang('chinese', '9', [...'幸福'])
// logLang('latin', '9', [...'hello world'])
// logLang('latin', 'Hebrew', [...'hello world'])
// logLang('greek', 'Alphabet', [...'χξϛ'])
// logLang('hebrew', 'MisparHechrachi', [...'יהוה'])
// logLang('gothic', 'Alphabet', [...'𐌼𐌰𐌽𐌰𐍃𐌴𐌸𐍃'])
// logLang('devanagari', '27', [...'कृष्ण'])
// logLang('devanagari', '9', [...'कृष्ण'])

logTone('UwekInd')
logTone('vIdiyo')
logTone('AdvAntsmEnt')

function logTone(text: string) {
  console.log(text)
  console.log('  fold', fold(mass(tone.listFold(text))))
  console.log('  site', mass(tone.listSite(text)))
  console.log('  size', mass(tone.listSize(text)))
  console.log('  link', link(tone.listFold(text)))
}

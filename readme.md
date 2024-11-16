
# Gematria in JavaScript

For Node.js, not the browser, as it requires a database basically to do across cultures.

Pass in an array of characters, which you can get with the _spread_ operator.

```js
import chinese from '@termsurf/mark.js/language/chinese'
import greek from '@termsurf/mark.js/language/greek'
import { sum, peak, cycle } from '@termsurf/mark.js'

console.log(sum(greek.mapAlphabet([...'χξϛ'])))
// 666 https://en.wikipedia.org/wiki/Number_of_the_beast

const chars = [...'幸福']
const integers = chinese.map9(chars)
// add all the integers together
const sum = sum(integers)
// add numbers of sum together continuously until it is 1 digit.
const peak = peak(integers)
// rotate around sum like clock, between 1 and 9.
const cycle = cycle(integers)
```

Logs from some of the tests:

```
UwekInd
  fold 9
  site 63
  size 675
  link 5625171
vIdiyo
  fold 5
  site 59
  size 806
  link 911174
AdvAntsmEnt
  fold 8
  site 98
  size 278
  link 31937476274
```

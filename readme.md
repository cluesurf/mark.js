
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
chinese.map9(["幸","福"])
    array [8,4]
      sum 12
     peak 3
    cycle 5

latin.map9(["h","e","l","l","o"," ","w","o","r","l","d"])
    array [8,5,3,3,6,5,6,9,3,4]
      sum 52
     peak 7
    cycle 3

latin.mapHebrew(["h","e","l","l","o"," ","w","o","r","l","d"])
    array [8,5,20,20,50,900,50,80,20,4]
      sum 1157
     peak 5
    cycle 2

greek.mapAlphabet(["χ","ξ","ϛ"])
    array [600,60,6]
      sum 666
     peak 9
    cycle 1

hebrew.mapMisparHechrachi(["י","ה","ו","ה"])
    array [10,5,6,5]
      sum 26
     peak 8
    cycle 5

gothic.mapAlphabet(["𐌼","𐌰","𐌽","𐌰","𐍃","𐌴","𐌸","𐍃"])
    array [40,1,50,1,200,5,9,200]
      sum 506
     peak 2
    cycle 2

devanagari.map27(["क","ृ","ष","्","ण"])
    array [1,4,60]
      sum 65
     peak 2
    cycle 2

devanagari.map9(["क","ृ","ष","्","ण"])
    array [1,4,6]
      sum 11
     peak 2
    cycle 4
```

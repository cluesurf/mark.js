
# Gematria in JavaScript

For Node.js, not the browser, as it requires a database basically to do across cultures.

Pass in an array of characters, which you can get with the _spread_ operator.

```js
import greek from '@termsurf/mark.js/language/greek'
import { mass, base } from '@termsurf/mark.js'

// 666 https://en.wikipedia.org/wiki/Number_of_the_beast
logGreekAlphabet('χξϛ')
// χξϛ
//   base 9
//   fold 18
//   site 45
//   size 666

function logGreekAlphabet(text: string) {
  console.log(text)
  console.log('  base', base(mass(greek.listAlphabetSite(text))))
  console.log('  fold', mass(greek.listAlphabetFold(text)))
  console.log('  site', mass(greek.listAlphabetSite(text)))
  console.log('  size', mass(greek.listAlphabetSize(text)))
}
```

Logs from some of the tests:

```
gold
  base 2
  fold 20
  site 38
  size 101
pattern
  base 4
  fold 31
  site 94
  size 616
sophistication
  base 6
  fold 69
  site 177
  size 879
UwekInd
  base 9
  fold 27
  site 63
  size 675
vIdiyo
  base 5
  fold 23
  site 59
  size 806
AdvAntsmEnt
  base 8
  fold 53
  site 98
  size 278
བསྒྲུབས
  base 5
  fold 14
  site 122
  size 2903
རིག་པ་
  base 9
  fold 18
  site 45
  size 783
χξϛ
  base 9
  fold 18
  site 45
  size 666
幸福
  base 3
  fold 12
  site 21
  size 48
𐌼𐌰𐌽𐌰𐍃𐌴𐌸𐍃
  base 2
  fold 29
  site 83
  size 506
```

## Inspiration

- [The Key of It All-Book I: An Encyclopedic Guide to the Sacred Languages & Magical Systems of the World](https://www.amazon.com/Key-All-Book-Encyclopedic-Languages-Llewellyns/dp/0875423183)
- [The Key of It All-Book II: An Encyclopedic Guide to the Sacred Languages & Magical Systems of the World](https://www.amazon.com/Key-All-Encyclopedic-Languages-Mysteries/dp/0875423795)

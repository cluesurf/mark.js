
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
dog
  site: 26
    base: 8
  size: 71
    base: 8
  fold: 17
    base: 8
gold
  site: 38
    base: 2
  size: 101
    base: 2
  fold: 20
    base: 2
sophistication
  site: 177
    base: 6
  size: 879
    base: 6
  fold: 69
    base: 6
```

## Inspiration

- [The Key of It All-Book I: An Encyclopedic Guide to the Sacred Languages & Magical Systems of the World](https://www.amazon.com/Key-All-Book-Encyclopedic-Languages-Llewellyns/dp/0875423183)
- [The Key of It All-Book II: An Encyclopedic Guide to the Sacred Languages & Magical Systems of the World](https://www.amazon.com/Key-All-Encyclopedic-Languages-Mysteries/dp/0875423795)

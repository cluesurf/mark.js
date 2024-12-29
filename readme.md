<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<h3 align='center'>@cluesurf/mark</h3>
<p align='center'>
  Gematria in JavaScript
</p>

<br/>
<br/>
<br/>

## Introduction

Gematria is assigning numerical values to text, so that you can follow associations between words that have a relation in the numerical association system being used. It acts as a signal to cue your mind into finding meaning in the relationship between two current words.

Whether or not that meaning/relationship is _true_, or whether or not it is _meaningful_, is a subject of debate. It can be seen as meaningful under certain logical constraints to the system, or it can be seen as completely arbitrary and meaningless, as you just picked two random words that were connected by a meaningless signal. You could have chosen any system for representing letters as numbers, so they are not necessarily meaningful numbers given the seemingly random system you chose.

## Installation

For Node.js and the browser.

```
npm install @cluesurf/mark
```

## Usage

Pass in a string of characters to functions like these.

```js
import greek from '@cluesurf/mark/language/greek'
import { mass, base } from '@cluesurf/mark'

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

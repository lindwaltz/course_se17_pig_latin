/** check if the char is consonant using RegEx */
function isConsonant(char) {
  return !/[aeiouy]/.test(char.toLowerCase())
}

function format_word(word, capitalize) {
  const res = word.toLowerCase()
  if (capitalize) {
    return res.charAt(0).toUpperCase() + res.slice(1)
  }
  return res
}

function pig_word(word) {
  let strArr = []
  let tmpChar

  const firstChar = word.charAt(0)
  const capitalize = (firstChar === firstChar.toUpperCase())

  // return initial text + "way" if it starts with vowel
  // if not - convert text to array
  if (!isConsonant(firstChar)) {
    return format_word(word + 'way', capitalize)
  } else {
    strArr = word.split('')
  }

  // push all consonats to the end of the array
  while (isConsonant(strArr[0])) {
    tmpChar = strArr.shift()
    strArr.push(tmpChar)
  }

  // convert array to string and concatenate "ay" at the end
  return format_word(strArr.join('') + 'ay', capitalize)
}

function map_word(list, fn) {
  return list.map(x => x.match(/\w/) ? fn(x) : x)
}

const self = {
  /**
   * Translates english into piglatin.
   *
   * - For words that start with a vowel, add "ay" to the end.
   *   The following letters were designated as vowels: a, e, i, o, u, (y)
   *   (except as first letter of a word; see below).
   *
   * - For words that start with one or more consonants, move all of the first
   *   consecutive consonants to the end and add "ay".
   *   If the first consonants include "qu", move the "u" along with the "q".
   *   Don't forget about words like "squeal" where the "qu" doesn't come first!
   *
   * - For words that start with "y", treat the "y" as a consonant.
   */
  piggify(text) {
    const words = text.split(/\b/)
    return map_word(words, pig_word).join('')
  }
}

export default self

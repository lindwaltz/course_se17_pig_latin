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

function map_word(list, fn) {
  return list.map(x => x.match(/\w/) ? fn(x) : x)
}

function flatten (list) {
  return list.reduce((a, b) => {
    Array.isArray(b) ? a.push(...flatten(b)) : a.push(b)
    return a
  }, [])
}

/** pig latin */
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

  // push all consonants to the end of the array
  let maxMoves = strArr.length
  while (maxMoves > 0 && isConsonant(strArr[0])) {
    tmpChar = strArr.shift()
    maxMoves--
    strArr.push(tmpChar)
  }

  // convert array to string and concatenate "ay" at the end
  return format_word(strArr.join('') + 'ay', capitalize)
}

/** rovarspraket */
function rovar_word(word) {
  const firstChar = word.charAt(0)
  const capitalize = (firstChar === firstChar.toUpperCase())
  let wordArr = flatten(word.split('').map(x => isConsonant(x) ? [x, 'o', x] : [x]))
  return format_word(wordArr.join(''), capitalize)
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
  },

  rovarify(text) {
    return map_word(text.split(/\b/), rovar_word).join('')
  }
}

export default self

import 'core-js/es6'

/** return true if character is a consonant */
function isConsonant(char) {
  return !/[aeiouyåäöÅÄÖ]/.test(char.toLowerCase())
}

/** make word lowercase, except for first letter if capitalize is true */
function format_word(word, capitalize) {
  const res = word.toLowerCase()
  if (capitalize) {
    return res.charAt(0).toUpperCase() + res.slice(1)
  }
  return res
}

/** split text into list of words */
function word_split(text) {
  return text.split(/([;\s\n\r\t.,'"+!?-]+)/).filter(Boolean)
}

/** apply fn to each word in text (but not special characters) */
function map_words(text, fn) {
  const words = word_split(text)
  return words.map(x => x.match(/\w/) ? fn(x) : x)
}

/** flatten a nested list
 *  ex: flatten [1, [2, 3], 4] -> [1, 2, 3, 4]
 */
function flatten (list) {
  return list.reduce((a, b) => {
    Array.isArray(b) ? a.push(...flatten(b)) : a.push(b)
    return a
  }, [])
}

/** return true if first character is capitalized */
function is_capitalized(word) {
  const firstChar = word.charAt(0)
  return (firstChar === firstChar.toUpperCase())
}

/**
 * Convert a single word to pig latin
 *    note: see module jsdoc below for details
 */
function pig_word(word) {
  const capitalize = is_capitalized(word)

  // return initial text + "way" if it starts with vowel
  if (!isConsonant(word.charAt(0))) {
    return format_word(word + 'way', capitalize)
  }

  // push all consonants to the end of the array
  let tmpChar
  let strArr = word.split('')
  let maxMoves = strArr.length
  while (maxMoves > 0 && isConsonant(strArr[0])) {
    tmpChar = strArr.shift()
    maxMoves--
    strArr.push(tmpChar)
  }

  // convert array to string and concatenate "ay" at the end
  return format_word(strArr.join('') + 'ay', capitalize)
}

/** Convert a single word to Rovarspraket */
function rovar_word(word) {
  const capitalize = is_capitalized(word)
  const wordArr = flatten(word.split('').map(x => isConsonant(x) ? [x, 'o', x] : [x]))
  return format_word(wordArr.join(''), capitalize)
}

/** Convert a single word to fikonspraket */
function fikon_word(word) {
  const capitalize = is_capitalized(word)
  const wordArr = word.split('')
  const index = wordArr.findIndex(x => !isConsonant(x)) + 1
  if (index > 0 && word.length > 1) {
    const word1 = word.slice(index)
    const word2 = word.slice(0, index)
    return format_word('fi' + word1, capitalize) + ' ' + format_word(word2 + 'kon', false)
  } else {
    return word
  }
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
    return map_words(text, pig_word).join('')
  },

  /**
   * Translates text into Rövarspråket
   * Reference: https://sv.wikipedia.org/wiki/Rövarspråket
   */
  rovarify(text) {
    return map_words(text, rovar_word).join('')
  },

  /**
   * Translates text into Fikonspråket
   * Reference: https://sv.wikipedia.org/wiki/Fikonspråket
   */
  fikonify(text) {
    return map_words(text, fikon_word).join('')
  }
}

export default self

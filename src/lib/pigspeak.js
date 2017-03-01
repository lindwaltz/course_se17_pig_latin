import 'core-js/es6'

/** check if the char is consonant using RegEx */
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
  return text.split(/([\;\s\n\r\t.,'"+!?-]+)/).filter(Boolean)
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

function split_at(list, index) {
  return [list.slice(index), list.slice(0, index)]
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

/** fikonspraket */
function fikon_word(word) {
  const firstChar = word.charAt(0)
  const capitalize = (firstChar === firstChar.toUpperCase())
  const wordArr = word.split('')
  let index = wordArr.findIndex(x => !isConsonant(x)) + 1
  if (index > 0 && word.length > 1) {
    let word1 = word.slice(index)
    let word2 = word.slice(0, index)
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

  rovarify(text) {
    return map_words(text, rovar_word).join('')
  },
  /** Translates english into Fikonspråket
   *
   * Each word is split in two halves.
   * The parts are then put in reverse order to form a new word started with "fi" and ended with "kon".
   */
  fikonify(text) {
    return map_words(text, fikon_word).join('')
  }
}

export default self

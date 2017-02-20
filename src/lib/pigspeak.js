var self = {
  piggify(text) {
    var strArr = []
    var tmpChar

    // check if the char is consonant using RegEx
    function isConsonant(char) {
      return !/[aeiouy]/.test(char)
    }

    // return initial text + "way" if it starts with vowel
    // if not - convert text to array
    if (!isConsonant(text.charAt(0))) {
      return text + 'way'
    } else {
      strArr = text.split('')
    }

    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
      tmpChar = strArr.shift()
      strArr.push(tmpChar)
    }

    // convert array to string and concatenate "ay" at the end
    return strArr.join('') + 'ay'
  }
}

export default self

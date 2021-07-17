'use strict'

/**
 * Returns whether any of the chars defined in the array are present inside a given String.
 * @param {string[]} chars
 * @param {string} str
 * @returns {boolean}
 */
function charsInString(chars, str) {
  if (!chars || !(chars instanceof Array) || !str || typeof str !== 'string') {
    return false
  }

  const charsCount = chars.length
  const strCount = str.length

  if (charsCount === 0) {
    return true
  }

  if (strCount === 0) {
    return false
  }

  for (let i = 0; i < charsCount; i++) {
    if (str.indexOf(chars[i]) > -1) {
      return true
    }
  }

  return false
}

module.exports = {
  charsInString,
}

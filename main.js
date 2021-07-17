'use strict'

/**
 * @private
 * @enum {number}
 */
const SearchFor = {
  Character: 0,
  Characters: 1,
}

/**
 * @public
 * @enum {number}
 */
const Position = {
  Any: 0,
  Start: 1,
  End: 2,
}

/**
 * Performs a String search.
 * @private
 * @param {SearchFor} searchFor
 * @param {string[]} characters
 * @param {string} string
 * @param {Position} [position=Position.Any]
 * @param {boolean} [caseSensitive=true]
 * @returns {boolean}
 */
function stringSearch(searchFor, characters, string, position = Position.Any, caseSensitive = true) {
  if (!characters || !(characters instanceof Array) || !string || typeof string !== 'string') {
    return false
  }

  const charactersCount = characters.length
  const stringCount = string.length

  if (charactersCount === 0) {
    return true
  }

  if (stringCount === 0) {
    return false
  }

  for (let i = 0; i < charactersCount; i++) {
    let haystack = string
    let needle = characters[i]

    if (searchFor === SearchFor.Character) {
      if (needle.length > 0) {
        needle = needle.charAt(0)
      } else {
        continue
      }
    }

    if (!caseSensitive) {
      needle = needle.toLowerCase()
      haystack = haystack.toLowerCase()
    }

    if (position === Position.Start) {
      if (string.indexOf(needle) === 0) {
        return true
      }
    } else if (position === Position.End) {
      if (string.indexOf(needle) === stringCount - needle.length) {
        return true
      }
    } else {
      if (string.indexOf(needle) > -1) {
        return true
      }
    }
  }

  return false
}

/**
 * Returns whether any of the characters defined in the array are present inside the given String.
 * @public
 * @param {string[]} characters the characters to search for, expects a single character per entry, if multiple are found it will take the first one,
 * @param {string} string the String which needs to be checked,
 * @param {Position} [position=Position.Any] controls where the matching should occur, at the **beggining** of the `String`, at the **end** or **anywhere** (default),
 * @param {boolean} [caseSensitive=true] controls whether the search is case-sensitive, defalts to true,
 * @returns {boolean} returns true upon first match or when the array of supplied characters to search for is empty; false if no matches are found or the string to be searched is empty.
 */
function charsInString(characters, string, position = Position.Any, caseSensitive = true) {
  return stringSearch(SearchFor.Character, characters, string, position, caseSensitive)
}

/**
 * Returns whether any of the Strings defined in the array are present inside the given String.
 * @public
 * @param {string[]} strings the strings to search for,
 * @param {string} string the String which needs to be checked,
 * @param {Position} [position=Position.Any] controls where the matching should occur, at the **beggining** of the `String`, at the **end** or **anywhere** (default),
 * @param {boolean} [caseSensitive=true] controls whether the search is case-sensitive, defalts to true,
 * @returns {boolean} returns true upon first match or when the array of supplied strings to search for is empty; false if no matches are found or the string to be searched is empty.
 */
function stringsInString(strings, string, position = Position.Any, caseSensitive = true) {
  return stringSearch(SearchFor.Characters, strings, string, position, caseSensitive)
}

module.exports = {
  charsInString,
  stringsInString,
  Position,
}

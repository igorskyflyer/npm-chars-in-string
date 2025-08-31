/**
 * @private
 * @enum {number}
 */
const SearchFor = {
  Character: 0,
  Characters: 1
}

/**
 * @public
 * @enum {number}
 */
export const Position = {
  Any: 0,
  Start: 1,
  End: 2
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
function stringSearch(
  searchFor,
  characters,
  string,
  position = Position.Any,
  caseSensitive = true
) {
  if (!Array.isArray(characters) || typeof string !== 'string') {
    return false
  }

  const haystackBase = caseSensitive ? string : string.toLowerCase()

  for (let needle of characters) {
    if (searchFor === SearchFor.Character) {
      if (!needle) {
        continue
      }

      needle = needle.charAt(0)
    }

    const haystack = haystackBase
    const match = caseSensitive ? needle : needle.toLowerCase()
    let found = false

    switch (position) {
      case Position.Start: {
        found = haystack.startsWith(match)
        break
      }
      case Position.End: {
        found = haystack.endsWith(match)
        break
      }
      case Position.Any: {
        found = haystack.includes(match)
        break
      }
    }

    if (found) {
      return true
    }
  }

  return false
}

/**
 * Returns whether any of the characters defined in the array are present inside the given String.
 * @public
 * @param {string[]} characters the characters to search for, expects a single character per entry, if multiple are found it will take the first one,
 * @param {string} string the String which needs to be checked,
 * @param {Position} [position=Position.Any] controls where the matching should occur, at the **beginning** of the `String`, at the **end** or **anywhere** (default),
 * @param {boolean} [caseSensitive=true] controls whether the search is case-sensitive, defaults to true,
 * @returns {boolean} returns true upon first match, false if no matches are found.
 */
export function charsInString(
  characters,
  string,
  position = Position.Any,
  caseSensitive = true
) {
  return stringSearch(
    SearchFor.Character,
    characters,
    string,
    position,
    caseSensitive
  )
}

/**
 * Returns whether any of the Strings defined in the array are present inside the given String.
 * @public
 * @param {string[]} strings the strings to search for,
 * @param {string} string the String which needs to be checked,
 * @param {Position} [position=Position.Any] controls where the matching should occur, at the **beginning** of the `String`, at the **end** or **anywhere** (default),
 * @param {boolean} [caseSensitive=true] controls whether the search is case-sensitive, defaults to true,
 * @returns {boolean} returns true upon first match, false if no matches are found.
 */
export function stringsInString(
  strings,
  string,
  position = Position.Any,
  caseSensitive = true
) {
  return stringSearch(
    SearchFor.Characters,
    strings,
    string,
    position,
    caseSensitive
  )
}

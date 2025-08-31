enum SearchFor {
  Character = 0,
  Characters = 1
}

export enum Position {
  Any = 0,
  Start = 1,
  End = 2
}

/**
 * Performs a String search.
 * @private
 */
function stringSearch(
  searchFor: SearchFor,
  needle: string[],
  haystack: string,
  position = Position.Any,
  caseSensitive = true
): boolean {
  if (!Array.isArray(needle) || typeof haystack !== 'string') {
    return false
  }

  const value: string = caseSensitive ? haystack : haystack.toLowerCase()

  for (let search of needle) {
    if (searchFor === SearchFor.Character) {
      if (!search) {
        continue
      }

      search = search.charAt(0)
    }

    const match: string = caseSensitive ? search : search.toLowerCase()
    let found: boolean = false

    switch (position) {
      case Position.Start: {
        found = value.startsWith(match)
        break
      }
      case Position.End: {
        found = value.endsWith(match)
        break
      }
      case Position.Any: {
        found = value.includes(match)
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
 * @param {string} input the String which needs to be checked,
 * @param {Position} [position=Position.Any] controls where the matching should occur, at the **beginning** of the `String`, at the **end** or **anywhere** (default),
 * @param {boolean} [caseSensitive=true] controls whether the search is case-sensitive, defaults to true,
 * @returns {boolean} returns true upon first match, false if no matches are found.
 */
export function charsInString(
  characters: string[],
  input: string,
  position = Position.Any,
  caseSensitive = true
) {
  return stringSearch(
    SearchFor.Character,
    characters,
    input,
    position,
    caseSensitive
  )
}

/**
 * Returns whether any of the Strings defined in the array are present inside the given String.
 * @public
 * @param {string[]} strings the strings to search for,
 * @param {string} input the String which needs to be checked,
 * @param {Position} [position=Position.Any] controls where the matching should occur, at the **beginning** of the `String`, at the **end** or **anywhere** (default),
 * @param {boolean} [caseSensitive=true] controls whether the search is case-sensitive, defaults to true,
 * @returns {boolean} returns true upon first match, false if no matches are found.
 */
export function stringsInString(
  strings: string[],
  input: string,
  position = Position.Any,
  caseSensitive = true
) {
  return stringSearch(
    SearchFor.Characters,
    strings,
    input,
    position,
    caseSensitive
  )
}

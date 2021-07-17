## ['C', 'h', 'a', 'r', 's'] in 'String'

🪐 Provides ways of testing whether an array of chars is present inside a given String. ☄

<br>

### API

An `enum` is available publicly, used for setting the position of the search, see more below. 👇

```ts
enum Position = {
  Any,
  Start,
  End
}
```

It allows you define where the matching should occur, at the **beggining** of the `String`, at the **end** or **anywhere** (default).

<br>
<br>

```ts
function charsInString(characters: string[], string: String, position = Position.Any, caseSensitive = true): boolean
```

`characters: string[]` - the characters to search for, expects a single character per entry, if multiple are found it will take the first one,

`string: String` - the String which needs to be checked,

`[position: Position=Position.Any]` - controls where the matching should occur, at the **beggining** of the `String`, at the **end** or **anywhere** (default),

`[caseSensitive: boolean=true]` - controls whether the search is case-sensitive, defalts to true.

<br>
<br>

```ts
function stringsInString(strings, string, position = Position.Any, caseSensitive = true
```

`strings[]: string[]` - the strings to search for,

`string: String` - the String which needs to be checked,

`[position: Position=Position.Any]` - controls where the matching should occur, at the **beggining** of the `String`, at the **end** or **anywhere** (default),

`[caseSensitive: boolean=true]` - controls whether the search is case-sensitive, defalts to true.

<br>

### Usage

Install it by:

```shell
npm i "@igor.dvlpr/chars-in-string"
```

and then use it like:

```js
const { charsInString, stringsInString, Position } = require('@igor.dvlpr/chars-in-string')

console.log(charsInString([], '')) // prints false

console.log(charsInString([], 'test')) // prints false

console.log(charsInString([':', ','], '')) // prints false

console.log(charsInString([':', ','], 'hello:world')) // prints true

console.log(charsInString([':', ',', '^'], 'helloworld^')) // prints true

console.log(charsInString([':', ',', '^'], 'helloworld')) // prints false

console.log(stringsInString(['abc', 'owom', 'wqp', 'world', 'hel'], 'helloworld', Position.Start)) // prints true
```

## ['C', 'h', 'a', 'r', 's'] in 'String'

🪐 Provides ways of testing whether an array of chars is present inside a given String. ☄

<br>

### Usage

Install it by:

```shell
npm i "@igor.dvlpr/chars-in-string"
```

and then use it like:

```js
const { charsInString } = require('@igor.dvlpr/chars-in-string')

console.log(charsInString([], '')) // prints false

console.log(charsInString([], 'test')) // prints true

console.log(charsInString([':', ','], '')) // prints false

console.log(charsInString([':', ','], 'hello:world')) // prints true

console.log(charsInString([':', ',', '^'], 'helloworld^')) // prints true

console.log(charsInString([':', ',', '^'], 'helloworld')) // prints false
```

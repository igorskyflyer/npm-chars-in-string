<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-chars-in-string/main/media/chars-in-string.png" alt="Icon of Chars in String" width="256" height="256">
  <h1>Chars in String</h1>
</div>

<br>

<h4 align="center">
  🪐 Determines whether an array of chars is present inside a given String. ☄
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🔍 Find instantly - See if your text contains what you’re looking for
- 🎯 Target precisely - Match at the start, end, or anywhere in the text
- 🔠 Match your way - Choose case‑sensitive or case‑insensitive search
- 🧮 Works with one or many - Search for single characters or whole words/phrases
- ⚡ Quick answers - Stops searching as soon as a match is found
- 🌍 Cross‑platform friendly - Works the same on any OS or environment

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/chars-in-string
```

```bash
yarn add @igorskyflyer/chars-in-string
```

```bash
npm i @igorskyflyer/chars-in-string
```

<br>
<br>

## 🤹🏼 API

An `enum` is available publicly, used for setting the position of the search, see more below. 👇

```ts
enum Position {
  Any,
  Start,
  End
}
```

It allows you define where the matching should occur, at the **beginning** of the `String`, at the **end** or **anywhere** (default).

<br>
<br>

```ts
function charsInString(characters: string[], input: string, position = Position.Any, caseSensitive = true): boolean
```

`characters: string[]` - the characters to search for, expects a single character per entry, if multiple are found it will take the first one,

`input: string` - the String which needs to be checked,

`[position: Position=Position.Any]` - controls where the matching should occur, at the **beginning** of the `String`, at the **end** or **anywhere** (default),

`[caseSensitive: boolean=true]` - controls whether the search is case-sensitive, defaults to `true`.

<br>
<br>

```ts
function stringsInString(strings, input, position = Position.Any, caseSensitive = true): boolean
```

`strings[]: string[]` - the strings to search for,

`input: string` - the String which needs to be checked,

`[position: Position=Position.Any]` - controls where the matching should occur, at the **beginning** of the `String`, at the **end** or **anywhere** (default),

`[caseSensitive: boolean=true]` - controls whether the search is case-sensitive, defaults to `true`.

<br>
<br>

## 🗒️ Examples

```ts
import { charsInString, stringsInString, Position } from '@igorskyflyer/chars-in-string'

console.log(charsInString([], '')) // prints false
console.log(charsInString([], 'test')) // prints false
console.log(charsInString([':', ','], '')) // prints false
console.log(charsInString([':', ','], 'hello:world')) // prints true
console.log(charsInString([':', ',', '^'], 'helloworld^')) // prints true
console.log(charsInString([':', ',', '^'], 'helloworld')) // prints false
console.log(stringsInString(['abc', 'owom', 'wqp', 'world', 'hel'], 'helloworld', Position.Start)) // prints true
```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-chars-in-string/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-chars-in-string/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/str-is-in](https://www.npmjs.com/package/@igorskyflyer/str-is-in)

> _🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍_

<br>

[@igorskyflyer/recursive-readdir](https://www.npmjs.com/package/@igorskyflyer/recursive-readdir)

> _📖 Provides recursive readdir() and readdirSync() functions. 📁_

<br>

[@igorskyflyer/astro-post-excerpt](https://www.npmjs.com/package/@igorskyflyer/astro-post-excerpt)

> _⭐ An Astro component that renders post excerpts for your Astro blog - directly from your Markdown and MDX files. Astro v2+ collections are supported as well! 💎_

<br>

[@igorskyflyer/adblock-filter-counter](https://www.npmjs.com/package/@igorskyflyer/adblock-filter-counter)

> _🐲  A dead simple npm module that counts Adblock filter rules.🦘_

<br>

[@igorskyflyer/scramble](https://www.npmjs.com/package/@igorskyflyer/scramble)

> _🃏 Scrambles (rearranges randomly) Strings and Arrays. 🎋_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).

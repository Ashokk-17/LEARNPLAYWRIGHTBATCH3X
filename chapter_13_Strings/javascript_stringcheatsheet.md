# JavaScript Strings Cheatsheet

## Creating Strings

```js
const a = 'single quotes';
const b = "double quotes";
const c = `template literal`;
const d = new String('object wrapper'); // avoid, typeof d === 'object'

const name = 'Ashok';
const greeting = `Hello, ${name}!`;   // interpolation
const multi = `line one
line two`;                             // multi-line
```

## Properties

| Property | Description |
|---|---|
| `str.length` | number of UTF-16 code units in the string |

```js
'hello'.length; // 5
```

## Checking Content

| Method | Description |
|---|---|
| `str.includes(sub, start?)` | true if `sub` occurs in `str` |
| `str.startsWith(sub, start?)` | true if `str` begins with `sub` |
| `str.endsWith(sub, end?)` | true if `str` ends with `sub` |
| `str.indexOf(sub, start?)` | first index of `sub`, or `-1` |
| `str.lastIndexOf(sub, start?)` | last index of `sub`, or `-1` |
| `str === ''` / `!str.length` | check for empty string |

```js
'playwright'.includes('write'); // true
'playwright'.startsWith('play'); // true
'playwright'.endsWith('ight');   // true
'playwright'.indexOf('w');       // 4
```

## Extracting Substrings

| Method | Description |
|---|---|
| `str.slice(start, end?)` | extracts section; supports negative indices |
| `str.substring(start, end?)` | like `slice` but negatives clamp to 0, swaps if start > end |
| `str.substr(start, length?)` | start + length (deprecated, avoid) |
| `str.charAt(i)` | character at index `i` |
| `str[i]` | character at index `i` (bracket access) |
| `str.at(i)` | supports negative indices (`str.at(-1)` = last char) |
| `str.split(separator, limit?)` | splits into an array |

```js
const s = 'JavaScript';
s.slice(0, 4);      // 'Java'
s.slice(-6);        // 'Script'
s.substring(4, 10); // 'Script'
s.charAt(0);        // 'J'
s.at(-1);           // 't'
'a,b,c'.split(','); // ['a', 'b', 'c']
```

## Transforming Strings

| Method | Description |
|---|---|
| `str.toUpperCase()` | converts to upper case |
| `str.toLowerCase()` | converts to lower case |
| `str.trim()` | removes whitespace from both ends |
| `str.trimStart()` / `str.trimEnd()` | removes whitespace from one end |
| `str.replace(search, replacement)` | replaces first match |
| `str.replaceAll(search, replacement)` | replaces all matches |
| `str.concat(...strings)` | joins strings (prefer `+` or template literals) |
| `str.repeat(n)` | repeats the string `n` times |
| `str.padStart(len, pad)` | pads at the start to reach `len` |
| `str.padEnd(len, pad)` | pads at the end to reach `len` |

```js
'  hi  '.trim();               // 'hi'
'hello'.toUpperCase();         // 'HELLO'
'hello world'.replace('o', '0');    // 'hell0 world'
'hello world'.replaceAll('o', '0'); // 'hell0 w0rld'
'5'.padStart(3, '0');          // '005'
'ab'.repeat(3);                // 'ababab'
```

## Combining & Comparing

```js
'foo' + 'bar';                 // concatenation
`${'foo'}${'bar'}`;             // template literal concatenation
'apple'.localeCompare('banana'); // -1 (locale-aware comparison)
```

## Strings Are Immutable

```js
let str = 'hello';
str[0] = 'H';     // no effect, strings can't be mutated in place
str = 'H' + str.slice(1); // 'Hello' — must reassign to a new string
```

## Strings Are Iterable

```js
for (const ch of 'abc') {
  console.log(ch); // 'a', 'b', 'c'
}

[...'abc']; // ['a', 'b', 'c']
```

## Quick Reference

| Task | Method |
|---|---|
| Length | `.length` |
| Contains? | `.includes()` |
| Starts/ends with? | `.startsWith()` / `.endsWith()` |
| Find position | `.indexOf()` / `.lastIndexOf()` |
| Extract part | `.slice()` |
| Split into array | `.split()` |
| Join array into string | `.join()` (Array method) |
| Change case | `.toUpperCase()` / `.toLowerCase()` |
| Trim whitespace | `.trim()` |
| Replace text | `.replace()` / `.replaceAll()` |
| Repeat | `.repeat()` |
| Pad | `.padStart()` / `.padEnd()` |

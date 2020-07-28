# ascii-lookup

Get ASCII characters, html codes, hex codes, and decimal codes for different encodings via decimal code or hex code.

[![codecov](https://codecov.io/gh/bameyrick/ascii-lookup/branch/master/graph/badge.svg)](https://codecov.io/gh/bameyrick/ascii-lookup)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b270c171a65e4f2e81d87eff71d35f81)](https://www.codacy.com/manual/bameyrick/ascii-lookup)

## Install

You can install via npm or yarn.

### npm

```bash
npm install --save ascii-lookup
```

### yarn

```bash
yarn add ascii-lookup
```

## Usage

### Importing

You can import using ES6 imports. There are two methods: getASCIIItemForDecimal which will return ASCII info by a given decimal, and getASCIIItemForHex which will return ASCII info by a given hex code.

```javascript
import { getASCIIItemForDecimal, getASCIIItemForHex } from 'ascii-lookup';
```

### Arguments

`getASCIIItemForDecimal` accepts two arguments:

| Parameter | Type                                        | Optional | Description                                                       |
| --------- | ------------------------------------------- | -------- | ----------------------------------------------------------------- |
| dec       | number                                      | false    | The ASCII decimal value                                           |
| encoding  | string (`ASCIIEncoding` enum in Typescript) | true     | The type of encoding for the extended ASCII set - Default is UTF8 |

`getASCIIItemForHex` also accepts two arguments:

| Parameter | Type                                        | Optional | Description                                                       |
| --------- | ------------------------------------------- | -------- | ----------------------------------------------------------------- |
| hex       | string                                      | false    | The ASCII hex value                                               |
| encoding  | string (`ASCIIEncoding` enum in Typescript) | true     | The type of encoding for the extended ASCII set - Default is UTF8 |

#### Encodings

If you are using TypeScript you can import the `ASCIIEncoding` enum which will provide you with every supported encoding:

##### Example

```typescript
import { getASCIIItemForDecimal, ASCIIEncoding } from 'ascii-lookup';

getASCIIItemForDecimal(128, ASCIIEncoding.CP437);
```

If you are using plain JavaScript the available encodings are:

| Encoding         | Notes                          |
| ---------------- | ------------------------------ |
| `cp437`          |                                |
| `utf-8`          | Unicode                        |
| `big5`           | Chinese                        |
| `ibm866`         | Russian                        |
| `euc-jp`         | Japanese                       |
| `euc-kr`         | Korean                         |
| `gb18030`        | Chinese                        |
| `iso-8859-1`     | Latin1/Western European        |
| `iso-8859-2`     | Latin2/Eastern European        |
| `iso-8859-3`     | Latin3/South European          |
| `iso-8859-4`     | Latin4/North European          |
| `iso-8859-5`     | Latin/Cyrillic                 |
| `iso-8859-6`     | Latin/Arabic                   |
| `iso-8859-7`     | Latin/Greek                    |
| `iso-8859-8`     | Latin/Hebrew                   |
| `iso-8859-10`    | Latin6/Nordic                  |
| `iso-8859-13`    | Latin7/Baltic Rim              |
| `iso-8859-14`    | Latin8/Celtic                  |
| `iso-8859-15`    | Latin9/Western European        |
| `iso-8859-16`    | Latin10/South-Eastern European |
| `koi8-r`         | Russian                        |
| `koi8-u`         | Ukrainian                      |
| `macintosh`      | x-mac-roman                    |
| `x-mac-cyrillic` |                                |
| `shift_jis`      | Japanese                       |
| `windows-874`    | Thai                           |
| `windows-1250`   | Eastern European               |
| `windows-1251`   | Cyrillic                       |
| `windows-1252`   | Western European               |
| `windows-1253`   | Greek                          |
| `windows-1254`   | Turkish                        |
| `windows-1255`   | Hebrew                         |
| `windows-1256`   | Arabic                         |
| `windows-1257`   | Baltic                         |
| `windows-1258`   | Vietnamese                     |

#### Result

Both `getASCIIItemForDecimal` and `getASCIIItemForHex` return an object of type `ASCIIItem`:

| Key  | Type   | Description  |
| ---- | ------ | ------------ |
| dec  | number | Decimal code |
| hex  | string | Hex code     |
| html | string | HTML code    |
| char | string | Character    |

A type for `ASCIIItem` is available for import in TypeScript:

```typescript
import { getASCIIItemForDecimal, ASCIIEncoding, ASCIIItem } from 'ascii-lookup';

const result: ASCIIItem = getASCIIItemForDecimal(128, ASCIIEncoding.CP437);
```

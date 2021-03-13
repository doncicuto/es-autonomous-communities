# ES-Autonomous-Communities

Spain's autonomous communities names and codes as provided by INE (Spain's National Statistics Institute) for easier use in Javascript projects.

Reference: [https://www.ine.es/daco/daco42/codmun/cod_ccaa.htm](https://www.ine.es/daco/daco42/codmun/cod_ccaa.htm)

See [CHANGELOG](https://github.com/doncicuto/es-autonomous-communities/blob/main/CHANGELOG.md) for more information about versions.

## Install

```bash
yarn add @doncicuto/es-autonomous-communities
```

or

```bash
npm install @doncicuto/es-autonomous-communities --save
```

## Usage

The default export is an array of objects with the following structure:

| Property | Type     | Description                   | Example           |
| -------- | -------- | ----------------------------- | ----------------- |
| `code`   | `string` | Autonomous Community INE code | `07`              |
| `name`   | `string` | Autonomous community name     | `Castilla y León` |

Example (Browser):

```ts
import { communities } from "@doncicuto/es-autonomous-communities";
console.log(communities);

const names = communities.map((c) => c.name);
console.log(names);

const codes = communities.map((c) => c.code);
console.log(codes);
```

Example (NodeJS):

```js
const communities = require("@doncicuto/es-autonomous-communities").default;
console.log(communities);

const names = communities.map((c) => c.name);
console.log(names);

const codes = communities.map((c) => c.code);
console.log(codes);
```

# ES-Autonomous-Communities

Communities names and codes as shown in INE (Spain's National Statistics Institute)

Reference: [https://www.ine.es/daco/daco42/codmun/cod_ccaa.htm](https://www.ine.es/daco/daco42/codmun/cod_ccaa.htm)

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

Example:

```js
import communities from "@doncicuto/es-autonomous-communities";
console.log(communities);

const names = communities.map((c) => c.name);
console.log(names);

const codes = provinces.map((c) => c.code);
console.log(codes);
```

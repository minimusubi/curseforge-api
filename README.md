# curseforge-api 🚀
This is a JavaScript module built around the new [CurseForge Core API](https://docs.curseforge.com/#accessing-the-service) following the deprecation of the older, unnofficial API. It is designed to be easy to use and has zero dependencies 🙌. More information about the CurseForge Core API is [available here](https://docs.curseforge.com/).

This module provides TypeScript typings.

This module uses `fetch()` under the hood to make requests. However, if used Node.js, keep in mind that `fetch()` was not added until `v17.5.0`, and is behind the `--experimental-fetch` flag until `v18.0.0`. For this reason, where `fetch()` is unavailable, the module can use a fetch polyfill such as [node-fetch](https://www.npmjs.com/package/node-fetch).

## Table of Contents
1. [curseforge-api 🚀](#curseforge-api-)
	1. [Table of Contents](#table-of-contents)
	2. [Documentation](#documentation)
	3. [Getting Started](#getting-started)
	4. [Examples](#examples)
	5. [Enums](#enums)

## Documentation
Documentation is [available here](https://minimusubi.github.io/curseforge-api/) and is automatically generated from the source with [TypeDoc](https://typedoc.org/).

## Getting Started
Import the package and create a [client](https://minimusubi.github.io/curseforge-api/classes/CurseForgeClient.html):
```js
import {CurseForgeClient} from 'curseforge-api';
const client = new CurseForgeClient('YOUR_API_KEY');
```

If `fetch()` is unavailable in your environment, you can provide a polyfill such as [node-fetch](https://www.npmjs.com/package/node-fetch):
```js
import fetch from 'node-fetch';
import CurseForgeClient from 'curseforge-api';

// Pass fetch to the client
const client = new CurseForgeClient('YOUR_API_KEY', {fetch});
```

## Examples
Search for a mod via slug:
```js
import {CurseForgeGameEnum} from 'curseforge-api';

const modsResults = await client.searchMods(CurseForgeGameEnum.Minecraft, {slug: 'jei'});
const jei = modsResults.data[0];
console.log(jei.name); // => 'Just Enough Items (JEI)'
console.log(jei.id); // => 238222
```

Fetch a mod via project ID:
```js
const jei = await client.getMod(238222);
console.log(jei.name); // => 'Just Enough Items (JEI)'
console.log(jei.id); // => 238222
```

Get the latest Forge 1.18.2 file for Just Enough Items (JEI):
```js
const files = await mod.getFiles(238222, {
	gameVersion: '1.18.2',
	modLoaderType: CurseForgeModLoaderType.Forge,
	pageSize: 1,
});
console.log(files.data[0].fileName); // => 'jei-1.18.2-9.7.1.232.jar'
```

Fetch a mod's file and get the download URL:
```js
const file = await mod.getFile(3847103);
console.log(file.displayName); // => 'jei-1.18.2-9.7.0.209.jar'
console.log(await file.getDownloadURL()); // => 'https://edge.forgecdn.net/files/3847/103/jei-1.18.2-9.7.0.209.jar'
```

## Enums
For convenience, the game IDs that were available at the time of publishing are [available as an enum](https://minimusubi.github.io/curseforge-api/enums/CurseForgeGameEnum.html). You can use this wherever you need to provide a game ID.

There are also enums and typings available for all documented types on the [CurseForge Core API](https://docs.curseforge.com/#schemas).

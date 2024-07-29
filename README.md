<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/270/270006.png" width="200">
</p>

<h3 align="center">Y Social Media</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com/antonioclp/text-adventure)

</div>

> [!NOTE]\
> Tela interativa em JavaScript utilizando Node.js, onde é criada uma história original interativa.

### Uso

```bash
git clone git@github.com:antonioclp/text-adventure.git

cd text-adventure

npm install && npm start
```


---

### Classes

> Classes `/src/classes/*`

```bash
classes/
|-Character.js
|-Villain.js
|-Hero.js
```

---

### Eslint

> Configuração `eslint.config.mjs`

```mjs
import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
];
```
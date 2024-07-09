const tailwindStyles = require('@/output.css') // eslint-disable-line @typescript-eslint/no-require-imports

// 导出的是 GM_addStyle 的值
// 需要在 `config/common.meta.json` 和 `config/dev.meta.json` 中确保 `grant` 中加入了 `GM_addStyle`。
// 如果 input.css 中有 `@tailwind base;` 则需要开启下边的 `replace` 以便删掉冲突的样式，但也仍然会有一些样式冲突。
export default GM_addStyle(
  tailwindStyles
  // .replace(/\nimg,\nvideo {\n {2}max-width: 100%;\n {2}height: auto;\n}\n/, '')
  // .replace(
  //   /\*,\n::before,\n::after \{\n {2}box-sizing: border-box;\n {2}\/\* 1 \*\/\n {2}border-width: 0;\n {2}\/\* 2 \*\/\n {2}border-style: solid;\n {2}\/\* 2 \*\/\n {2}border-color: #e5e7eb;\n {2}\/\* 2 \*\/\n}/,
  //   ''
  // )
  // .replace(
  //   /-webkit-appearance: button;\n {2}\/\* 1 \*\/\n {2}background-color: transparent;\n {2}\/\* 2 \*\/\n {2}background-image: none;\n {2}\/\* 2 \*\//,
  //   ''
  // )
  // .replace(/display: block;\n {2}\/\* 1 \*\//, '')
  // .replace(
  //   /padding-top: 0.5rem;\n {2}padding-right: 0.75rem;\n {2}padding-bottom: 0.5rem;\n {2}padding-left: 0.75rem;/,
  //   ''
  // )
  // .replace(/font-size: inherit;\n {2}font-weight: inherit;/, '')
)

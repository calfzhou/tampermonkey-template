const tailwindStyles = require('@/output.css') // eslint-disable-line @typescript-eslint/no-require-imports

// 导出的是 GM_addStyle 的值
// 需要在 `config/common.meta.json` 和 `config/dev.meta.json` 中确保 `grant` 中加入了 `GM_addStyle`。
// 另外 `@/input.css` 中的 `@tailwind base` 会引入大量的样式，即便按下边的正则替换会去掉一些容易影响页面原有样式的内容，
// 仍然有可能会破坏页面的原有样式。可以酌情去掉 `@tailwind base`。
export default GM_addStyle(
  tailwindStyles
    // from @tailwind base
    // Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
    .replace(/\nimg,\nvideo {\n {2}max-width: 100%;\n {2}height: auto;\n}\n/, '')

    // from @tailwind base
    // 1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
    // 2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
    .replace(
      /\*,\n::before,\n::after \{\n {2}box-sizing: border-box;\n {2}\/\* 1 \*\/\n {2}border-width: 0;\n {2}\/\* 2 \*\/\n {2}border-style: solid;\n {2}\/\* 2 \*\/\n {2}border-color: #e5e7eb;\n {2}\/\* 2 \*\/\n}/,
      ''
    )

    // from @tailwind base
    // 1. Correct the inability to style clickable types in iOS and Safari.
    // 2. Remove default button styles.
    .replace(
      /-webkit-appearance: button;\n {2}\/\* 1 \*\/\n {2}background-color: transparent;\n {2}\/\* 2 \*\/\n {2}background-image: none;\n {2}\/\* 2 \*\//,
      ''
    )

    // from @tailwind base
    // 1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
    // 2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
    //   This can trigger a poorly considered lint error in some tools but is included by design.
    .replace(/display: block;\n {2}\/\* 1 \*\//, '')

    // from @tailwind base with plugin @tailwindcss/forms
    .replace(
      /padding-top: 0.5rem;\n {2}padding-right: 0.75rem;\n {2}padding-bottom: 0.5rem;\n {2}padding-left: 0.75rem;/,
      ''
    )

    // from @tailwind base
    // Remove the default font size and weight for headings.
    .replace(/font-size: inherit;\n {2}font-weight: inherit;/, '')
)

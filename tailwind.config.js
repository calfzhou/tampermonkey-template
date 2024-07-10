/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    // @tailwindcss/forms 很大概率会干扰目标页面的原有样式（尤其包含大量表单的业务系统）。
    // 如果确认不会有干扰，或能够接受干扰的效果，可以取消注释加载该插件。
    // require('@tailwindcss/forms'),
  ],
}

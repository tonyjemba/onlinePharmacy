
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
     
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@headlessui/vue'),
    require('@heroicons/vue/outline'),
    require('@tailwindcss/line-clamp'),
  ],
}

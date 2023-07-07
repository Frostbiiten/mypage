/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        SpaceGrotesk: ["Space Grotesk"],
        Mono: ["Jetbrains Mono"],
      },
      transitionTimingFunction:
      {
        'inout-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
  },
  plugins: [],
}


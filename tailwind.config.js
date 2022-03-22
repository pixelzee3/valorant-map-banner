module.exports = {
  content: ['./src/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'ascent': 'url("./src/images/loading_screen_ascent.webp")',
        'bind': 'url("./src/images/loading_screen_bind.webp")',
        'breeze': 'url("./src/images/loading_screen_breeze.webp")',
        'haven': 'url("./src/images/loading_screen_haven.webp")',
        'icebox': 'url("./src/images/loading_screen_icebox.webp")',
        'split': 'url("./src/images/loading_screen_split.webp")',
        'fracture': 'url("./src/images/loading_screen_fracture.webp")',
      },
    },
  },
  variants: {},
  plugins: [],
};

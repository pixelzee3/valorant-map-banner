module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        ascent: 'url("./images/loading_screen_ascent.webp")',
        bind: 'url("./images/loading_screen_bind.webp")',
        breeze: 'url("./images/loading_screen_breeze.webp")',
        haven: 'url("./images/loading_screen_haven.webp")',
        icebox: 'url("./images/loading_screen_icebox.webp")',
        split: 'url("./images/loading_screen_split.webp")',
        fracture: 'url("./images/loading_screen_fracture.webp")',
        filler: 'url("./images/loading_screen_filler.webp")'
      },
    },
    fontFamily: {
      'sans': ['Poppins' , 'Helvetica', 'Arial', 'sans-serif'],
    }
  },
  plugins: [],
};

module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Paleta oficial de marca Kalas Shop (tomada del logotipo)
        cream: '#FFF8FA',        // blanco cálido con matiz rosado (fondo general)
        beige: '#F7E6E9',        // tono muy pálido del rosa de marca (secciones alternas)
        blush: '#FFBEC6',        // rosa de marca (acento principal, igual al logo)
        'blush-dark': '#B36276', // rosa de marca oscurecido (texto/hover con buen contraste)
        ink: '#670627',          // vino/burdeos de marca (igual al fondo del logo)
        'ink-soft': '#AB7688',   // vino de marca aclarado (texto secundario)
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

const taildwindscss = require('tailwindcss');

module.exports = {
    plugins: [
        taildwindscss('./tailwind.config.js'), require('autoprefixer')]
};
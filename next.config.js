const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  compiler: {
    styledComponents: true,
  },
};

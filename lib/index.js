const classSelectors = require('./classSelector');

module.exports = {
  plugins: ['@shopee-ads/selector-disallowed-list'],
  rules: {
    '@shopee-ads/selector-disallowed-list': classSelectors
  }
};

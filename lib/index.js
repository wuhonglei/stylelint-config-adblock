const classSelectors = require('./classSelector');

module.exports = {
  plugins: ['@wuhonglei/selector-disallowed-list'],
  rules: {
    '@wuhonglei/selector-disallowed-list': classSelectors
  }
};

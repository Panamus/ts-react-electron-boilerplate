module.exports = {
  env: {
    browser: true,
    jasmine: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  extends: ["prettier"],
  plugins: ["angular", "jasmine"],
  globals: {
    moment: true,
    _: true,
    Middleman: true,
    graphlib: true,
    numeral: true,

    // Angular
    angular: false,

    // Angular mocks
    module: false,
    inject: false,

    // Jasmine
    jasmine: false,
    describe: false,
    beforeEach: false,
    afterEach: false,
    it: false,
    expect: false,

    // Protractor
    browser: false,
    element: false,
    by: false
  }
};

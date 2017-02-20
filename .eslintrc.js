// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow skipping spaces
    'space-before-function-paren': 0,

    // use camelcase naming
    'camelcase': 0,
    
    // allow as WARN because it's used during dev.
    'no-unused-vars': 1,
    'comma-dangle': 1,

    // more settings that are more appropriate as WARN
    'no-trailing-spaces': 1,
    'padded-blocks': 1,

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

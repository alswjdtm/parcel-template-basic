const { plugins } = require("./.postcssrc");

// es5문법으로 변경되서 브라우저에서 동작을 하게된다.
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}

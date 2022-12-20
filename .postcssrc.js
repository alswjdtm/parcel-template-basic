// ESM  (가져오기, 내보내기라는 방식) >> node.js 에서 제공
// CommonJS 번들러를 통해 변환하는 용도 브라우저에서 동작하는 개념이 아니라 node.js환경에서 동작하는 방식으로 require식으로 사용


// import autoprefixer from 'autoprefixer' 
const autoprefixer = require('autoprefixer')


// export{
//  plugins: [
//    autoprefixer
//  ]
//}
module.exports = {
  plugins: [
    autoprefixer
  ]
}
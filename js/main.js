console.log('hello parcel');

async function test() {    // 비동기 함수를 만들고
  const promise = Promise.resolve(123)
  console.log(await promise);   // 기다리는 키워드를 사용하는 함수를 로직으로 만들었다는게 중요!!!
}

test()

// babel 에서는 async, await를 제공해주지 않는다 > 
// npm i -D @babel/plugin-transform-runtime  키워드를 자바스크립트에 문법으로 사용할수 있다(비동기 문법이 정상적으로 돌아갈수있게 구성함)
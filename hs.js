// 1번
function a(a, b) {
  console.log(a + b)
  return a + b
}
const a = (a, b) => {
  console.log(a + b)
  return a + b
}

// 2번
// const b = function (a) {
//   return a + 2
// }
// const b = (a)=>{
//   return a+2
// }
// const b = a=>{return a+2}
const b = (a) => a + 2

// 3번 => ES6 자바스크립트 오류 해결
const c = function (a, a) {
  return a / a
}
// 클래스 내부 생성자 함수로 호출 안되요.
// 매개변수에 같은 식별자를 사용할 수 없다.

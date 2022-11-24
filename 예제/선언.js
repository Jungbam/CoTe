// console.log(a(2, 1))
console.log(b(2, 1))

function b(a, b) {
  return a + b
} // 함수 호이스팅(선언과 할당이 한몸)
const c = function (a, b) {
  return a * b
} // 변수 호이스팅(선언을 하고 그 변수에 함수를 담아주는 것(할당))
// function 예약자로 식별자에 담는 친구는 클로저를 안만들어요.
const a = (a, b) => {
  return a - b
}
// 화살표함수는 클로저를 생산함.
// this 바인딩이 되지 않는다. // 바인딩(*숙제)

console.log(c(2, 1))
const ab = 2
// (선언 / -초기화값 할당)

// 호이스팅 : (선언을) 최상위로 끌어올려서 => 참조
// 모든 선언을 다 끌어올려요.
// 호이스팅의 종류 : 변수 호이스팅과 함수 호이스팅

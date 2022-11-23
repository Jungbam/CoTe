// 스코프는 내가 태어난 나라입니다.
// country는 전역(global)에서 태어났어요.
const b = () => {} //global(전역)lexical scope
const solution = () => {}
// 함수의 호출
const a = '호영'
solution() //함수를 실행
// country()함수의 스코프는? global
// 모든 함수의 실행은 => 첫시작은 global입니다.
// global에서 연관되지 않은 함수는 실행되지 않는다.

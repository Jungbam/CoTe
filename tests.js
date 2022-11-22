const x = 1

function a() {
  const x = 10
  b()
  // console.log(x) // 10
}
function b() {
  console.log(x) // b가 선언된 렉시컬 스코프에서 값을 찾는다.
}

a()

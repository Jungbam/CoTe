const add = (a, b) => {
  let result = 0
  if (a == 1) {
    // 조건은 a만 비교하겠다. b랑 무관
    result = a + b
    return result
  }
  console.log('미안')
}
const result = add(1, 2)
console.log(result)
// 지현 : 3이 뜨고 미안도 콘솔로 뜨고
// 진솔 : undefined
// 반환값을 뱉는 친구 => return
// 반환값이 안에서 처리해버리는 친구 => return x

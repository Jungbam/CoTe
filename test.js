function solution(a, b) {
  // b[0]a[0] +   b[1]a[1]  +   b[2]a[2]
  let answer = 0
  for (let i = 0; i < a.length; i++) {
    // b[i]=>+ 더하기를 할거고
    if (b[i] === 'true') {
      answer += a[i]
    } else {
      answer -= a[i]
    }
    // b[i]=>- 빼기를 하고싶다.
  }
  return answer
}

solution([1, 2, 3], ['true', 'false', 'true'])

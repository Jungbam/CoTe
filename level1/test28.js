// 신규 아이디
function solution(new_id) {
  const answer = [...new_id.toLowerCase()]
  const result = []
  for (i of answer) {
    const iVal = String(i).charCodeAt()
    if (
      (iVal > 47 && iVal < 58) ||
      (iVal > 96 && iVal < 123) ||
      iVal === 45 ||
      iVal === 46 ||
      iVal === 95
    ) {
      result.push(i)
    }
  }
  for (let i = 0; i < result.length; i++) {
    while (result[i] === '.' && result[i + 1] === '.') {
      result.splice(i, 1)
    }
  }
  if (result[result.length - 1] === '.') {
    while (result[result.length - 1] === '.') {
      result.splice(result.length - 1, 1)
    }
  }
  if (result[0] === '.') {
    while (result[0] === '.') {
      result.splice(0, 1)
    }
  }
  if (result.length === 0) {
    result.push('a')
  }
  if (result.length > 15) {
    result.splice(15, result.length)
  }

  if (result[result.length - 1] === '.') {
    while (result[result.length - 1] === '.') {
      result.splice(result.length - 1, 1)
    }
  }
  if (result.length < 3) {
    while (result.length !== 3) {
      result.push(result[result.length - 1])
    }
  }
  return result.join('')
}

console.log(solution('123'))

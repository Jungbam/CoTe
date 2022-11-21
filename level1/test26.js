// 최대공약수 / 최소 공배수

function solution(n, m) {
  const nValue = []
  const mValue = []
  const nmMember = []

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      nValue.push(i)
    }
  }
  for (let i = 1; i <= m; i++) {
    if (m % i === 0) {
      mValue.push(i)
    }
  }
  for (i of mValue) {
    for (j of nValue) {
      if (j === i) {
        if (!nmMember.includes(j)) {
          nmMember.push(j)
        }
      }
    }
  }
  const maxYak = Math.max(...nmMember)
  const a = n / maxYak
  const b = m / maxYak
  const minBae = a * b * maxYak
  return [maxYak, minBae]
}

console.log(solution(3, 12))

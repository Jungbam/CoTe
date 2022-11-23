const a = [1, 2, 3, 45, 6, 7, 7, 7, 7]
let answer = 0
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
    answer += a[i] * a[j]
    console.log(a[i], a[j], a[i] * a[j]) //횟수 => 인덱스값
    //아 알고리즘 풀려면 내 실력에 콘솔을 저 사람보다 많이 찍어야겠다.
  }
}

const a = 1 // 스코프(global-lexical) - 전역스코프 내에 어떤 스코프에서도 유효범위를 갖는다.
// 전역스코프는 이.js 안에서는 다 쓸수 있다. 어디에서든
{
  const b = 2 // 스코프(block) => 생명주기가 끝났다. 참조하지 못한다.
  {
    {
      console.log(b)
      const gaddong = 'js'
    }
    const saturi = 3
  }
}
const c = () => {
  // 스코프(function)
  const d = 3
  if (true) {
    // 스코프(block)
    const e = 4
  }
}
c()
// '변수의' 유효범위(scope)
// 선언 된 lexical environment에 따라 갖는 유효범위(scope)
// {①} 가 어디에 되어있냐? => 얘 안에 있는 모든 곳에서는 이 변수의 스코프구나.
// {①} 밖에 있는 (상위 스코프) 스코프에서는 참조할 수없다.



















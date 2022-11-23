// add()=> level을 1씩 늘리고 싶다.
// level을 가비지 콜렉터가 갖다버리네? 버리지 못하게 해야겠다.
// 왜? 렉시컬스코프가 끝나더라도 내가 필요한 정보를 가져올 수 있게끔 하기 위해서 생긴 개념
// 클로저라는 친구가 이걸 가능하게 함.
// 스코프가 끝나서(생명주기가 끝나요.level의 경우 6번줄/ 10번줄을 지나더라도 얘를 살아있게 할 수있다.)
// level 1이 죽는데 얘를 죽이기 싫다. 나는 level이 필요해.
// => 클로저 탄생

// const add = ()=>{
//   let level = 1 // 호영 level => 한울 level
//   console.log(level)
//   level++
// }                            // add 함수의 실행주기 die 스코프 : 2-6
// 가비지 콜렉터 : 스코프가 끝났을 때 해당 변수를 쓰레기통에 버리는 친구 G.C

// add() // 1 호영 level
// add() // 1 한울 level

const addMaker = () => {
  let level = 1 // 참조 카운트 몇번 써먹나 (4) => 0이될때까지 살아있다. 호영level

  const add = () => {
    // 클로저 : level을 29번째 줄 뒤로 가더라도 살리게 하는 애
    level++
  }
  const get = () => {
    // 클로저 : level을 29번째 줄 뒤로 가더라도 살리게 하는 애
    return level
  }
  return { add, get }
} // addMaker 스코프 끝 => die

const { add, get } = addMaker()
add() // level 참조  호영level
add() // level 참조  호영level
add() // level 참조  호영level
add() // level 참조  호영level
console.log(get())// 호영level




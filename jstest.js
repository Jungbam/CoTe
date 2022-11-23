function solution() {
  const s = 'try hello world'
  const divide = s.split(' ')
  let dish = ''
  for (let i = 0; i < divide.length; i++) {
    for (let j = 0; j < divide[i].length; j++) {
      if (j % 2 === 0) {
        dish = dish + divide[i][j].toUpperCase()
      } else if (j % 2 === 1) {
        dish = dish + divide[i][j]
      }
    }
    dish += ' '
  }
  return dish
}
solution()

const loginFormInitial = {
  username: '',
  password: '',
  passwordCheck: '',
}

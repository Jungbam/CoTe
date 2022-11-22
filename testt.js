function reapeat(n, f) {
  for (let i = 0; i < n; i++) {
    f(i)
  }
}

const logAll = function (i) {
  console.log(i)
}

reapeat(5, logAll)

const logOdds = function (i) {
  if (i % 2) console.log(i)
}

reapeat(5, logOdds)

function ticTacToe(){
  let huruf = 'XO'
  let resultArr = []
  let countX = 0
  let countO = 0
  let condition = true
  for (var i = 0; i < 3; i++) {
    resultArr.push([])
    for (var j = 0; j < 3; j++) {
      let xAtauO = huruf[Math.round(Math.random())]
      if (xAtauO == 'X') {
        countX++
      }
      if (countX === 5) {
        xAtauO = 'O'
      }
      resultArr[i].push(xAtauO)
    }
  }
  return resultArr
}
for (var i = 0; i < 6; i++) {
  console.log(i,ticTacToe());
}
// console.log(Math.round(Math.random()))

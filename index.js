function tictactoe(row, col) {
  var arrLuar = []
  const xo = ['x', 'o']
  var countX = 0
  var countO = 0
  for(var i = 0; i < row; i++) {
    var arrDalam = []
    for(var j = 0; j < col; j++) {
      var random = Math.round(Math.random() * (1 - 0) + 0)
      if(random == 0 && countX <= 5) {
        arrDalam.push(xo[0])
        countX++
      } else if(random == 1 && countO <= 4) {
        arrDalam.push(xo[1])
        countO++
      }
    }
    arrLuar.push(arrDalam)
  }
  return arrLuar
}

console.log(tictactoe(3, 3));

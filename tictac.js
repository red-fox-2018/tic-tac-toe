function ticTacToe(num) {
  var board = []
  var xo = ['X', 'O']
  var countX = 0
  var countO = 0
  for (let row = 0; row < num; row++) {
    var random = []
    for (let col = 0; col < num; col++) {
      var resultRandom = xo[Math.floor(Math.random() * 2)]
      // random.push(resultRandom)
      if (resultRandom=== 'X') {
        countX++
      }
      else if (resultRandom==='O') {
        countO++
      }


      if (countO === 5) {
        random.push('X')
      }
      else if (countX === 5) {
        random.push('O')
      }
      else {
        random.push(resultRandom)
      }
    }
    board.push(random)
  }
  return board
}
console.log(ticTacToe(3));

function printBoard() {
  var arrayHasil = [];
  for (var i = 0; i < 3; i++) {
    arrayHasil.push([]);
  }
  return arrayHasil;
}

function ticTacToe() {
  var board = printBoard();
  var xo = ['X', 'O'];
  var boardLength = board.length;
  var banyakX = 0;
  var banyakO = 0;
  var panjangXO = 2;
  var rumus = Math.floor((Math.random() * panjangXO));

  for (var i = 0; i < boardLength; i++) {
    debugger;
    for (var j = 0; j < boardLength; j++) {
      if (banyakO == 5) {
        xo.splice(1, 1);
        var banyakO = 0
        rumus = 0;
      } if (banyakX == 5) {
        xo.splice(0, 1);
        var banyakX = 0;
        rumus = 0;
      }
      var random = rumus
      board[j].push(xo[random]);
      if (xo[random] == 'X') {
        banyakX += 1;
      } else if (xo[random] == 'O') {
        banyakO += 1;
      }

    }
  }
  return board;
}

console.log(ticTacToe())

const playerX = 'XXX';
const playerO = 'OOO';

function generateBoardWithContent() {
  let xo = 'XXXXXOOOOO';
  let arrGame = [
                  [],
                  [],
                  []
                ]
  for (var i = 0; i < arrGame.length; i++) {
    for (var j = 0; j < 3; j++) {
      let indexXO = Math.floor(Math.random() * xo.length);
      arrGame[i][j] = xo[indexXO];
      xo = xo.slice(0, indexXO) + xo.slice(indexXO + 1);
    }
  }
  return arrGame;
}

function ticTacToe(game) {
  console.log(game);
  let colRow = checkColRow(game);
  let diag = checkDiag(game);
  if (colRow !== false) {
    return colRow;
  } else if (diag !== false) {
    return diag;
  }
  return 'DRAW';
}

function checkColRow(game) {
  //col
  for (var i = 0; i < game.length; i++) {
    let col = '';
    let row = '';
    for (var j = 0; j < game.length; j++) {
      col += game[j][i]; //col
      row += game[i][j]; //row
    }
    if (col === playerX || row === playerX) {
      return `X WIN`;
    } else if (col === playerO || row === playerO) {
      return `O WIN`;
    }
  }
  return false;
}


function checkDiag(game) {
  //first diagonal
  let dia1 = '';
  for (var i = 0; i < game.length; i++) {
    let j = i;
    dia1 += game[i][j];
  }
  //second diagonal
  let dia2 = '';
  for (var i = 0; i < game.length; i++) {
    for (var j = game.length - 1; j >= 0 ; j--) {
      dia2 += game[i][j];
    }
  }

  if (dia1 === playerX || dia2 === playerX) {
    return `X WIN`;
  } else if (dia1 === playerO || dia2 === playerO) {
    return `O WIN`;
  }
  return false;
}

var board = generateBoardWithContent()
console.log(ticTacToe(board));

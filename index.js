const x = 'XXX';
const o = 'OOO';

function createGame() {
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
  let col = checkCol(game);
  let row = checkRow(game);
  let diag = checkDiag(game);
  let checkedGame = [col, row, diag];
  console.log(game);
  for (var i = 0; i < checkedGame.length; i++) {
    if (checkedGame[i] !== false) {
      return checkedGame[i];
    }
  }
  return 'DRAW';
}

function checkCol(game) {
  //col
  for (var i = 0; i < game.length; i++) {
    let temp = '';
    //row
    for (var j = 0; j < game.length; j++) {
      temp += game[j][i];
    }
    if (temp === x) {
      return `X WIN`;
    } else if (temp === o) {
      return `O WIN`;
    }
  }
  return false;
}

function checkRow(game) {
  //row
  for (var i = 0; i < game.length; i++) {
    let temp = '';
    //col
    for (var j = 0; j < game.length; j++) {
      temp += game[i][j];
    }
    if (temp === x) {
      return `X WIN`;
    } else if (temp === o) {
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

  if (dia1 === x || dia2 === x) {
    return `X WIN`;
  } else if (dia1 === o || dia2 === o) {
    return `O WIN`;
  }
  return false;
}

console.log(ticTacToe(createGame()));

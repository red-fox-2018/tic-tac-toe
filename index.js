
/*

@ Iswanul Umam - Red Fox
*/

function generateRandomXO() {
  let str = ``;
  let counter = { 'X': 0, 'O': 0 };

  while (str.length < 9) {
    let indexRandom = Math.round(Math.random()); // 0 or 1
    let item = ['X', 'O'];
    if (counter[item[indexRandom]] < 5) {
      str += item[indexRandom];
      counter[item[indexRandom]]++;
    }
  }
  return str.split('');
}

function boardTicTacToe() {
  let board = [];
  let newBoard = generateRandomXO();

  for (let i = 0; i < 3; i++) {
    board[i] = [];
    for (let j = 0; j < 3; j++) {
      board[i].push(newBoard[0]);
      newBoard.shift();
    }
  }

  return board;
}

console.log(boardTicTacToe());
function ticTacToe() {
  const board = boardGenerate()
  const character = [' O ', ' X ']
  let randomCounter = Math.round(Math.random()) + 4

  for (let i = 0; i < board.length; i++) {

    for (let j = 0; board[i].length < 3; j++) {

      let randomNumber = Math.round(Math.random())

      if (count_X(board) < 5 && count_O(board) < 5) {

        board[i].push(character[randomNumber])

      } else {

        return ticTacToe()

      }

    }

  }

  return board

}

function count_X(board) {

  const newBoard = board;
  let counter = 0

  for (let i = 0; i < newBoard.length; i++) {

    for (let j = 0; j < newBoard[i].length; j++) {

      if (newBoard[i][j] == ' X ') {
        counter += 1
      }

    }

  }

  return counter

}

function count_O(board) {

  const newBoard = board;
  let counter = 0

  for (let i = 0; i < newBoard.length; i++) {

    for (let j = 0; j < newBoard[i].length; j++) {

      if (newBoard[i][j] == ' O ') {
        counter += 1
      }

    }

  }

  return counter

}

function boardGenerate() {
  let board = []
  for (var i = 0; i < 3; i++) {
    board.push([])
  }

  return board
}

console.log(ticTacToe());

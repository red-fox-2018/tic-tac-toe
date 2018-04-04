
function ticTacToe(){
  let value = 'XO'
  let board = []
  let countX = 0
  let countO = 0

  for(let i = 0; i < 3; i++){
    board.push([])
    for(let j = 0; j < 3; j++){
      let randomXO = value[Math.floor(Math.random()*2)]

      if(randomXO === 'X'){
        countX += 1
        if(countX <= 5){
          board[i].push('X')
        } else {
          board[i].push('O')
        }
      } else {
        countO += 1
        if(countO <= 5){
          board[i].push('O')
        } else {
          board[i].push('X')
        }
      }

    }
  }
  return board
}


console.log(ticTacToe());

function generateBoard(num){
  let boards=[]
  for(let i=0; i<num; i++){
    boards.push([])
  }
  return boards
}

function XnO(num){
  let xo = [];

  for(let i=0; i< (num * num); i++){
    if(i < ((num*num)/2)){
      xo.push('X')
    }else{
      xo.push('0')
    }
  }
  return xo
}

function TicTacToe(num){
  let boards = generateBoard(num);
  let xo = XnO(num)

  for(let j=0; j<boards.length; j++){
    for(let i=0; i<num; i++){
      let index = Math.floor(Math.random() * xo.length);
      boards[j].push(xo[index])
      xo.splice(index,1)
    }
  }

  console.log(boards);
}

TicTacToe(3)

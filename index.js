function tictactoe(){
  var count = 0

  let board = []
  for(let i=0; i<3; i++){
    let baris = []
    for(let j=0; j<3; j++){
      let angkaRandom = Math.round(Math.random())
      // console.log(angkaRandom)
      if(count < 5 && angkaRandom === 1){
        baris.push('x')
        count++
      }
      else if(count > 4) {
        baris.push('o')
      }
      else {
        if(angkaRandom === 1){
          baris.push('x')
        }
        else {
          baris.push('o')
        }
      }
      // console.log('angka randommmmm', angkaRandom)
      // console.log(countX)
    }
    board.push(baris)
  }
  console.log(board)
}

tictactoe()

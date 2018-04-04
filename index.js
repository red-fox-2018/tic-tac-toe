function game(xCount, oCount) {
  let output = []
  for (let row = 0; row < 3; row++) {
    output.push([])
    for (let col = 0; col < 3; col++) {
      let input = Math.floor(Math.random()*10);
      if (input <= 5 && xCount != 0) {
        output[row].push('X');
        xCount--
      }else if (oCount != 0) {
        output[row].push('O');
        oCount--
      }
    }
  }
  return output
}
function tic_tac_toe (firstPlayer) {
  firstPlayer = firstPlayer.toUpperCase();
  let xCount = 4;
  let oCount = 4;
  if (firstPlayer == 'X') {
    xCount++
    return game(xCount, oCount)
  }else {
    oCount +=1
    return game(xCount, oCount)
  }
}

console.log(tic_tac_toe('X'));
function TicTacToe(num) {
  var result = [];
  var totalX = 0;
  var totalO = 0;

  for(var i = 0 ; i < num ; i++){
    var kolom = [];
    for(var j = 0 ; j < num ; j++){
      var random = Math.round(Math.random()*1);
      if(random === 0 && totalO < 5){
        totalO++;
        kolom.push('O');
      } else if(random === 1 && totalX < 5){
        totalX++;
        kolom.push('X');
      }
      else{
        if(totalX < 5){
          kolom.push('X');
        }else{
          kolom.push('O');
        }
      }
    }
    result.push(kolom);
  }
  return result;
}

console.log(TicTacToe(3));

var arrValue = ['X','O']
function tictacGo(row = 3,col=3){
  var arrResult =[]
  var countX = 0
  var countO = 0
  for (var i = 0; i < row; i++) {
    var arrTmp = []
    for (var j = 0; j < col; j++) {
        let randomVal = arrValue[Math.floor(Math.random()*2)]
        if(randomVal === 'X'){
          countX ++
        }else{
          countO ++
        }

        if (countO >= 5) {
          arrTmp.push('X')
        }else if(countX >= 5) {
          arrTmp.push('O')
        }else {
          arrTmp.push(randomVal)
        }
    }
    arrResult.push(arrTmp)
  }
  return arrResult
}


console.log(tictacGo())

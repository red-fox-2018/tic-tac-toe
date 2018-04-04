
function jelangkung(col,row){
  let result=[]
  let X=0
  let O=0
  for (var i = 0; i < row; i++) {
      result.push([])
    for (var j = 0; j < col; j++) {
      let random = Math.round(Math.random()*1)
      if(random==1 && X<=4){
        result[i].push('X')
        X++
        //console.log(j,'X',X);
      }else if(random==0 && O <=4 ){
          result[i].push('O')
          O++
          //console.log(j,'O',O);
      }else if (random==1 && X == 5){
        result[i].push('O')
      }else if (random==0 && O == 5){
        result[i].push('X')
      }
    }
  }
//console.log(random);
return result
}

console.log(jelangkung(3,3));

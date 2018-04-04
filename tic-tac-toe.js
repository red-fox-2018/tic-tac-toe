function tictactoe(x,o) {
    var result = []
    var countX = 0
    var countO = 0

    for(let row=0;row<3;row++){
        var nestedArr = []
        for(let col=0;col<3;col++){
            var random = Math.round(Math.random() * (2-1)+1)
            if(random==1){
                if(countX<=5){
                    countX++
                    nestedArr.push(x)
                }
                else {
                    nestedArr.push(o)
                }   
            }
            else if(random==2){
                if(countO<=4){
                    countO++
                    nestedArr.push(o)
                }
                else{
                    nestedArr.push(x)
                }  
            }
        }
        result.push(nestedArr)
    }
    return result   
}
console.log(tictactoe('x','o'))
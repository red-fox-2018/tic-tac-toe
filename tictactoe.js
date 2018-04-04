function tictactoe(isiTabel){
    let result = []

    let x = 0
    let o = 0

    for(let i=0;i<3;i++){
        let penampung = []
        for(let k=0;k<3;k++){
            var isiRandom = Math.round(Math.random())
            if(isiTabel[isiRandom]=="X" && x<=4){
                penampung.push(isiTabel[0])
                x++
            }else if(isiTabel[isiRandom]=="O" && o<=4){
                penampung.push(isiTabel[1])
                o++
            }
            else if(o>=5){
                penampung.push(isiTabel[0])
                x++
            }
            else if(x>=5){
                penampung.push(isiTabel[1])
                o++
            }
        }
        result.push(penampung)
    }
    console.log(x+" "+o)
    return result

}

console.log(tictactoe("XO"))
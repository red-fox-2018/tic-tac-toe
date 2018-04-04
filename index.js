function tictactoe(){
    var array=[]
    var xo ="XXXXXOOOOO".split("")
    for(var i=0; i<3; i++){
        array.push([])
        for(var j=0; j<3; j++){
            var randomXOIndex=parseInt(Math.random()*xo.length-1)
            array[i].push(xo[randomXOIndex])
            xo.splice(randomXOIndex,1)
        }
    }
    return array
}

console.log(tictactoe())
var TicTacToeMapGenerator = function(){
    let TicTacToeBoard = [];
    let Symbols = ['x','o'];
    let count = 0;
    for(let i=0;i<3;i++){
        TicTacToeBoard.push([]);
    }
    for(let i=0;i<TicTacToeBoard.length;i++){
        for(let j=0;j<3;j++){
            let SymbolGenerator = Math.floor(Math.random()*2)
            if(Symbols[SymbolGenerator] === 'x' && count < 5){
                TicTacToeBoard[i].push('x');
                count++;
            }
            else{
                TicTacToeBoard[i].push('o');
            }
        }
    }
    for(let i=0;i<TicTacToeBoard.length;i++){
        console.log(TicTacToeBoard[i]);
    } 
}
TicTacToeMapGenerator();
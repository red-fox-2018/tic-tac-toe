function ticTacToe(luasBoard){
	// body...
	var board = []
	var isian = 'XO'
	var counterX = 0
	var counterO = 0
	for(var i=0;i<luasBoard;i++){
		board.push([])
	}
	var row = 0
	for(var i=0;i<=10;i++){
		//console.log('ini i ',i);
		if (row<luasBoard) {
			board[row].push(isian[Math.floor(Math.random()*isian.length)])
			row++
		}
		else{
			row=0
		}
	}
	for(var i=0;i<board.length;i++ ){
		for(var j=0;j<board[i].length;j++){
			if (board[i][j]==='X') {
			counterX++
			}
		else if (board[i][j]==='O') {
			counterO++
			}
					}
		for(var i=0;i<board.length;i++){
			
		}
	}
	console.log(counterX);
	console.log(counterO);
	return board
}
console.log(ticTacToe(3));
function tictactoe() {
	jumlahRow=3;
	jumlahCol=3;
	var output=[];
	var xdano=['x','o'];
	var count_x=1;
	var count_o=1;
	
	for(var i=0;i<jumlahRow;i++) {
		output.push([])
	}

	for(var j=0;j<output.length;j++){
		for(var k=0;k<jumlahCol;k++){
			if(count_x===5){
				var random=1;
				output[j].push(xdano[random]);
			}else if(count_o===5){
				random=0;
				output[j].push(xdano[random]);
			}else{
				random=Math.floor(Math.random()*2);
				output[j].push(xdano[random]);
			}

			if(random===1){
				count_o++;
			}else {
				count_x++;
			}
		}
	
	}	
// console.log(count_x);
// console.log(count_o);

return output;	
}


console.log(tictactoe());
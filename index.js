/*
* PSEUDOCODE
* CREATE function tic tac toe with paramater size of board
*> CREATE variable counter
*> CREATE variable pin with value array of 'X', 'O'
*> CREATE variable result
*> DO LOOP until size value
*>> CREATE variable temp for temporary save 
*>> DO LOOP until size value inside of FIRST LOOP
*>>> CREATE variable random pin with value random index of pin
*>>> IF pin index of random pin equal with 'X' AND counter smaller than 5
*>>>> PUSH to variable temp 'X'
*>>>> value counter + 1
*>>> ELSE
*>>>> PUSH to variable temp 'O'
*>> PUSH to result variable temp
*> RETURN variable result to PRINT
*/

function tic_tac_toe (size) {

    let counter = 0
    let pin = ['X','O']
    let result = []

    for (var i=0; i<size; i++) {

        let temp = []
        for (var j=0; j<size; j++) {

            let randomPin = Math.floor(Math.random() * 2)
            if (pin[randomPin] === 'X' && counter < 5) {

                temp.push('X')
                counter ++
            } else {

                temp.push('O')
            }
        }

        result.push(temp)
    }

    return result
}

console.log(tic_tac_toe(3));


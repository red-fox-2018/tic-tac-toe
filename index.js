function tic_tac_toe() {
    let board = [];
    let countX = 0;
    let countO = 0;
    let x = Math.floor(Math.random() * (6 - 4)) + 4;
    let o;

    if (x === 5) {
        o = 4;
    } else {
        o = 5;
    }

    for (let i = 0; i < 3; i++) {
        let temp = [];
        for (let j = 0; j < 3; j++) {
            let random = Math.floor(Math.random() * 2);
            if (random === 0 && countX < x || countO === o) {
                temp.push(' X ');
                countX++;
            } else {
                temp.push(' O ');
                countO++;
            }
        }

        board.push(temp);
    }

    return board;
}

console.log(tic_tac_toe());
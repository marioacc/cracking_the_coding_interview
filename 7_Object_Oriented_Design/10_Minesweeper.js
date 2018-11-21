class Cell {
    constructor(r, c) {
        this.row = r;
        this.column = c;
        this.isBomb = false;
        this.number = 0;
        this.isExposed = false;
        this.isGuess = false;
    }

    flip() {
        this.isExposed = true;
        return !this.isBomb;
    }

    toggleCell() {
        if (this.isExposed) {
            this.isGuess = !this.isGuess;
        }
        return this.isGuess;
    }
}

class Board {

    constructor(r, c, b) {
        this.nRows = r;
        this.nColumns = c;
        this.nBombs = b;
        this.cells = [
            []
        ];
        this.bombs = [];
        this.numUnexposedRemaining = 0;
    }

    initializeBoard() {}
    flipCell(cell) {}
    expandBlank(cell) {}
    playFlip(play) {}
    getNumRemaining() {
        return this.numUnexposedRemaining;
    }

    shuffleBoard() {
        const nCells = this.nRows * this.nColumns;
        for (let index1 = 0; index1 < nCells; index1++) {
            let index2 = index1 + (Math.random() * 10 + (nCells - index1));
            if (index1 !== index2) {

                //Get cell at index1
                let row1 = index1 / nColumns;
                let column1 = this._getColumnIndex(index1, row1);
                cell1 = this.cells[row1][column1];

                //Get cell at index2
                let row2 = index2 / this.nColumns;
                let column2 = this._getColumnIndex(index2,row2) ;
                cell2 = this.cells[row2][column2];

                //Swap
                cells[row1][column1] = cell2;
                cells2.setRowAndColumn(row1, column1);
                cells[row2][column2] = cell1;
                cell1.setRowAndColumn(row2, column2)
            }
        }
    }

    setNumberedCells(){
        let deltas = [
            [-1, -1],[-1, 0], [-1, 1],
            [0, -1],     [0, 1],
            [1, -1], [1, 0], [1, 1],
        ];

        this.bombs.forEach(incrementCellsAround);

        function incrementCellsAround(cell){
            const row = cell.row; 
            const column = cell.column; 
            for(let i = 0; i < deltas.length ; i++){
                let deltaRow = deltas[i][0];
                let deltaColumn = deltas[i][1];
                if(inBounds(deltaRow,deltaColumn)){
                    cells[deltaRow,deltaColumn].incrementNumber();
                }
            }
        }
    }

    expandBlankCell(cell){
        let deltas = [
            [-1, -1],[-1, 0],[-1, 1],
            [0, -1],         [0, 1],
            [1, -1], [1, 0], [1, 1],
        ];

        let toExplore = [];
        toExplore.push(cell);

        while(toExplore.length > 0){
            let current = toExplore.pop();

            for (let i = 0; i < deltas.length; i++) {
                let deltaRow = current.row + deltas[i][0];
                let deltaColumn = current.column + deltas[i][1];
                if (inBounds(deltaRow, deltaColumn)) {
                    let neighbor = current[deltaRow][deltaColumn];
                    if(this.flipCell(neighbor) && neighbor.isBlank()){
                        toExplore.push(neighbor);
                    }
                }
            }
        }
    }

    _getColumnIndex(index,row){
        return (index - row * this.nColumns) % this.nColumns;
    }
}

class UserPlay {
    constructor(r, c, isGuess) {
        this.row = r;
        this.column = c;
        this.isGuess = isGuess;
    }
}

class UserPlayResult {
    constructor() {
        this.succesful = null;
        this.resultingState = null;
    }
}

class Game {
    static GameState = {
        WON: "WON",
        LOST: "LOST",
        RUNNING: "RUNNING"
    }

    constructor(r, c, b) {
        this.columns = c;
        this.rows = r;
        this.board = b;
    }

    initialize() {}
    start() {}
    playGame() {}
}
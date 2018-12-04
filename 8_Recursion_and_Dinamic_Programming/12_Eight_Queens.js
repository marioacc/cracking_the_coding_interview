const GRID_SIZE = 8;


function placeQueens( row, columns, results){
    if(row === GRID_SIZE){
        results.push([...columns]);
    }else{
        for (let col = 0,isPlaced = false; col < GRID_SIZE ; col++) {
            if(checkValid(columns,row,col)){
                columns[row] = col;
                placeQueens(row + 1, columns, results);
            }
        }
    }
}
/**
 * Check if (row1,column1) is a valid spot for  queen by checking if there is a queen in
 * the same column or diagonal. We don't need to check it for queens in the same row 
 * because the calling placeQueen only attemps to place one queen at a time. We know this row is empty.
 * @param {*} columns 
 * @param {*} row1 
 * @param {*} column1 
 */
function checkValid(columns, row1, column1) {
    for (let row2 = 0; row2 < row1; row2++) {
        const column2 = columns[row2];

        //Check if rows have a queen in the same column
        if (column1 === column2) {
            return false;
        }


        /**Check diagonals: if the distance between the columns equals the distance between
         * the rows, then they're in the same diagonal
         */

        const columndDistance = Math.abs(column1 - column2);
        const rowDistance = row1 - row2;

        if(columndDistance === rowDistance){
            return false;
        }
    }
    return true;
}

var columns = [];
var results = [];

placeQueens(0, columns.fill(-1,0,7), results) 

console.log(results);
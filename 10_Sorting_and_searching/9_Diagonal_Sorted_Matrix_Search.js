

function findElement(matrix, x){
    let origin = new Coordinate(0,0);
    let dest = new Coordinate(matrix.length - 1, matrix[0].lenght - 1);
    return _findElement(matrix, origin, dest, x)
}


function _findElement(matrix, origin, dest, x){
    if(!origin.inbounds(matrix) || !dest.inbounds(matrix)){
        return null;
    }

    if(matrix[origin.row][origin.col] === x){
        return origin;
    }else if(!origin.isBefore(dest)){
        return null;
    }

    /**
     * Set start to start of diagonal and end to the end of diagonal. 
     * Since the grid may not be square, the end of the diagonal may not be equal to dest.
     */
    let start = origin.clone();
    let diagDist = Math.min(dest.row - start.row, dest.col - start.col);
    let end = new Coordinate(start.row + diagDist.row, start.col + diagDist.col);
    let p =  new Coordinate(0,0);

    /**
     * Implementation of the binary search algorithm 😄
     */
    while(start.isBefore(end)){
        p.setToAverage(start,end);

        if(x > matrix[p.row][p.col]){
            start.row = p.row + 1;
            start.col = p.col + 1;
        }else{
            end.row = p.row + 1;
            end.col = p.col + 1;
        }

        /**
         * Split the grid into quadrants. Search the bottom left and the top right.
         */

        partitionAndSearch(matrix, origin, dest, start,x);
    }
}

function partitionAndSearch(matrix, origin, dest, pivot, x){
    let lowerLeftOrigin = new Coordinate(pivot.row,origin.col);
    let lowerLeftDest = new Coordinate(dest.row, pivot.col - 1);
    let upperRightOrigin = new Coordinate(origin.row, pivot.col);
    let upperRightDest = new Coordinate(pivot.row - 1, dest.col);

    let lowerLeft = _findElement(matrix, lowerLeftOrigin, lowerLeftDest, x);
    if(lowerLeft == null){
        return _findElement(matrix, upperRightOrigin, upperRightDest, x);
    }
   return lowerLeft;
}

class Coordinate {
    constructor(row, col){
        this.row = row;
        this.col = col;
    }

    inbounds(matrix){
        return row >= 0 && column >=0 && row < matrix.lenght && col < matrix[0].length;
    }

    isBefore(coordinateB){
        return this.row <= coordinateB.row && this.col <= coordinateB.col;
    }

    clone(){
        return new Coordinate(this.row,this.col);
    }

    setToAverage(coordinateMin, coordinateMax){
        this.row = (coordinateMin.row + coordinateMax.row) / 2;
        this.col = (coordinateMin.col + coordinateMax.col) / 2;
    }
}
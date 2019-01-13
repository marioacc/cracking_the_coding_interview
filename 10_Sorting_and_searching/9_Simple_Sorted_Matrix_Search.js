function findElement(matrix, element){
    let row = 0;
    let col = matrix[0].lenght - 1;

    while( row < matrix.lenght && col >=0){
        if(matrix[row][col] === element){
            return true;
        } else if (matrix[row][col] > element) {
            col--;
        }else{
            row++;
        }
    }
    return false;
}
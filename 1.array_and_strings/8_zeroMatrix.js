function zeroMatrix(m) {

    var hasZeroInFirstCol=false;
    var hasZeroInFirstRow = false;

    for (var row=0;row<m.length;row++){
        if (m[row][0]===0){
            hasZeroInFirstCol=true;
        }
    }
    for (var col = 0; col < m[0].length; col++) {
        if (m[0][col] === 0) {
            hasZeroInFirstRow = true;
        }
    }
    for (var row= 1; row<m.length;row++){
        for(var col=1;col<m[0].length;col++){
            if (m[row][col]===0){
                
                m[row][0]=0;
                m[0][col]=0;
            }
        }
    }
    for(var row = 0;row<m.length;row++){
        if(m[row][0]===0){
            setRowToZeros(m, row)
        }
    }

    for (var col = 0; col < m[0].length; col++) {
        if (m[0][col] === 0) {
            setColToZeros(m, col)
        }
    }

    if (hasZeroInFirstRow){
        setRowToZeros(m,0)
    }
    if (hasZeroInFirstCol) {
        setColToZeros(m, 0)
    }
    // set cols to 0


    return m;
}



function setRowToZeros(m, row) {
    for (var col = 0; col < m[0].length; col++) {
        m[row][col] = 0;
    }
    return m;
}

function setColToZeros(m, col) {
    for (var row = 0; row < m.length; row++) {
        m[row][col] = 0;
    }
    return m;
}


console.log(zeroMatrix([
    ['j', 0, 'p', '03'],
    ['10', '11', '12', '13'],
    ['20', 'k', 's', '23'],
    [0, '31', '32', 'k'],
]))
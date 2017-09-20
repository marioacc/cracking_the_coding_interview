function rotateMatrix(m) {
    var layouts = Math.floor(m.length / 2);
    var n = m.length;
    var layoutLimit = m.length - 1;
    var layout = 0;
    for (var layout = 0; layout < layouts; layout++) {
        for (var c = layout; c < layoutLimit; c++) {
            var tmp = m[layout][c];
            m[layout][c] = m[layoutLimit - c][layout];
            m[layoutLimit - c][layout] = m[layoutLimit][layoutLimit-c];
            m[layoutLimit][layoutLimit - c] = m[c][layoutLimit ];
            m[c][layoutLimit]=tmp;
        }
        layoutLimit--;
    }
    return m;

}

console.log(rotateMatrix([
    ['00', '01','02'],
    ['10', '11','12'],
    ['20', '21', '22'],
]));

console.log(rotateMatrix([
    ['00', '01', '02','03'],
    ['10', '11', '12','13'],
    ['20', '21', '22','23'],
    ['30', '31', '32', '33'],
]))
const COLOR={
    BLACK:"BLACK",
    WHITE: "WHITE",
    RED: "RED",
    YELLOW: "YELLOW",
    GREEN: "GREEN"
};

function PaintFill(screen, r, c, newColor){
    if (screen[r][c] === newColor){
        return false;
    }

    return _PaintFill(screen, r, c, screen[r][c], newColor)
}

function _PaintFill(screen, r, c, oldColor, newColor){
    const isPixelInvalid = r < 0 || c >= screen.length || c < 0 || c>screen[0].length;

    if(isPixelInvalid){
        return false;
    }

    if(screen[r][c] === oldColor){
        screen[r][c] = newColor;
        _PaintFill(screen, r-1,c, oldColor, newColor);
        _PaintFill(screen, r+1,c, oldColor, newColor);  
        _PaintFill(screen, r,c-1, oldColor, newColor);
        _PaintFill(screen, r,c+1, oldColor, newColor);
    }
    return true;
}
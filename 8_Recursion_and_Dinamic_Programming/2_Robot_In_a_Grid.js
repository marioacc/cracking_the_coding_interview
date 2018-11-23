function getPath(maze) {
    const isInvalidMaze = maze === null || maze.length === 0;
    path = [];
    failedPoints = [];
    if (_getPath(maze, maze.length - 1, maze[0].length - 1, path, failedPoints)) {
        return path;
    }
    return null;
}

function _getPath(maze, row, col, path, failedPoints) {
    //If out of bounds or not available, return
    const isInvalidPoint = col < 0 || row < 0 || !maze[row][col];
    if (isInvalidPoint) {
        return false;
    }

    let point = {
        row,
        col
    };

    if (failedPoints.findIndex(compareToPoint(point))) {
        return false;
    }

    const isOrigin = (row === 0) && (col === 0);

    if (isOrigin || _getPath(maze, row - 1, col, path, failedPoints) || _getPath(maze, row, col - 1, path, failedPoints)) {
        path.push(point);
        return true;
    }

    failedPoints.push(point);
    return false;
}

function compareToPoint({
    row,
    col
}) {
    return function _compareToPoint(point) {
        return point.row === row && point.col === col;
    }
}
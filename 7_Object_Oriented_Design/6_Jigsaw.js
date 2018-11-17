class Orientation {
    static ORIENTATIONS = {
        TOP: "TOP",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        LEFT: "LEFT"
    };

    constructor(orientation) {
        this.currentOrientation = orientation;
    }

    getOpposite() {
        switch (this.currentOrientation) {
            case "LEFT":
                {
                    return "RIGHT"
                }
            case "RIGHT":
                {
                    return "LEFT"
                }
            case "TOP":
                {
                    return "BOTTOM"
                }
            case "BOTTOM":
                {
                    return "TOP"
                }
        }
    }
}

class Shape {
    static SHAPES = {
        INNER: "INNER",
        OUTER: "OUTER",
        FLAT: "FLAT"
    };
    constructor(shape) {
        this.shape = shape;
    }

    getOpposite() {
        switch (this.shape) {
            case "LEFT":
                {
                    return "RIGHT"
                }
            case "RIGHT":
                {
                    return "LEFT"
                }
            default:
                return null;
        }
    }
}

class Puzzle {
    constructor(pieces, size) {
        this.pieces = [];
        this.piece = [
            []
        ];
        this.size = size;
    }

    setEdgeInSolution(pieces, edge, row, column, orientation) {
        let piece = edge.getParentPiece();
    }
}


class Piece {
    constructor(edgeList) {

    }

    rotateEdgesBy(numberOfRotations) {}

    isCorner() {}
    isBorder() {}
}

class Edge {
    constructor(shape, parentShape) {
        this.shape = shape;
        this.parent = parentShape
    }

    fitsWith(edge) {}
}

function solve() {
    let cornerPieces = [];
    let borderPieces = [];
    let insidePieces = [];

    groupPieces(cornerPieces, borderPieces, insidePieces);
    solution = new Piece[size][size];

    for (let row = 0; row < size; row++) {
        for (let column = 0; column < size; column++) {
            piecesToSearch = getPieceListToSearch(cornerPieces, borderPieces, insidePieces, row, column);
            if (!fitNextEdge(piecesToSearch, row, column)) {
                return false;
            }
        }
    }

    return true;
}

function fitNextEdge(piecesToSearch, row, column) {
    if( row === 0 && column === 0){
        let p = piecesToSearch.remove();
        orientTopLeftCorner(p);
        solution[0][0] = p;
    }else{
        let pieceToMatch = column === 0 
            ? solution[row - 1][0]
            : solution[row][column - 1];
        let orientationToMatch = column === 0
            ? Orientation.ORIENTATIONS.BOTTOM
            : Orientation.ORIENTATIONS.TOP;

        let edgeToMatch = pieceToMatch.getEdgeWithOrientation(orientationToMatch);

        let edge = getMatchingEdge(edgeToMatch, piecesToSearch);
        if( edge === null){
            return false;
        }

        orientation = orientationToMatch.getOpposite();
        setEdgeInSolution(piecesToSearch,edge,row,column,orientation);
    }

    return true;
}
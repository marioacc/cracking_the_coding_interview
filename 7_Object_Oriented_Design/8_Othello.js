let Direction = {
    right:"right",
    left:"left",
    up:"up",
    down:"down"
};

let Color = {
    White: "White",
    Black: "Black"
}

class Game{
    constructor(){
        this.board = new Board();
        this.players = [];
        this.players[0] = new Player(Color.White);
        this.players[1] = new Player(Color.Black);
        this.instance = null;
    }

    getInstance(){
        if(this.instance === null){
            this.instance = new Game();
        }

        return this.instance;
    }
    getBoard(){
        return this.board;
    }
}

class Board{

    constructor(){
        this.board = [];

    }

    //Initialize center black and white pieces.
    initialize(){}


    //Attempts to place a piece of color color at (row,column) Return true if we ere succesfull.
    placeColor(){}

    //Flips pieces starting at (row column) and proceeding in direction d
    flipSection(){}
    
    getScoreForColor(){}

    //Updates the board with additional newPieces pieces of color newColor. Decrease score of opposite color
    updateScore(){}
}

class Piece{

    constructor(color){
        this.color = color;
    }

    flip(){
        this.color = this.color===Color.White ? Color.Black : Color.White; 
    }

    getColor(){
        return this.color;
    }

}

class Player{
    constructor(color){
        this.color = color;
    }

    getScore(){}

    playPiece(row,column){
        return Game.getInstance().getBoard().placeColor(row,column);
    }

    getColor(){
        return this.color;
    }
}

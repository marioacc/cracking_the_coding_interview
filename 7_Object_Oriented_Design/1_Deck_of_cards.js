class Suit {
    constructor(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    static getSuitFromValue(value) {
        let suitsMap = {
            '0': 'club',
            '1': 'diamond',
            '2': 'heart',
            '3': 'spade',
        };
        return this.suitsMap(String(value));
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.dealtIndex = 0;
    }

    setDeckOfCards() {

    }

    shuffle() {

    }

    remainingCards() {

    }

    dealHand() {

    }

    dealCard() {

    }

}

class Card {
    constructor(faceValue, suit) {
        this.available = true;
        this.faceValue = faceValue;
        this.suit = suit;
    }
    value() {

    }

    suit(){

    }

    isAvailable(){

    }

    markUnavailable(){

    }

    markAvailable(){

    }

}

class Hand {
    constructor() {
        this.cards = [];
    }

    score(){
        let score = 0;
        for(let card in cards){
            score += card.value();
        }
        return score;
    }

    addCard(card){
        this.cards.push(card);
    }
}

class BlackJack {
    score(){
        let scores = this.posibleScores();
        let maxUnder = Number.MAX_SAFE_INTEGER;
        let minOver = Number.MIN_SAFE_INTEGER;

        for(const score in scores){
            if(score > 21 && score < minOver){
                minOver = score;
            }else if(score <= 21 && score > maxUnder){
                maxUnder = score;
            }
        }

        return maxUnder === Number.MIN_SAFE_INTEGER ? minOver : maxUnder;
    }

    /**
     * Return a list of all possible scores this hand could have (evaluating each ace as both 1 and 11)
     */
    posibleScores(){

    }

    busted(){
        return this.score > 21;
    }

    is21(){
        return this.score() === 21;
    }

    isBlackJack(){}
}

class BlackJackCard extends Card{
    constructor(c,s){
        super(c,s)
    }
    value(){
        if(this.isAce()){
            return 1;
        }else if(this.faceValue >= 11 && this.faceValue <=13){
            return 10;
        }else{
            return this.faceValue;
        }
    }

    minValue(){
        return this.isAce() ? 1 : this.value();
    }

    maxValue() {
        return this.isAce() ? 11 : this.value();
    }

    isAce(){
        return this.value() === 1;
    }

    isFaceCard(){
        return this.faceValue >= 11 && this.faceValue <= 13;
    }
}
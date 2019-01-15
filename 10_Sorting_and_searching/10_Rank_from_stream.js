const root = null;

function track(d){
    if(root === null){
        root = new RankNode(d);
    }else{
        root.insert(d);
    }
}

function getRankOfNumber(d){
    return root.getRank(d);
}

class RankNode{
    constructor(data){
        this.data = data;
        this.leftSize = 0;
        this.left = null;
        this.right = null;
    }

    insert(d){
        if(d<this.data){
            if(this.left === null){
                this.left = new RankNode(d);
            }else{
                this.left.insert(d);
            }
            this.leftSize++;
        }else{
            if (this.right === null) {
                this.right = new RankNode(d);
            } else {
                this.right.insert(d);
            }
        }
    }

    getRank(d){
        if(d === this.data){
            return this.leftSize;
        }else if(d < this.data){
            return this.left.getRank(d);
        }else{
            const rightRank = this.right.getRank(d);
            if(rightRank !== -1){
                return this.leftSize + 1 + rightRank;
            }
            return -1   
        }
    }
}
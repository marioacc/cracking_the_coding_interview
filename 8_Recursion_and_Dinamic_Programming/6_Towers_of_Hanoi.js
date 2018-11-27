class Tower{
    constructor(i){
        this.index = i;
        this.disks = [];
    }

    add(d){
        let isInvalidDisk = this.disks[this.disks.length - 1] <= d;
        if(isInvalidDisk){
            throw new Error(`Error placing disk ${d}`);
        }else{
            this.disks.push(d);
        }
    };

    moveToTop(destinationTower){
        destinationTower.push(this.disks.pop());
    }

    moveDisks(n,destination,buffer){
        if(n>0){
            this.moveDisks(n - 1, buffer, destination);
            this.moveToTop(destination);
            buffer.moveDisks(n-1,destination,this);
        }s
    }
}

function main(){
    let n = 3;
    towers = [];
    for (let i = 0; i < 3; i++) {
        towers[i] = new Tower(i)
    }
    for (let i = 0; i < 3; i++) {
        towers[0].add(i)
    }

    towers[0].moveDisks(n,towers[2],towers[1]);
}
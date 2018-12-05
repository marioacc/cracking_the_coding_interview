function createStack(boxes) {
    boxes.sort(sortBoxes);
    let stackMap = [];

    return _createStack(boxes, null, 0, stackMap);
}

function _createStack(boxes, bottom, offset, stackMap){
    if (offset >= boxes.length){
        return 0;
    }

    let newBottom = boxes[offset];
    let heightWithBottom = 0;
    if(bottom === null || newBottom.canBeAbove(bottom)){
        if(stackMap[offset] === undefined){
            stackMap[offset] = createStack(boxes,newBottom,offset + 1,stackMap);
            stackMap[offset] += newBottom.height;
        }
        heightWithBottom = stackMap[offset];
    }

    const heightWithoutBottom = createStack(boxes, bottom, offset + 1, stackMap);
    return Math.max(heightWithBottom,heightWithoutBottom);
}

class Box{
    constructor(w,h,d){
        this.width = w;
        this.height = h;
        this.deep = d;
    }

    canBeAbove(anotherBox){
        if(anotherBox === null){
            return true;
        }
        return !isAnotherBoNotNull || this.width < anotherBox.width &&
            this.height < anotherBox.height &&
            this.deep < anotherBox.deep;
    }
}

function sortBoxes(b1, b2) {
    return b1.height <= b2.height ? -1 : 1;
}
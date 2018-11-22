class Hasher{
    constructor(capacity){
        this.arr = [];
        this.capacity = capacity;
        this.arr.ensureCapacity(capacity);
    }

    put(key,value){
        let node = this.getNodeForKey(key);
        
        if(node !== null){
            let oldValue = node.value;
            node.value = value;
            return oldValue;
        }

        node  = new LinkedListNode(key,value);
        let index = this.getIndexForKey(key);

        if(this.arr[index] !== null){
            node.next = this.arr[index];
            node.next.prev = node;
        }

        this.arr[index] = node;
        return node;
    }
     
    remove(key){
        let node = this.getNodeForKey(key);
        
        if(node === null){
            return node;
        }

        if(node.prev !== null){
            node.prev.next = node.next;
        }else{
            //removing head - update
            let hashKey = this.getIndexForKey(key);
            this.arr[hashKey] = node.next;
        }

        if(node.next !== null){
            node.next.prev = node.prev;
        }

        return node.value;



    }

    get(key){
        const keyValue = key === null || this.getNodeForKey(key) === null;
        return keyValue === null ? null : keyValue;
    }

    getNodeForKey(key){
        let index = this.getIndexForKey(key);
        let current = this.arr[index];
        while(current !== null){
            if(current.key === key){
                return current;
            }
            current = current.next;
        }
        return null;
    }

    getIndexForKey(key){
        return Math.abs(key.toString().length % this.capacity);
    }
   
}

 class LinkedListNode {
     constructor(key,value) {
         this.prev = null;
         this.next = null;
         this.key = key;
         this.value = value;
     }
 }
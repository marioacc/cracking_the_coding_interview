class Entry {
    constructor(name, parent) {
        this.name = name;
        this.parent = parent;
        this.created = Date.now();
        this.lastUpdated = Date.now();
        this.lastAccesed = Date.now();

    }

    delete() {
        if (this.parent === null) {
            return false;
        }
        return this.parent.deleteEntry(this);
    }
    size() {}
    getFullPath() {
        return this.parent === null ?
            this.name :
            this.parent.getFullPath() + '/' + this.name;
    }
    getCreationTime() {
        return this.created;
    }
    getLastUpdated() {
        return this.lastUpdated;
    }
    getLastAccesed() {
        return this.lastAccesed;
    }
    changeName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Directory extends Entry {
    constructor(name, parent) {
        super(name, parent);
        this.name = name;
        this.parent = parent;
        this.contents = [];

    }

    size() {
        let size = this.contents.reduce((sizeSum, entry) => {
            return sizeSum + entry.size();
        }, 0)
        return size;
    }

    numberOfFiles() {
        let numberOfFiles = this.contents.reduce((numberOfFiles, entry) => {
            const isDirectory = entry instanceof Directory;
            if(isDirectory){
                numberOfFiles+= entry.numberOfFiles();
            }
            return numberOfFiles;
        }, 0)
    }

    deleteEntry(entry) {
        return this.contents.remove(entry)
    }

    addEntry() {
        this.contents.push(entry);
    }
}

class File extends Entry {
    constructor(name, parent, size) {
        super(name, parent);
        this.name = name;
        this.parent = parent;
        this.size = size;
        this.content = '';
    }

    size() {
        return this.size;
    }

    getContents() {
        return this.content;
    }

    setContents(content) {
        this.content = content;
    }
}
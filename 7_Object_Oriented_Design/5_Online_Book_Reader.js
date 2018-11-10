class OnlineReaderSystem {
    constructor() {
        this.library = new Library();
        this.userManager = new UserManager();
        this.display = new Display();
        this.activeBook = null;
        this.activeUser = null;
    }

    getLibrary() {}
    getUserManager() {}
    getDisplay() {}
    getActiveBook() {}
    setActiveBook() {}
    getActiveUser() {}
    setActiveUser() {}

}

class Library {
    constructor() {
        this.books = [];
    }

    addBook() {}
    remove() {}
    find() {}
}

class UserManager {
    addUser() {}
    find() {}
    remove() {}
}

class Display {
    constructor() {
        this.activeBook = null;
        this.activeUser = null;
        this.pageNumber = null;
    }

    displayUser() {}
    displayBook() {}
    turnPageForward() {}
    turnPageBackward() {}

    refreshUsername() {}
    refreshTitle() {}
    refreshDetails() {}
    refreshPage() {}
}

class Book {
    constructor(id, details) {
        this.bookId = id;
        this.details = details;
    }

    getID() {}
    setID() {}
    getDetails() {}
    setDetails() {}
}

class User {
    constructor(id, details, accountType) {
        this.userId = id;
        this.details = details;
        this.accountType = accountType;
    }

    renewMembership(){}
    getId(){}
    setId(){}
    getDetails(){}
    setDetails(){}

    getAccountDetails(){}
    setAccountDetails(){}

    getAccountType(){}
    setAccountType(){}
}
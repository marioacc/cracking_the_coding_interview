class UserManager{
    constructor(){
        this.usersById = [];
        this.usersByAccountName = [];
        this.onlineUsers = [];
        this.instance = this;
    }

    getInstance(){
        if(this.instance === null){
            this.instance = new UserManager();
        }

        return this.instance;
    }

    addUser()
    approveAddRequest(req){}
    rejectAddRequest(req){}
    userSignedOn(accountName){}
    userSignedOff(accountName){}
}

class User{
    constructor(id, accountName, fullname){
        this.id = id;
        this.accountName = accountName;
        this.fullname = fullname;
        this.status = null;
        this.privateChats = [];
        this.receivedAddRequests = [];
        this.sentAddRequests = [];
        this.contacts = [];
    }

    sendMessageToUser(){}
    sendMessageToGroupChat(){}
    setStatus(){}
    getStatus(){}
    addContact(){}
    receiveAddRequest(){}
    sentAddRequest(){}
    removeAddRequest(){}
    requestAddUser(){}
    addPrivateConversation(){}
    addGroupConversation(){}
    getId(){}
    getAccountName(){}
    getFullname(){}

}

class Conversation{
    constructor(){
        this.participants = null;
        this.id = null;
        this.messages = null;
    }

    getMessages(){}
    addMessage(){}
    getId(){}
}

class GroupChat extends Conversation{
    removeParticipant(user){}
    addParticipant(user){}
}
class PrivateChat extends Conversation{
    constructor(user1, user2){}
    getOtherParticipant(user){}
}

class Message {
    constructor(content,date){
        this.content = content;
        this.date = date;
    }

    getContent(){}
    getDate(){}
}


class AddRequest{
    constructor(from,to, date){
        this.from = from;
        this.to = to;
        this.date = date;
    }

    getStatus(){}
    getFromUser(){}
    getToUser(){}
    getDate(){}
}

class UserStatus{
    constructor(type, message){
        this.type = type;
        this.message = message;
    }

    getStatusType(){}
    getMessage(){}
}

const UserStatusType = {
    Offline : "Offline",
    Away : "Away",
    Idle : "Idle",
    Available : "Busy"
};

const RequestStatus = {
    Unread : "Unread",
    Read : "Read",
    Accepted : "Accepted",
    Rejected : "Rejected"
}
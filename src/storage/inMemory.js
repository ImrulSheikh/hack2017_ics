
let data = {};

export default class InMemoryStore {
    getConnection(firstUser, secondUser) {
        let connectionId = this.getConnectionId(this.getUserId(firstUser), this.getUserId(secondUser));
        if (this.hasConnection(connectionId)) {
            return connectionId;
        } else {
            data[connectionId] = {
                users: [firstUser, secondUser],
                messages: []
            }
            return connectionId;
        }
    }
    getConnectionId(userId1,userId2){
        return [userId1,userId2].sort().reduce((p, n) => p + n);
    }

    getUserId(user) {
        return user;
    }
    hasConnection(connectionId) {
        return data.hasOwnProperty(connectionId);
    }
    saveMessage(connectionId, message, user) {
        data[connectionId].messages.push({
            test: message,
            by: this.getUserId(user),
            when: new Date()
        })
    }
    getMessages(connectionId) {
        return data[connectionId].messages;
    }
};


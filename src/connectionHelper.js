import InMemoryStore from './storage/inMemory';

export default class ConnectionHelper {
    constructor(storage) {
        this.storage = new InMemoryStore();
    }

    getConnection(firstUser, secUser) {
        return this.storage.getConnection(firstUser, secUser);
    }

    sendMessage(connectionId, message, byUser) {
        this.storage.saveMessage(connectionId, message, byUser);
    }
    getAllMessages(connectionId) {
        return this.storage.getMessages(connectionId);
    }
};


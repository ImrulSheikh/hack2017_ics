import SocketIO from 'socket.io';
import ConnectionHelper from './connectionHelper';

export default class RoomManager {
    constructor(http) {
        this.app = http;
        this.io = new SocketIO(http);
        this.ch = new ConnectionHelper();
    }
    
    create(roomName){
        var chatNamespace = this.io.of(`/${roomName}`);
        chatNamespace.on('connection', function (socket) {
            console.log('someone connected');
            // chatNamespace.emit('hi', 'Hello everyone!');
            socket.on('chat message', function (msg) {
                console.log('message: ' + msg);
                chatNamespace.emit('chat message', msg);
            });
        });
    }
    
};


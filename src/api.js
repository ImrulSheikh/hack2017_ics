
import ConnectionHelper from './connectionHelper';
import RoomManager from './roomManager';

export default class API {
    constructor(app, http) {
        this.app = app;
        this.http = http;
        this.socketConnectionId();
        this.createChannel();
    }
    socketConnectionId(){
        this.app.get('/connection/:user1/:user2',function (req, res) {
            console.log(req.params.user1);
            console.log(req.params.user2);
            let ch = new ConnectionHelper();
            const connectionId = ch.getConnection(req.params.user1, req.params.user2)

            res.send(`${connectionId}`);
        })
    }
    createChannel(){
        let that = this;
        this.app.get('/create/:channelId',function (req, res) {
            let rm = new RoomManager(that.http);
            rm.create(req.params.channelId);

            res.send(`${req.params.channelId} created`);
        })
        
    }
};


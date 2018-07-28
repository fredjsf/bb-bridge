import * as directline from "../dist/socket_bridge";
import * as expressWs from 'express-ws';
import * as express from 'express';


const app = express();
var appWs = expressWs(app);

directline.initializeRoutes(app, "http://127.0.0.1:9002", "http://127.0.0.1:3978/api/messages", true, 9002);
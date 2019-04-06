import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';

let httpServer:http.Server = http.createServer((req:IncomingMessage,res:ServerResponse) => {
    res.writeHead(200);
    res.end('Hello Typescript!');
});

httpServer.listen(9999,() => console.log('服务器启动成功 listening：9999'));

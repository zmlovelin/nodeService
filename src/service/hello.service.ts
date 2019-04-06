import {data} from "./table";

let express = require('express'); //express框架模块
let path = require('path'); //系统路径模块
let fs = require('fs'); //文件模块
let bodyParser = require('body-parser'); //对post请求的请求体进行解析模块
let app = express();
app.use(bodyParser.urlencoded({extended: false})); //bodyParser.urlencoded 用来解析request中body的 urlencoded字符，只支持utf-8的编码的字符，也支持自动的解析gzip和 zlib。返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
let hostName = '127.0.0.1'; //ip
let port = 8888; //端口
let table = data;
//设置允许跨域请求
app.all('*', function (req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
    res.header('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

//创建get接口
app.get('/table', function (req: any, res: any) {
    res.json(table)
});

//3. 绑定端口
app.listen(port, hostName, () => {

    console.log(`服务器运行在http://${hostName}:${port}`);

});

import * as Express from "express";
import * as bodyParser from "body-parser";
import * as query from 'querystring';
const server = Express();
server.listen(5000);
interface User {
    userName: string;
    password: string;
    stamp: boolean;
}
const allowCrossDomain =
    (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    };
server.use((req, res, next) => {
    var str = '';
    req.on("data", (data) => {
        str += data;
    })
    req.on("end", () => {
        req.body = str;

        next();

    })

})


// server.use(allowCrossDomain);

server.use('/',
    (req, res) => {
        console.log(req.body);
        res.write(JSON.stringify(query.parse<User>(req.body)));
        res.end();
    }
)






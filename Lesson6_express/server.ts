import * as Express from "express";

const server = Express();

interface User {
    userName: string;
    password: string;
}
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
};

server.use(allowCrossDomain);
server.use('/',
    (req, res) => {
        res.send(<User>{ userName: "lee2", password: "123" });
        res.end();
    }
)



server.listen(5000);


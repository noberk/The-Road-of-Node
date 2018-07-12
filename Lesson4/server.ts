import * as  http from "http";
import * as queryStr from "querystring";

interface UserInfomation {
    name: string;
    password: string;
    age: number;

    textarea:string;
}

var server: http.Server = http.createServer(
    (request, response) => {

        let reqUrl = request.url;
        if (reqUrl) {

            var fullData: string = '';
            var i = 1;
            //当有一段数据到达
            request.on("data", chunck => {
                console.log(i++);
                fullData += chunck
            });
            //当有所有数据到达
            request.on("end", () => {
                let user = queryStr.parse<UserInfomation>(fullData);
                console.log(user);
            });
            

        }
    }
)

server.listen(9999);
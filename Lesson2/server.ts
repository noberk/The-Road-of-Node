import * as  http from "http";
import * as queryStr from "querystring";
const PATH = "/index.html";


interface UserInfomation {
    name: string;
    password: string;
    age: number;
}

var server: http.Server = http.createServer(
    (request, response) => {

        let reqUrl = request.url;
        if (reqUrl) {
            // try {
            //     var user = Object.create(null);
            //     reqUrl.split('?')[1].split('&').forEach(
            //         item => {
            //             let key = item.split('=')[0];
            //             let value = item.split('=')[1];
            //             Object.assign(user, { [key]: value })
            //         }
            //     )
            //     console.log(user.name);
            //     console.log(user.password);
            //     console.log(user.age);

            // } catch (error) {
            //     console.log(error);
            // }
            let paramsCombination: string = reqUrl.split('?')[1];
            let user= queryStr.parse<UserInfomation>(paramsCombination);
            console.log(user.age);
            
        }
    }
)

server.listen(9999);
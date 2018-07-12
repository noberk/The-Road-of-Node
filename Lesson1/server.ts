import * as  http from "http";
import { getData, saveData } from "./io";

const PATH = "/index.html";

var server: http.Server = http.createServer(
    (request, response) => {
        if (request.url === PATH) {

            var path = __dirname + PATH;
            console.log(path);

            getData(__dirname + PATH,
                (err, data) => {
                    if (err)
                        console.log(err);
                    else {
                        response.write(data)
                        response.end()
                    }
                }
            )
        } else {
            saveData(__dirname + "/aaa.txt", () => {
                console.log("it's ok!");                
            })
        }



    }
)

server.listen(9999);
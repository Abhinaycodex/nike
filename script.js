const http = require("http");

http.createserver((req, res)=>{
        console.log("server has been created");
}
)

Server.listen(3000, "localhost" , ()=>{
    console.log("server is listening");
})

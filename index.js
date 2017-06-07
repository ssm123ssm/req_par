var express = require('express');
var app = express();

app.get("/api", function(req, res){
      
    var ip = req.ip;
    var lan_full = req.headers["accept-language"];
    var lan = lan_full.substr(0,lan_full.indexOf(","));
    var os = getOs(process.platform.toString());
    var ret = {ip:null, language:null, OS:null, User_agent:null};
    
    ret.ip = ip;
    ret.language = lan;
    ret.OS = os;
    ret.User_agent = req.headers['user-agent'];
    res.send(ret);
    res.end();
});
app.use(express.static("public"));
app.listen(process.env.PORT);



function getOs(val){
    switch(val){
        case "win32":
            return "Windows - win32";
            break;
        default:
            return val;
              }
}
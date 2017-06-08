var express = require('express');
var app = express();
var exip = require('externalip');

app.get("/api", function(req, res){
      
    var lan_full = req.headers["accept-language"];
    var lan = lan_full.substr(0,lan_full.indexOf(","));
    var os;
    var ret = {ip:null, language:null, OS:null};
    ret.language = lan;
    //ret.OS = os;
    
    var ua = req.headers['user-agent'];
    var ua1 = ua.substr(ua.indexOf("(") + 1);
    var ua2 = ua1.substr(0,ua1.indexOf(")"));
   // console.log(ua2);
    ret.OS=ua2;
    
    //ret.User_agent = req.headers['user-agent'];
    exip(function(err, ip){
        ret.ip = ip;
        res.send(ret);
    
    });
    
    
    
});
app.use(express.static("public"));
app.listen(process.env.PORT || 80);



function getOs(val){
    switch(val){
        case "win32":
            return "Windows - win32";
            break;
        default:
            return val;
              }
}
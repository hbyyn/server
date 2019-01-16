var http= require('http');
// var routes=require('./moudules/routes');
var url =require('url');

var server=http.createServer(function(req,res){
     // 阻止  favicon.ico 的请求，不响应它。
     // console.log(req.url);  // 得到请求地址的 pathName
    if(req.url==='/favition.ico'){
        res.end();
        return;
    }
    // url地址有可能会有  ?  # 
    // var pathName = req.url.substr(1);
    // console.log(pathName);
    var pathName=url.parse(req.url).pathname.substr(1);
    console.log(pathName);





    // res.writeHead(200, {
    //     'Content-Type': 'text/html; charset=utf-8'
    // });
    // res.write('项目首页');
    // res.end();

})
server.listen(3000);
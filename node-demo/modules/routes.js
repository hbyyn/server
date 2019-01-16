// 这是 路由文件。

var file=require('./file');
var path=require('path');
var url=require('url');
var qs=require('querystring');

module.exports={
    login:function(req,res){
        res.writeHead(200,{
            'Content-Type':'text/html;charset=utf-8'
        });
        var data=file.readFile(path.resolve(__dirname,'../views/login.html'));
        res.write(data);
        res.end();
    },

    
}
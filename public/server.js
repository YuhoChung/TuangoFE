// Node静态服务器

const fs = require('fs');
const http = require('http');
const url = require('url');

// 创建http服务器
http.createServer(function(req,res) {
    // 解析请求
    var pathname = url.parse(req.url).pathname;

    // 输出请求的文件名
    console.log("Request for "+pathname+" received.");

    // console.log(pathname.substr(0));
    // console.log(pathname.substr(1));
    // 从文件系统中读取所请求的文件
    fs.readFile(pathname.substr(1),function(err,data) {
        if (err) {
            console.log(err);
            // 404
            res.writeHead(404,{'Content-Type': 'text/html'});
        } else {
            // 200
            res.writeHead(200,{'Content-Type': 'text/html'});

            // 响应文件内容
            res.write(data.toString());
            // 发送相应数据
            
        }

        

    })

    

}).listen(8888);




// fs.readFile('vue.config.js',function(err,data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('异步读取\n'+data.toString());
        
//     }

// })

// function print() {
//     console.log('160上山');
// }

// console.log('执行完毕');

// exports.print = print;
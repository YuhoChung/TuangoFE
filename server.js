// Node静态服务器

const fs = require('fs');
const http = require('http');
const url = require('url');
const port = 8082;

// 创建http服务器
http.createServer(function(req,res) {
    // 解析请求
    var pathname = url.parse(req.url).pathname;

    // 输出请求的文件名
    console.log("Request for "+pathname+" received.");

    // console.log(pathname.substr(0));
    // console.log(pathname.substr(1));


    // 映射根路径
    if (pathname == '/') {
        fs.readFile('index.html',function(err,data) {
            if (err) {
                console.log(err);
                // 404
                res.writeHead(404,{'Content-Type': 'text/html'});
            } else {
                // 200
                res.writeHead(200,{'Content-Type': 'text/html'});

                // 响应文件内容
                res.write(data.toString());
            }
            // 发送响应内容
            res.end();
<<<<<<< HEAD:server.js
            console.log('finish!!')
=======
>>>>>>> 5eb6568e0723ce1e07594b911cb7eb9b7401b8e6:dist/server.js
        })
    } else {
        // 从文件系统中读取所请求的文件
        fs.readFile(pathname.substr(1),function(err,data) {
            if (err) {
                console.log(err);
                // 404
                res.writeHead(404,{'Content-Type': 'text/html'});

                // 判断是否是css文件
            } else if (/.css$/.test(pathname)) {
                // 200
                res.writeHead(200,{'Content-Type': 'text/css'});
                res.write(data.toString());                
            } else {
                // 200
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.write(data.toString());
            }
            // 发送响应内容
            res.end();        
<<<<<<< HEAD:server.js
            console.log('finish!!')
=======
>>>>>>> 5eb6568e0723ce1e07594b911cb7eb9b7401b8e6:dist/server.js
        })
    }

}).listen(port);


console.log('Server running at:'+port);




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
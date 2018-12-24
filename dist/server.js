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
                res.writeHead(404,{'Content-Type': 'text/html; charset=UTF-8'});
                res.write('<h1>对不起，您要访问的页面不存在</h1>');
            } else {
                // 200
                res.writeHead(200,{'Content-Type': 'text/html'});

                // 响应文件内容
                res.write(data.toString());
            }
            // 发送响应内容
            res.end();
            console.log('finish!!')
        })
    } else {
        // 从文件系统中读取所请求的文件
        fs.readFile(pathname.substr(1),function(err,data) {
            if (err) {
                console.log(err);
                // 404
                res.writeHead(404,{'Content-Type': 'text/html; charset=UTF-8'});
                res.write('<h1>对不起，您要访问的页面不存在</h1>');

                // 判断是否是css文件
            } else if (/.css$/.test(pathname)) {
                // 200
                res.writeHead(200,{'Content-Type': 'text/css'});
                res.write(data.toString());                

                // 判断是否是png文件
            } else if (/.png$/.test(pathname)) {
                // 200
                res.writeHead(200,{'Content-Type': 'image/png; charset=UTF-8'});
                res.write(data);                  

                // 判断是否是woff文件
            } else if (/.woff$/.test(pathname)) {
                // 200
                res.writeHead(200,{'Content-Type': 'application/font-woff; charset=UTF-8'});
                res.write(data);                  

                // 判断是否是tff文件
            } else if (/.tff$/.test(pathname)) {
                // 200
                res.writeHead(200,{'Content-Type': 'application/font-tff; charset=UTF-8'});
                res.write(data);                  

            } else {
                // 200
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.write(data.toString());
            }
            // 发送响应内容
            res.end();        
            console.log('finish!!')
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
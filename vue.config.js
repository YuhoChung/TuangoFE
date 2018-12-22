const path = require('path');



module.exports = {
    // // 配置多页应用
    pages: {
        // 测试
        test: 'src/main.js',
        
        // 主页
        index: 'src/index.js',

        // 注册页面
        register: 'src/register.js',

        // 登录页面
        login: 'src/login.js'
    },

    // // 配置默认页面
    // devServer: {
    //     openPage: '/register.html',
    //     port: 8888,
    //     contentBase: path.join(__dirname,'aaa'),
    //     index: 'register.html'
    // }

    configureWebpack: {
        // output: {
        //     filename: 'ab.js'
        // },
        devServer: {
            // openPage: '/register.html',
            port: 8888,
            contentBase: path.join(__dirname,'/dist'),
            // index: 'register.html'
        }
    }
}




console.log(__dirname);
console.log("here");
console.log(path.join(__dirname,'/aaa'));
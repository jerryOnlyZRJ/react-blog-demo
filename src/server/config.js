
if(process.env.NODE_ENV  === "production"){ // 生产环境
    let port = 9010;
    module.exports = {
        port: port,
        host: 'http://localhost:' + port,
        mail: 'ranjayzheng@qq.com'
    };
} else { // 非生产环境
    let port = 9010;
    module.exports = {
        port: port,
        host: 'http://localhost:' + port,
        mail: 'ranjayzheng@qq.com'
    };
}

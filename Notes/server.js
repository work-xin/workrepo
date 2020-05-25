//require 引入模块
const http = require('http');
const fs=require('fs');

let server = http.createServer((request,response)=>{
    //request:请求 接收的数据(输入)
    //response:响应 发送的数据(输出)
    /* console.log('12314');
    response.write('<div>123456</div>');
    response.end(); */
    console.log(request.url);
    fs.readFile(`db${request.url}`,(error,data)=>{
        if(error){
            console.log('ERROR:'+error);
            console.log('status:'+request.status);
            response.writeHeader(request.status); //header
            response.write('Not found'); //body
        }else{
            response.write(data);
        }
        response.end(); //注：fs.redFile为异步操作  所以此end函数须在这里执行才能保证 先write再end
    });
});
//监听   ()里是端口号
server.listen(2563);
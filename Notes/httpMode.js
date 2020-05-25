//Assertion Testing 断言测试
/**const assert=require('assert');

function sum(a,b){
    assert(arguments.length==2,'参数必须传两个');
    assert(typeof a=='number','第一个参数必须是数字');

    return a+b;
}

console.log(sum(1,2));**/

// File System 读写文件
/* const fs=require('fs');
fs.readFile('NodeJS',(error,data)=>
    {
        if(error){
            console.log(error);
        }else{
            console.log(data);

            fs.writeFile('NodeJSCope.txt',data,(error)=>{
                if(error){
                    console.log(error);
                }
            });
        }
    }); */

// console.log(require('os').cpus());

/* const path=require('path');
let str = '/a/v/c/2.png'
//dirname 目录  basename 文件名包含扩展名 extname 扩展名
console.log(path.dirname(str)+'---'+path.basename(str)+'---'+path.extname(str)); */


/* const crypto = require('crypto');

function md5(str){
    let obj = crypto.createHash('md5');
    obj.update(str);
    return obj.digest('hex');
};

console.log(md5(md5('123456')+'zdy')); */


const Event = require('events').EventEmitter;
let ev = new Event();
//监听（接收）
ev.on('msg',function (a,b,c){
    console.log('收到了msg事件：',a,b,c)
});

//派发（发送）
ev.emit('msg',1,2,3);
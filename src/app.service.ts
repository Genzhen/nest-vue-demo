import { Injectable } from '@nestjs/common';
const http = require('http');
const querystring = require('querystring');

function requestInfo (path, req, method) {
    const postData = JSON.stringify(req);

    const requestBaseInfo = {  
        hostname:'192.168.0.32',  
        port: 5000,  
        method: method || 'POST',
        path,
        headers:{  
            "Content-Type": 'application/json' 
        }
    }

    return new Promise(resolve => {
        const req = http.request(requestBaseInfo, (res) => {
          res.setEncoding('utf8');
          res.on('data', (chunk) => {
            resolve(chunk);
          });
          res.on('end', () => {
          });
        });

        req.on('error', (e) => {
          console.error(`请求遇到问题: ${e.message}`);
        });

        // 写入数据到请求主体
        req.write(postData);
        req.end();
    })
    
}


@Injectable()
export class AppService {
  getList(param): string {
    return 'Hello Worlssssd!';
  }

  async getListPost(param) {
    return await requestInfo('/exam/question/list', param, 'post');
  }
}

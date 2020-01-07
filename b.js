const request = require('request');
// request('http://ip.jsontest.com/', (err, res, body) => {
//     console.log(body);
// });
function getIp(cb){
    request('http://ip.jsontest.com/', (err, res, body) => {
        cb(body);
    });
}
getIp( ip => console.log(ip));
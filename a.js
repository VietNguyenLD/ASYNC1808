const fs = require('fs')
// fs.readFile ('./x.txt', 'utf8', (err, str) => {
//     console.log(err, str);
// });//run node a
function read(fileName){
    let x;
    fs.readFile('./x.txt','utf8', (err, str) => {
        console.log(str);
    });
    return x;
}
console.log(read('./x.txt'));
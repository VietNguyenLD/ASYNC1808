const request = require('request');

function cong(a ,b, cb){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return cb(new Error('Type erro'));// function cb co hai tham so, ko truyen mac dinh la undefine
    }
    const url = 'http://localhost:3000/tinh/CONG/';
    request( url + a +'/'+ b + '/', (err, res, body) => {
        cb(err, body);
    });
}
cong (2, 6, (err, kq) => {
    if(err) console.log(err);
    console.log(kq);
});
function tru(a ,b, cb){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return cb(new Error('Type erro'));// function cb co hai tham so, ko truyen mac dinh la undefine
    }
    const url = 'http://localhost:3000/tinh/TRU/';
    request( url + a +'/'+ b + '/', (err, res, body) => {
        cb(err, body);
    });
}
tru (2, 6, (err, kq) => {
    if(err) console.log(err);
    console.log(kq);
});
function chia(a ,b, cb){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return cb(new Error('Type erro'));// function cb co hai tham so, ko truyen mac dinh la undefine
    }
    const url = 'http://localhost:3000/tinh/CHIA/';
    request( url + a +'/'+ b + '/', (err, res, body) => {
        cb(err, body);
    });
}
chia (2, 6, (err, kq) => {
    if(err) console.log(err);
    console.log(kq);
});
function nhan(a ,b, cb){
    if( b == 0 || typeof a !== 'number' || typeof b !== 'number'){
        return cb(new Error('Type erro'));// function cb co hai tham so, ko truyen mac dinh la undefine
    }
    const url = 'http://localhost:3000/tinh/NHAN/';
    request( url + a +'/'+ b + '/', (err, res, body) => {
        cb(err, body);
    });
}
nhan (2, 6, (err, kq) => {
    if(err) console.log(err);
    console.log(kq);
});
// (a+b)*h/2
function dienTichHinhThang(a ,b, h, cb){
    cong(a, b, (errCong,tong) => {
        if(errCong) return cb(errCong);
        nhan(+tong, h, (errNhan, tich) => {
            if(errNhan) return cb(errNhan);
            chia(+tich, h, (errChia, thuong) => {
                if(errChia) return cb(errChia);
                return cb(null, thuong);
            });
        });
    });
// server tra ve kieu chuoi  nen phai ep kieu ve so (+)
}
dienTichHinhThang(4, 5, 6, (err, kq) => {
    if(err) return console.log(err);
    console.log('Dien tich:' +kq);
})
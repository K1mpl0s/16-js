const fs = require('fs');
const md5 = require('md5');
const crypto = require('crypto');
const uuidv4 = require('uuid/v4');

//request defaults
try {
    exports.url1 = 'https://' + fs.readFileSync('./gb-host.txt').split(':')[0].trim()
    exports.port1 = fs.readFileSync('./gb-host.txt').split(':')[1].trim()
    exports.url2 = 'https://' + fs.readFileSync('./gb-host.txt').split(':')[0].trim()
    exports.port2 = fs.readFileSync('./gb-host.txt').split(':')[1].trim()
} catch(e) {
    console.log('=======================\n\n CODED BY K1MPL0S <3    \n\n=======================')
}

exports.lang = 'en';
exports.country = 'US';
exports.currency = 'USD';
exports.uuid = '0f97df48-01e3-4d8f-8ba0-a1e8cced278c:5bf18553fe25d277';
exports.ad = '95c27e08-72bb-4760-83e8-9e878d1999f8';

//default identifiers
exports.iden1 = 'SnVZUVo2QlNCNVkvMnZTZGViOWt3aFowY0Zqc216KzdVNlNQT3RzeHltelR2aTl0QzJ6Z0N4dTUvRExPYUg3M1ZlOUhMZ3B5MDloRnFsNU5sTUgzZGc9PTpJS0tVd0VYU3JZNTdCd1FIcHVDOTVBPT0=';
exports.iden2 = 'VEtmbk9HSGJOcnhMdys1dER1dnVxcGpib3RrTlRSbThDWlk2eU1lU2lrL09Wd25lWFdVUGs4dHRESWljNnd4TWdyazlvaHJvY2Q0OFBLMjlDWXF5L3c9PTpwU2RUWDgwc1RUdjNLc0dQWWVQbitnPT0=';

//version code
exports.code1 = '4.5.2-b4ac51396aac63092c3c70627dcd73a9b36a68062f5561bfb4d2e10e1291c20f';
exports.code2 = '4.6.0-ab038dfeb2ac7b2b9831b3c381120deefeedc9c98803011c44214d06fc94b7de';

//android
exports.deviceName1 = 'SM';
exports.deviceModel1 = 'SM-J327T1';
exports.deviceVer1 = '9.0';
exports.deviceAgent1 = 'Dalvik/2.1.0 (Linux; Android 9.0; SM-J327T1)';
//ios
exports.deviceName2 = 'iPhone';
exports.deviceModel2 = 'iPhone XR';
exports.deviceVer2 = '13.0';
exports.deviceAgent2 = 'CFNetwork/808.3 Darwin/16.3.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X)';

//client data
exports.ts1 = Math.floor(Date.now() / 1000); //asset
exports.db1 = Math.floor(Date.now() / 1000); //database
exports.ts2 = Math.floor(Date.now() / 1000);
exports.db2 = Math.floor(Date.now() / 1000);

//database keys
exports.gdb = '9bf9c6ed9d537c399a6c4513e92ab24717e1a488381e3338593abd923fc8a13b';
exports.jdb = '2db857e837e0a81706e86ea66e2d1633';

function createUnique() {
    let unique = uuidv4();
    let uuid = uuidv4() + ':' + unique.slice(0, 8);
    return [uuidv4(), uuid];
}

function createBasic(identifier) {
    if (identifier != undefined) {
        let test;
        //remove next lines
        if (identifier.includes('\n')) {
            test = identifier.split('\n').join('');
        } else {
            test = identifier;
        }
        //append blanks to make size of 160
        while (test.length <= 159) {
            test = test.padEnd(test.length + 1, '\u0008');
        }
        //decode
        let buff = new Buffer.from(test, 'base64');
        let decode = buff.toString('ascii');
        //swap identifier around
        let part = decode.split(':'),
            basic = part[1] + ':' + part[0];
        //encode
        let buff2 = new Buffer.from(basic);
        basic = buff2.toString('base64');
        return basic;
    }
}

function createMac(ver, token, secret, method, endpoint) {
    if(ver == 'gb'){
        host = keys.url1
        port = keys.port1
    } else {
        host = keys.url2
        port = keys.port2
    }
    let ts = Math.floor(Date.now() / 1000); //timestamp
    let nonce = ts + ':' + md5(ts); //hash of timestamp
    //signature
    let sig = ts + "\n" + nonce + "\n" + method + "\n" + endpoint + "\n" + host + "\n" + port + "\n\n";
    let mac = crypto.createHmac('sha256', secret).update(sig).digest('base64');
    //authorization
    let auth = 'MAC id=\"' + token + '\",nonce=\"' + nonce + '\",ts=\"' + ts + '\",mac=\"' + mac + '\"';
    return auth;
}

function encryptSign(){

}

function decryptSign(){
    
}

module.exports.createUnique = createUnique;
module.exports.createBasic = createBasic;
module.exports.createMac = createMac;
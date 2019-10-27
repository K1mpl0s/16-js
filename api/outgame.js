const unirest = require('unirest');
const keys = require('../keys.js');

function ping(ver) {
    let req;
    let dua = keys.deviceAgent1;
    let code;
    if (ver == 'gb') {
        req = unirest.get('https://ishin-global.aktsk.com/ping');
        code = keys.code1;
    } else {
        req = unirest.get('https://ishin-production.aktsk.jp/ping');
        code = keys.code2;
    }
    var head = {
        "X-Platform": "android",
        "X-ClientVersion": code,
        "X-Language": keys.lang,
        "X-UserID": "////",
        "User-Agent": dua
    };
    req.headers(head);
    return req;
}

function getAsset(ver, token, secret, ts) {
    let dua = keys.deviceAgent1;
    let code;
    let req;
    let auth;
    if (ver == 'gb') {
        req = unirest.get(keys.url1 + '/client_assets');
        auth = keys.createMac(ver, token, secret, 'GET', '/client_assets');
        code = keys.code1;
    } else {
        req = unirest.get(keys.url2 + '/client_assets');
        auth = keys.createMac(ver, token, secret, 'GET', '/client_assets');
        code = keys.code2;
    }
    let head = {
        "X-Platform": "android",
        "X-Language": keys.lang,
        "X-ClientVersion": code,
        "X-AssetVersion": ts,
        "X-DatabaseVersion": "////",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": auth,
        "User-Agent": dua
    };
    req.headers(head);
    return req;
}

function getDatabase(ver, token, secret, ts) {
    let dua = keys.deviceAgent1;
    let code;
    let req;
    let auth;
    if (ver == 'gb') {
        req = unirest.get(keys.url1 + '/client_assets/database');
        auth = keys.createMac(ver, token, secret, 'GET', '/client_assets/database');
        code = keys.code1;
    } else {
        req = unirest.get(keys.url2 + '/client_assets/database');
        auth = keys.createMac(ver, token, secret, 'GET', '/client_assets/database');
        code = keys.code2;
    }
    let head = {
        "X-Platform": "android",
        "X-Language": keys.lang,
        "X-ClientVersion": code,
        "X-AssetVersion": "////",
        "X-DatabaseVersion": ts,
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": auth,
        "User-Agent": dua
    };
    req.headers(head);
    return req;
}

module.exports.ping = ping;
module.exports.getAsset = getAsset;
module.exports.getDatabase = getDatabase;
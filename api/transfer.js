const unirest = require('unirest');
const keys = require('../keys.js');

function validate(ver, tc, fc) {
    let req;
    let code;
    if (ver == 'gb') {
        req = unirest.post(keys.url1 + '/auth/link_codes/' + tc + '/validate');
        code = keys.code1;
    } else {
        req = unirest.post(keys.url2 + '/auth/link_codes/' + tc + '/validate');
        code = keys.code2;
    }
    let head = {
        "Accept": "*/*",
        "X-Language": keys.lang,
        "X-Platform": "android",
        "X-ClientVersion": code,
        "Content-Type": "application/json",
        "User-Agent": keys.d1a
    };
    req.headers(head);
    req.send('{"eternal": true,"user_account": {"platform": "android","user_id": ' + fc + '}}');
    return req;
}

function use(ver, os, tc, fc) {
    let dn;
    let dm;
    let dv;
    let dua;
    let code;
    let req;
    if (os == 'android') {
        dn = keys.d1n;
        dm = keys.d1m;
        dv = keys.d1v;
        dua = keys.d1a;
    } else {
        dn = keys.d2n;
        dm = keys.d2m;
        dv = keys.d2v;
        dua = keys.d2a;
    }
    if (ver == 'gb') {
        req = unirest.put(keys.url1 + '/auth/link_codes/' + tc);
        code = keys.code1;
    } else {
        req = unirest.put(keys.url2 + '/auth/link_codes/' + tc);
        code = keys.code2;
    }
    let head = {
        "Accept": "*/*",
        "X-Language": keys.lang,
        "X-Platform": os,
        "X-ClientVersion": code,
        "Content-Type": "application/json",
        "User-Agent": dua
    };
    req.headers(head);
    req.send('{"eternal": true,"old_user_id": "","user_account": {"device": "' + dn + '","device_model": "' + dm + '","os_version": "' + dv + '","platform": "' + os + '","unique_id": "' + keys.uuid + '"}}');
    return req;
}

function create(ver, os, token, secret) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.d1a;
    } else {
        dua = keys.d2a;
    }
    if (ver == 'gb') {
        req = unirest.post(keys.url1 + '/auth/link_codes');
        auth = keys.createMac(ver, token, secret, 'POST', '/auth/link_codes', 'ishin-global.aktsk.com', 3001);
        code = keys.code1;
        asset = keys.gba;
        db = keys.gbd;
    } else {
        req = unirest.post(keys.url2 + '/auth/link_codes');
        auth = keys.createMac(ver, token, secret, 'POST', '/auth/link_codes', 'ishin-production.aktsk.jp', 3001);
        code = keys.code2;
        asset = keys.jpa;
        db = keys.jpd;
    }
    let head = {
        "X-Platform": os,
        "X-Language": keys.lang,
        "X-ClientVersion": code,
        "X-AssetVersion": asset,
        "X-DatabaseVersion": db,
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": auth,
        "User-Agent": dua
    };
    req.headers(head);
    req.send('{"eternal":true}');
    return req;
}

module.exports.validate = validate;
module.exports.use = use;
module.exports.create = create;
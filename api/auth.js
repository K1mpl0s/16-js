const unirest = require('unirest');
const keys = require('../keys.js');

//registered after captcha completion
function register(ver, os, acc, ad, unique, key) {
    let dn;
    let dm;
    let dv;
    let dua;
    let code;
    let req;
    if (os == 'android') {
        dn = keys.deviceName1;
        dm = keys.deviceModel1;
        dv = keys.deviceVer1;
        dua = keys.deviceAgent1;
    } else {
        dn = keys.deviceName2;
        dm = keys.deviceModel2;
        dv = keys.deviceVer2;
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.post(keys.url1 + '/auth/sign_up');
        code = keys.code1
    } else {
        req = unirest.post(keys.url2 + '/auth/sign_up');
        code = keys.code2
    }
    var head = {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "X-Platform": os,
        "X-ClientVersion": code,
        "X-Language": keys.lang,
        "User-Agent": dua
    };
    req.headers(head);
    if (ad != null && unique != null && key != null) {
        user_acc = {
            'ad_id': ad,
            'country': keys.country,
            'currency': keys.currency,
            'device': dn,
            'device_model': dm,
            'os_version': dv,
            'platform': os,
            'unique_id': unique
        }   
        req.send('{"captcha_session_key": "' + key + '", "user_account": ' + JSON.stringify(acc) + '}');
    } else {
        let unique = keys.createUnique();
        let adId = unique[0];
        let uuid = unique[1]
        user_acc = {
            'ad_id': adId,
            'country': keys.country,
            'currency': keys.currency,
            'device': dn,
            'device_model': dm,
            'os_version': dv,
            'platform': os,
            'unique_id': uuid
        }
        req.send('{"user_account": ' + JSON.stringify(user_acc) + '}');
    }
    return [req, adId, uuid];
}

//login using basic
function login(ver, os, basic, first, key) {
    let dua;
    let code;
    let req;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.post(keys.url1 + '/auth/sign_in');
        if (first) {
            code = '////';
        } else {
            code = keys.code1;
        }
    } else {
        req = unirest.post(keys.url2 + '/auth/sign_in');
        if (first) {
            code = keys.code2
        } else {
            code = keys.code2;
        }
    }
    var head = {
        "Accept": "*/*",
        "Authorization": "Basic " + basic,
        "Content-Type": "application/json",
        "X-UserCountry": keys.country,
        "X-UserCurrency": keys.currency,
        "X-Platform": os,
        "X-ClientVersion": code,
        "X-Language": keys.lang,
        "User-Agent": dua
    };
    req.headers(head);
    if (key != null) {
        req.send('{"captcha_session_key": "' + key + '", "ad_id": "' + keys.ad + '", "unique_id": "' + keys.uuid + '"}');
    } else {
        req.send('{"ad_id": "' + keys.ad + '", "unique_id": "' + keys.uuid + '"}');
    }
    return req;
}

module.exports.register = register;
module.exports.login = login;
module.exports.refresh = refresh;
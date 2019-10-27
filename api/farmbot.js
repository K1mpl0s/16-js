const unirest = require('unirest');
const keys = require('../keys.js');
const pyhandler = require('../python-handler.js');
const transfer = require('./transfer.js');
const ingame = require('./ingame.js');
const authen = require('./auth.js');

var auth;
function tutorial(ver, os, token, secret, channel) {
    let dua;
    let code;
    let req;
    if (os == 'android') {
        dua = keys.d1a;
    } else {
        dua = keys.d2a;
    }
    if (ver == 'gb') {
        code = keys.code1;
        url1 = keys.url1
    } else {
        code = keys.code2;
        url2 = keys.url2
    }
    if (ver == 'gb') {
        req = unirest.put(url1 + '/tutorial/finish');
        auth = keys.createMac(token, secret, 'PUT', '/tutorial/finish');
        req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
        req.end(res => {
            channel.send('**Tutorial progress:** 1/7 (Finish battle)');
            req = unirest.post(url1 + '/tutorial/gasha');
            auth = keys.createMac(token, secret, 'POST', '/tutorial/gasha');
            req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
            req.end(res => {
                channel.send('**Tutorial progress:** 2/7 (Summon)');
                req = unirest.put(url1 + '/tutorial');
                auth = keys.createMac(token, secret, 'PUT', '/tutorial');
                req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
                req.send('{"progress":"999"}');
                req.end(res => {
                    channel.send('**Tutorial progress:** 3/7 (Finish tutorial)');
                    req = unirest.put(url1 + '/user');
                    auth = keys.createMac(token, secret, 'PUT', '/user');
                    req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
                    req.send('{"user":{"name":"6teen"}}');
                    req.end(res => {
                        channel.send('**Tutorial progress:** 4/7 (Set name)');
                        req = unirest.post(url1 + '/missions/put_forward');
                        auth = keys.createMac(token, secret, 'POST', '/missions/put_forward');
                        req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
                        req.end(res => {
                            channel.send('**Tutorial progress:** 5/7 (Update missions)');
                            req = unirest.put(url1 + '/apologies/accept');
                            auth = keys.createMac(token, secret, 'PUT', '/apologies/accept');
                            req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
                            req.end(res => {
                                channel.send('**Tutorial progress:** 6/7 (Accept tutorial gifts)');
                                req = unirest.put(url1 + '/apologies/accept');
                                auth = keys.createMac(token, secret, 'PUT', '/apologies/accept');
                                req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
                                req.end(res => {
                                    channel.send('**Tutorial progress:** 7/7 (Update user)');
                                    req = unirest.put(url1 + '/user');
                                    auth = keys.createMac(token, secret, 'PUT', '/user');
                                    req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
                                    req.send('{"user": {"is_ondemand": true}}');
                                    req.end(res => {

                                        ingame.user(ver, os, token, secret, 1).end(res1 => {
                                            transfer.create(ver, os, token, secret).end(res2 => {
                                                if (res1.body.hasOwnProperty('user')) {
                                                    channel.send('```css\n' + res1.body.user.id + '\n' + res2.body.link_code + '```');
                                                } else {
                                                    channel.send('unable to send account ID.');
                                                    channel.send('```css\n' + res2.body.link_code + '```');
                                                }
                                            });
                                        });

                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    } else {
        req = unirest.put(url2 + '/tutorial/finish');
        auth = keys.createMac(token, secret, 'PUT', '/tutorial/finish');
        req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
        req.end(res => {
            channel.send('**Tutorial progress:** 1/7');
            req = unirest.post(url2 + '/tutorial/gasha');
            auth = keys.createMac(token, secret, 'POST', '/tutorial/gasha');
            req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
            req.end(res => {
                channel.send('**Tutorial progress:** 2/7');
                req = unirest.put(url2 + '/tutorial');
                auth = keys.createMac(token, secret, 'PUT', '/tutorial');
                req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
                req.send('{"progress":"999"}');
                req.end(res => {
                    channel.send('**Tutorial progress:** 3/7');
                    req = unirest.put(url2 + '/user');
                    auth = keys.createMac(token, secret, 'PUT', '/user');
                    req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
                    req.send('{"user":{"name":"6teen"}}');
                    req.end(res => {
                        channel.send('**Tutorial progress:** 4/7');
                        req = unirest.post(url2 + '/missions/put_forward');
                        auth = keys.createMac(token, secret, 'POST', '/missions/put_forward');
                        req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
                        req.end(res => {
                            channel.send('**Tutorial progress:** 5/7');
                            req = unirest.put(url2 + '/apologies/accept');
                            auth = keys.createMac(token, secret, 'PUT', '/apologies/accept');
                            req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
                            req.end(res => {
                                channel.send('**Tutorial progress:** 6/7');
                                req = unirest.put(url2 + '/apologies/accept');
                                auth = keys.createMac(token, secret, 'PUT', '/apologies/accept');
                                req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
                                req.end(res => {
                                    channel.send('**Tutorial progress:** 7/7');
                                    req = unirest.put(url2 + '/user');
                                    auth = keys.createMac(token, secret, 'PUT', '/user');
                                    req.headers({ 'X-Platform': os, 'X-ClientVersion': code, 'X-AssetVersion': '////', 'X-DatabaseVersion': '////', 'Content-Type': 'application/json', 'Accept': '*/*', 'Authorization': auth, 'User-Agent': dua });
                                    req.send('{"user": {"is_ondemand": true}}');
                                    req.end(res => {

                                        ingame.user(ver, os, token, secret).end(res1 => {
                                            transfer.create(ver, os, token, secret).end(res2 => {
                                                channel.send('```css\n' + res1.body.user.id + '\n' + res2.body.link_code + '```');
                                            });
                                        });

                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
}

module.exports.tutorial = tutorial;
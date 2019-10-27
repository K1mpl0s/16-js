const unirest = require('unirest');
const keys = require('../keys.js');

//account information
function user(ver, os, token, secret, first) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.get(keys.url1 + '/user');
        auth = keys.createMac(ver, token, secret, 'GET', '/user');
        if (first == 1) {
            code = '////';
        } else {
            code = keys.code1;
        }
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.get(keys.url2 + '/user');
        auth = keys.createMac(ver, token, secret, 'GET', '/user');
        if (first == 1) {
            code = keys.code2;
        } else {
            code = keys.code2;
        }
        asset = keys.ts2;
        db = keys.db2;
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
    return req;
}

//box contents
function cards(ver, os, token, secret) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.get(keys.url1 + '/cards');
        auth = keys.createMac(ver, token, secret, 'GET', '/cards');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.get(keys.url2 + '/cards');
        auth = keys.createMac(ver, token, secret, 'GET', '/cards');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    return req;
}

//current news
function news(ver, os, token, secret) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.get(keys.url1 + '/announcements?display=home');
        auth = keys.createMac(ver, token, secret, 'GET', '/announcements?display=home');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.get(keys.url2 + '/announcements?display=home');
        auth = keys.createMac(ver, token, secret, 'GET', '/announcements?display=home');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    return req;
}

//list of banners
function banners(ver, os, token, secret) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.get(keys.url1 + '/gashas');
        auth = keys.createMac(ver, token, secret, 'GET', '/gashas');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.get(keys.url2 + '/gashas');
        auth = keys.createMac(ver, token, secret, 'GET', '/gashas');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    return req;
}

//list of events
function events(ver, os, token, secret) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.get(keys.url1 + '/events');
        auth = keys.createMac(ver, token, secret, 'GET', '/events');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.get(keys.url2 + '/events');
        auth = keys.createMac(ver, token, secret, 'GET', '/events');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    return req;
}

//change account name
function changeName(ver, os, token, secret, name) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.put(keys.url1 + '/user');
        auth = keys.createMac(ver, token, secret, 'PUT', '/user');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.put(keys.url2 + '/user');
        auth = keys.createMac(ver, token, secret, 'PUT', '/user');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    req.send('{"user": {"name": "' + name + '"}}');
    return req;
}

//increase box size by 5
function capacity(ver, os, token, secret) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.post(keys.url1 + '/user/capacity/card');
        auth = keys.createMac(ver, token, secret, 'POST', '/user/capacity/card');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.post(keys.url2 + '/user/capacity/card');
        auth = keys.createMac(ver, token, secret, 'POST', '/user/capacity/card');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    return req;
}

//check if summoned on starter banner
function dashStatus(ver, os, token, secret) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.get(keys.url1 + '/start_dash_gasha_status');
        auth = keys.createMac(ver, token, secret, 'GET', '/start_dash_gasha_status');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.get(keys.url2 + '/start_dash_gasha_status');
        auth = keys.createMac(ver, token, secret, 'GET', '/start_dash_gasha_status');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    return req;
}

//summon on a banner
function summon(ver, os, token, secret, id, course) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.post(keys.url1 + '/gashas/' + id + '/courses/' + course + '/draw');
        auth = keys.createMac(ver, token, secret, 'POST', '/gashas/' + id + '/courses/' + course + '/draw');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.post(keys.url2 + '/gashas/' + id + '/courses/' + course + '/draw');
        auth = keys.createMac(ver, token, secret, 'POST', '/gashas/' + id + '/courses/' + course + '/draw');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    return req;
}

//get list of gifts
function gifts(ver, os, token, secret) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.get(keys.url1 + '/gifts');
        auth = keys.createMac(ver, token, secret, 'GET', '/gifts');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.get(keys.url2 + '/gifts');
        auth = keys.createMac(ver, token, secret, 'GET', '/gifts');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    return req;
}

//accept list of gifts
function acceptGifts(ver, os, token, secret, gift) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.post(keys.url1 + '/gifts/accept');
        auth = keys.createMac(ver, token, secret, 'POST', '/gifts/accept');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.post(keys.url2 + '/gifts/accept');
        auth = keys.createMac(ver, token, secret, 'POST', '/gifts/accept');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    req.send('{"gift_ids":[' + gift.join(',').trim() + ']}');
    return req;
}

//list of missions
function missions(ver, os, token, secret) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.get(keys.url1 + '/missions');
        auth = keys.createMac(ver, token, secret, 'GET', '/missions');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.get(keys.url2 + '/missions');
        auth = keys.createMac(ver, token, secret, 'GET', '/missions');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    return req;
}

//accept missions
function acceptMissions(ver, os, token, secret, mission) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.post(keys.url1 + '/missions/accept');
        auth = keys.createMac(ver, token, secret, 'POST', '/missions/accept');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.post(keys.url2 + '/missions/accept');
        auth = keys.createMac(ver, token, secret, 'POST', '/missions/accept');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    req.send('{"mission_ids":[' + mission.join(',').trim() + ']}');
    return req;
}

//stone stamina refill
function actRefill(ver, os, token, secret) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.put(keys.url1 + '/user/recover_act_with_stone');
        auth = keys.createMac(ver, token, secret, 'PUT', '/user/recover_act_with_stone');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.put(keys.url2 + '/user/recover_act_with_stone');
        auth = keys.createMac(ver, token, secret, 'PUT', '/user/recover_act_with_stone');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    return req;
}

//sell array of cards
function sell(ver, os, token, secret, cards) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.post(keys.url1 + '/cards/sell');
        auth = keys.createMac(ver, token, secret, 'POST', '/cards/sell');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.post(keys.url2 + '/cards/sell');
        auth = keys.createMac(ver, token, secret, 'POST', '/cards/sell');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    req.send('{"card_ids":[' + cards.join(',').trim() + ']}');
    return req;
}

//set wallpaper if it is unlocked
function setWallpaper(ver, os, token, secret, wallpaper) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.put(keys.url1 + '/user');
        auth = keys.createMac(ver, token, secret, 'PUT', '/user');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.put(keys.url2 + '/user');
        auth = keys.createMac(ver, token, secret, 'PUT', '/user');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    req.send('{"user":{"wallpaper_item_id":' + wallpaper + '}}');
    return req;
}

//list of story stages.
function quests(ver, os, token, secret) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.get(keys.url1 + '/user_areas');
        auth = keys.createMac(ver, token, secret, 'GET', '/user_areas');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.get(keys.url2 + '/user_areas');
        auth = keys.createMac(ver, token, secret, 'GET', '/user_areas');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    return req;
}

//get support/friend units for a stage.
function getSupports(ver, os, token, secret, stage) {
    let dua;
    let code;
    let asset;
    let db;
    let req;
    let auth;
    if (os == 'android') {
        dua = keys.deviceAgent1;
    } else {
        dua = keys.deviceAgent2;
    }
    if (ver == 'gb') {
        req = unirest.get(keys.url1 + '/quests/' + stage + '/supporters');
        auth = keys.createMac(ver, token, secret, 'GET', '/quests/' + stage + '/supporters');
        code = keys.code1;
        asset = keys.ts1;
        db = keys.db1;
    } else {
        req = unirest.get(keys.url2 + '/quests/' + stage + '/supporters');
        auth = keys.createMac(ver, token, secret, 'GET', '/quests/' + stage + '/supporters');
        code = keys.code2;
        asset = keys.ts2;
        db = keys.db2;
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
    return req;
}


//todo startStage() and finishStage()

module.exports.user = user;
module.exports.cards = cards;
module.exports.news = news;
module.exports.banners = banners;
module.exports.events = events;
module.exports.changeName = changeName;
module.exports.capacity = capacity;
module.exports.dashStatus = dashStatus;
module.exports.summon = summon;
module.exports.gifts = gifts;
module.exports.acceptGifts = acceptGifts;
module.exports.missions = missions;
module.exports.acceptMissions = acceptMissions;
module.exports.actRefill = actRefill;
module.exports.sell = sell;
module.exports.setWallpaper = setWallpaper;
module.exports.quests = quests;
module.exports.getSupports = getSupports;
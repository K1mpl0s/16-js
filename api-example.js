const fs = require('fs');
const keys = require('./keys.js'); //this is basically like a config.
const outgame = require('./outgame.js');

function checkServers(ver) {
    outgame.ping.end(res => {
        if (res.status == 200) {
            let json = res.body;
            let url = json['ping_info']['host'];
            let port = json['ping_info']['port_str'];
            if (fs.existsSync(ver + '-host.txt')) {
                fs.unlinkSync(ver + '-host.txt');
                fs.writeFileSync(ver + '-host.txt', url + ':' + port + '\n');
                console.log('[' + ver + ' server] ' + url + ':' + port);
            } else {
                fs.writeFileSync(ver + '-host.txt', url + ':' + port + '\n');
                console.log('[' + ver + ' server] ' + url + ':' + port);
            }
            return true;
        } else {
            console.log('[' + ver + ' server] can\'t connect.');
            return false;
        }
    });
}
checkServers('gb');
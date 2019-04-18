const fork = require('child_process').fork;
const fox = require('../proto/until');
const tcpProcess = fork("./src/tcp/client", {
    silent: false
});


function onExit() {
    tcpProcess.kill('SIGINT');
    process.exit(0);
}

process.on('exit', onExit);

tcpProcess.on('message', (m) => {
    console.log(m);
    switch (m.type) {
        case "reLogin":
            loginWeb.send("reLogin",m.payload);
            break;
        default:
            console.log("error type");
    }

});

module.exports = {
    Login: (username, password) => {
        console.log(username, password);
        let mac = null;
        require('getmac').getMac(function (err, macAddress) {
            if (err) throw err;
            mac = macAddress.toString();
        });
        console.log(mac);
        let connect = fox.NewConnect(username, password, "");
        tcpProcess.send({type: "CONNECT", payload: connect});
    },
    Message: (data) => {
        console.log("message");
    },
    Info: (data) => {
        console.log("info");
    }
};
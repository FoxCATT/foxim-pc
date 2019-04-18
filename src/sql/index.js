const fork = require('child_process').fork;
const sqlProcess = fork("./src/sql/client", {
    silent: false
});


function onExit() {
    sqlProcess.kill('SIGINT');
    process.exit(0);
}

process.on('exit', onExit);

sqlProcess.on('message', (m) => {
    console.log(m);
    switch (m.type) {
        case "conversation-list-replay":
            mainWeb.send("conversation-list-replay", m.payload);
            break;
        case "conversation-get-replay":
            mainWeb.send("conversation-get-replay", m.payload);
            break;
        default:
            console.log("error type");
    }

});

module.exports = {
    Con_List: () => {
        sqlProcess.send({type: "conversation-list"})
    },
    Con_Get: (cid, mid) => {
        sqlProcess.send({type: "conversation-get", payload: {cid: cid, mid: mid}})
    }
};
const remote = require('electron');
const ipc = require('electron').ipcRenderer;

document.getElementById('min_bt').addEventListener('click', () => {
    remote.BrowserWindow.getFocusedWindow().minimize();
});
document.getElementById('close_bt').addEventListener('click', () => {
    window.close();
});

ipc.on('reLogin', (event, recode) => {
    console.log("dsdsd");
    switch (recode) {
        case 0:
            console.log("login.success");
            ipc.send("add");
            break;
        default:
            console.log("login error");
    }
});

const add = document.getElementsByClassName("buttonLogin")[0];
add.onclick = () => {
    let username = document.getElementById('username').value,
        password = document.getElementById('password').value;
    ipc.send('login', username, password);
};
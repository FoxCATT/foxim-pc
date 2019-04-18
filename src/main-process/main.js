const electron = require('electron');
const {app} = electron;
const loginWindow = require('./login-window');
// const client = require('electron-connect').client;

let login;
// let width, height;

app.on('ready', function () {
    // width, height = electron.screen.getPrimaryDisplay().workAreaSize;
    login=new loginWindow();
    login.createWindow();
    // client.create(login);
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});




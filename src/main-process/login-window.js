const electron = require('electron');
const {BrowserWindow, ipcMain} = electron;
const path = require('path');
const url = require('url');
const config = require('../config');
const tcpClient = require('../tcp');
const mainWindow = require('./main-window');
// const client = require('electron-connect').client;

const {EventEmitter} = require('events');

module.exports = class MainWindow extends EventEmitter {
    constructor() {
        super()

    }

    createWindow() {
        this.browserWindow = new BrowserWindow({
            width: 430,
            height: 328,
            frame: false,
            resizable: false,
            minimizable: false,
            maximizable: false,
            transparent: true,
            webPreferences: {
                nodeIntegration: true
            },
            title: config.APP_NAME,
        });
        this.browserWindow.loadURL(url.format({
            pathname: path.join(config.APP_PATH, './login.html'),
            protocol: 'file',
            slashes: true
        }));
        this.handleEvents();
        this.ipcHandle();
        global.loginWeb = this.browserWindow.webContents;

    }

    handleEvents() {
        this.browserWindow.on('closed', () => {
            this.browserWindow = null
        });
    }

    ipcHandle() {
        ipcMain.on('add', () => {
            this.chlidWindow = new mainWindow();
            this.chlidWindow.createWindow();
            this.browserWindow.close();
            // client.create(this.chlidWindow);
        });

        ipcMain.on('login', (event, username, password) => {
            tcpClient.Login(username, password);
        });
    }

    toggleDevTools() {
        return this.browserWindow.toggleDevTools()
    }

    openDevTools() {
        return this.browserWindow.openDevTools()
    }

    closeDevTools() {
        return this.browserWindow.closeDevTools()
    }
};

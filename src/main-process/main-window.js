const electron = require('electron');
const {BrowserWindow, ipcMain} = electron;
const path = require('path');
const url = require('url');
const config = require('../config');
const sql = require('../sql');

const {EventEmitter} = require('events');

module.exports = class MainWindow extends EventEmitter {
    constructor() {
        super()

    }

    createWindow() {
        this.browserWindow = new BrowserWindow({
            width: 800,
            height: 600,
            frame: false,
            minWidth: 800,
            minHeight: 600,
            title: config.APP_NAME,
        });
        this.browserWindow.loadURL(url.format({
            pathname: path.join(config.APP_PATH, './index.html'),
            protocol: 'file',
            slashes: true
        }));
        this.handleEvents();
        this.ipcHandle();
        global.mainWeb = this.browserWindow.webContents;
        this.openDevTools();
    }

    handleEvents() {
        this.browserWindow.on('closed', () => {
            this.browserWindow = null
        });
    }

    ipcHandle() {
        ipcMain.on('conversation-list', (event) => {
            sql.Con_List();
        });
        ipcMain.on('conversation-get', (event,cid,mid) => {
            sql.Con_Get(cid,mid);
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

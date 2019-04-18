const path = require('path');

module.exports = {
    APP_NAME: 'FoxIM',
    APP_PATH: path.join(__dirname + '/../app/'),

    TCP: {
        host: "127.0.0.1",
        port: 18081,
    },
    SQLITE3: {
        path: path.join(__dirname + '/../tmp/foxim.db'),
        js: path.join(__dirname + './sql/client.js')
    }
};
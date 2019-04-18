let net = require('net');
const config = require('../config');
const fox = require('../proto/until');
const ipc = require('electron').ipcMain;

class TCPClient {
    constructor() {
        // this.client = null;
        // this.bufList = [];
        // this.host = "";
        // this.port = null;
        // this.cookie = null;
    }

    Init() {
        if (!this.client) {
            this.client = new net.Socket();
            if (!this.client.connecting) {
                this.host = config.TCP.host;
                this.port = config.TCP.port;
                this.client.connect(this.port, this.host);
                // The client can also receive data from the server by reading from its socket.
                this.client.on('data', (data) => {
                    console.log("Data received from the server: ", data);
                    let m = fox.ReadMessage(data);
                    switch (m.flag) {
                        case 1:
                            let reconnect = fox.GetReconnect(m.message);
                            this.cookie = reconnect.cookie;
                            process.send({type: "reLogin", payload: reconnect.recode});
                            break;
                        case 3:
                            break;
                        case 5:
                            break;
                        default:

                    }
                });

                this.client.on('end', function () {
                    console.log('Requested an end to the TCP connection');
                });
            }
        }
        if (this.client.destroyed) {
            this.client.connect(this.port, this.host);
        }
    }

    // receiveData(data) {
    //     try {
    //         if (this.totalLenth + data.length > MAX_BUFF_LENGTH) {
    //             this.bufList.shift();
    //         }
    //         this.bufList.push(data);
    //         this.totalLenth += data.length;
    //
    //         if (this.dataHandler) {
    //             this.dataHandler(this.bufList, this.totalLenth);
    //         }
    //     } catch (e) {
    //         this.bufList = [];
    //         this.totalLenth = 0;
    //         console.log(`Error on onReceiveData ${e.message}`); // eslint-disable-line no-console
    //     }
    // }

    sendData(data) {
        if (!this.client || this.client.destroyed) {
            this.Init();
        }

        let buffer = Buffer.from(data, 'utf-8');
        console.log(buffer);
        this.client.write(buffer);

    }
}

const tcpClient = new TCPClient();

process.on('message', (m) => {
        try {
            switch (m.type) {
                case "CONNECT":
                    tcpClient.sendData(m.payload);
                    break;
                case "MESSAGE":

                    break;
                case "INFO":

                    break;
                default:
                    throw new Error('Unrecognized message received by tcp client');
            }
        } catch (e) {
            console.log(e); // eslint-disable-lineno-console
        }
    }
);
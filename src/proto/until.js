const pb = require('_protobufjs@6.8.8@protobufjs/index');
const root = pb.Root.fromJSON(require("./proto.json"));

/**
 * @return {Buffer}
 */
function NewConnect(username, password, clientID) {
    let Connect = root.lookupType('proto.connect');
    let c = {};
    c.username = Buffer.from(username, 'ascii');
    c.password = Buffer.from(password, 'ascii');
    c.clientID = Buffer.from(clientID, 'ascii');
    let data = Connect.encode(Connect.create(c)).finish();
    let buf = Buffer.alloc(3);
    buf[0] = (data.length + 1) % 256;
    buf[1] = (data.length + 1) / 256;
    buf[2] = 0;
    buf = Buffer.concat([buf, data]);
    console.log(buf.toString());
    return buf
}

function GetReconnect(data) {
    let ReConnect = root.lookupType("proto.reconnect");
    let reconnect = ReConnect.decode(data);
    console.log(reconnect);
    return reconnect
}

function ReadMessage(data) {
    let buf = Buffer.from(data);
    let length = buf.readUInt16LE(0);
    console.log(length);
    let flag = buf[2];
    let message = buf.slice(3);
    return {flag: flag, message: message}
}

function Uint8ArrayTOBuffer(buf) {
    let buffer = new Buffer(buf.byteLength);
    for (let i = 0; i < buffer.length; ++i) {
        buffer[i] = buf[i];
    }
    return buffer;
}

module.exports = {
    NewConnect: NewConnect,
    GetReconnect:GetReconnect,
    ReadMessage: ReadMessage,
};

// function NewReConnect(recode, cookie) {
//     let r = pb.proto.reconnect();
//     r.Recode = recode;
//     r.Cookie = cookie;
//     let data = r.serializeBinary();
//     let buf = new Buffer(3);
//     buf.readUInt16LE(data.length + 1);
//     buf.readUInt8(1);
//     return callback(data + buf)
// }

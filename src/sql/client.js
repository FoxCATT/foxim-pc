const fs = require('fs');
const sqlite3 = require('sql.js');
const config = require('../config');


class Client {
    constructor() {

    }

    Init() {
        let sqliteBuffer = fs.readFileSync(config.SQLITE3.path);
        this.database = new sqlite3.Database(sqliteBuffer);
    }

    Con_List() {
        let str = [];
        let database = this.database;
        database.each("SELECT t.* FROM Conversation t ORDER BY LastTime DESC", function (row) {
            console.log(row);
            if (row.IsShow === 1) {
                let sql = "";
                if (row.Type === "user") {
                    sql = "SELECT NickName,Avatar FROM UserInfo WHERE UID=" + row.ToID;
                } else {
                    sql = "SELECT NickName,Avatar FROM GroupInfo WHERE GID=" + row.ToID;
                }
                console.log(sql);
                let master = database.exec(sql)[0];
                console.log(master);
                sql = "SELECT Content FROM Chat_" + row.CID + " ORDER BY Time DESC Limit 1";
                console.log(sql);
                let con = database.exec(sql)[0];
                console.log(con);
                let tmp = "<li onclick='conversation_click(this)' id=\"" + row.CID + "\">" +
                    "<img src=\"" + master.values[0][1] + "\" alt=\"\" class=\"icon-con\">\n" +
                    "<div class=\"info\">\n" +
                    "<h5>" + master.values[0][0] + "</h5>\n" +
                    "<p>" + (row.LastID < row.NewID ? "[NEW]" : "") + con.values[0] + "</p>\n" +
                    "</div>\n" +
                    "</li>";
                console.log(tmp);
                str.push(tmp);
            }
        });
        return str;
    }

    Con_Get(cid, mid) {

        let sql = "UPDATE Conversation SET LastID=" + mid + " WHERE CID=\"" + cid + "\"";
        this.database.run(sql);
        sql = "SELECT NewID FROM Conversation WHERE CID=\"" + cid + "\"";
        let chat = this.database.exec(sql)[0];
        console.log(chat);
        let num = (chat[1] - chat[0] > 6) ? chat[1] - chat[0] : 6;
        sql = "SELECT * FROM Chat_" + cid + " ORDER BY Time DESC Limit " + num;
        console.log(sql);
        let msg = this.database.exec(sql)[0];
        console.log(msg);
        let str = [];
        msg.values.forEach(function (e) {
            let tmp = "<li class=\"self\">\n" +
                "<img src=\"../tmp/image/u2.jpeg\" alt=\"\" class=\"icon-user\">\n" +
                " <div class=\"wordA\">\n" +
                "<p>hello world</p>\n" +
                "<time>20:17</time>\n" +
                "</div>\n" +
                "</li>"
        });
        return {id: chat, msg: msg};
    }
}

const sql = new Client();
sql.Init();

process.on('message', (m) => {
    try {
        let tmp = "";
        switch (m.type) {
            case "conversation-list":
                tmp = sql.Con_List();
                process.send({type: "conversation-list-replay", payload: tmp});
                break;
            case "conversation-get":
                tmp = sql.Con_Get(m.payload.cid, m.payload.mid);
                process.send({type: "conversation-get-replay", payload: tmp});
                break;
            default:
                throw new Error('Unrecognized message received by sql');
        }
    } catch (e) {
        console.log(e);
    }
});
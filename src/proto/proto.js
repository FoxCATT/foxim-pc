/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("_protobufjs@6.8.8@protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.connect = (function() {

        /**
         * Properties of a connect.
         * @memberof proto
         * @interface Iconnect
         * @property {Uint8Array|null} [username] connect username
         * @property {Uint8Array|null} [password] connect password
         * @property {Uint8Array|null} [clientID] connect clientID
         */

        /**
         * Constructs a new connect.
         * @memberof proto
         * @classdesc Represents a connect.
         * @implements Iconnect
         * @constructor
         * @param {proto.Iconnect=} [properties] Properties to set
         */
        function connect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * connect username.
         * @member {Uint8Array} username
         * @memberof proto.connect
         * @instance
         */
        connect.prototype.username = $util.newBuffer([]);

        /**
         * connect password.
         * @member {Uint8Array} password
         * @memberof proto.connect
         * @instance
         */
        connect.prototype.password = $util.newBuffer([]);

        /**
         * connect clientID.
         * @member {Uint8Array} clientID
         * @memberof proto.connect
         * @instance
         */
        connect.prototype.clientID = $util.newBuffer([]);

        /**
         * Creates a new connect instance using the specified properties.
         * @function create
         * @memberof proto.connect
         * @static
         * @param {proto.Iconnect=} [properties] Properties to set
         * @returns {proto.connect} connect instance
         */
        connect.create = function create(properties) {
            return new connect(properties);
        };

        /**
         * Encodes the specified connect message. Does not implicitly {@link proto.connect.verify|verify} messages.
         * @function encode
         * @memberof proto.connect
         * @static
         * @param {proto.Iconnect} message connect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        connect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.username);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.password);
            if (message.clientID != null && message.hasOwnProperty("clientID"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.clientID);
            return writer;
        };

        /**
         * Encodes the specified connect message, length delimited. Does not implicitly {@link proto.connect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.connect
         * @static
         * @param {proto.Iconnect} message connect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        connect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a connect message from the specified reader or buffer.
         * @function decode
         * @memberof proto.connect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.connect} connect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        connect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.connect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.bytes();
                    break;
                case 2:
                    message.password = reader.bytes();
                    break;
                case 3:
                    message.clientID = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a connect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.connect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.connect} connect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        connect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a connect message.
         * @function verify
         * @memberof proto.connect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        connect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!(message.username && typeof message.username.length === "number" || $util.isString(message.username)))
                    return "username: buffer expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!(message.password && typeof message.password.length === "number" || $util.isString(message.password)))
                    return "password: buffer expected";
            if (message.clientID != null && message.hasOwnProperty("clientID"))
                if (!(message.clientID && typeof message.clientID.length === "number" || $util.isString(message.clientID)))
                    return "clientID: buffer expected";
            return null;
        };

        /**
         * Creates a connect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.connect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.connect} connect
         */
        connect.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.connect)
                return object;
            var message = new $root.proto.connect();
            if (object.username != null)
                if (typeof object.username === "string")
                    $util.base64.decode(object.username, message.username = $util.newBuffer($util.base64.length(object.username)), 0);
                else if (object.username.length)
                    message.username = object.username;
            if (object.password != null)
                if (typeof object.password === "string")
                    $util.base64.decode(object.password, message.password = $util.newBuffer($util.base64.length(object.password)), 0);
                else if (object.password.length)
                    message.password = object.password;
            if (object.clientID != null)
                if (typeof object.clientID === "string")
                    $util.base64.decode(object.clientID, message.clientID = $util.newBuffer($util.base64.length(object.clientID)), 0);
                else if (object.clientID.length)
                    message.clientID = object.clientID;
            return message;
        };

        /**
         * Creates a plain object from a connect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.connect
         * @static
         * @param {proto.connect} message connect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        connect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.username = "";
                else {
                    object.username = [];
                    if (options.bytes !== Array)
                        object.username = $util.newBuffer(object.username);
                }
                if (options.bytes === String)
                    object.password = "";
                else {
                    object.password = [];
                    if (options.bytes !== Array)
                        object.password = $util.newBuffer(object.password);
                }
                if (options.bytes === String)
                    object.clientID = "";
                else {
                    object.clientID = [];
                    if (options.bytes !== Array)
                        object.clientID = $util.newBuffer(object.clientID);
                }
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = options.bytes === String ? $util.base64.encode(message.username, 0, message.username.length) : options.bytes === Array ? Array.prototype.slice.call(message.username) : message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = options.bytes === String ? $util.base64.encode(message.password, 0, message.password.length) : options.bytes === Array ? Array.prototype.slice.call(message.password) : message.password;
            if (message.clientID != null && message.hasOwnProperty("clientID"))
                object.clientID = options.bytes === String ? $util.base64.encode(message.clientID, 0, message.clientID.length) : options.bytes === Array ? Array.prototype.slice.call(message.clientID) : message.clientID;
            return object;
        };

        /**
         * Converts this connect to JSON.
         * @function toJSON
         * @memberof proto.connect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        connect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return connect;
    })();

    proto.reconnect = (function() {

        /**
         * Properties of a reconnect.
         * @memberof proto
         * @interface Ireconnect
         * @property {proto.reconnect.ReCode|null} [recode] reconnect recode
         * @property {Uint8Array|null} [cookie] reconnect cookie
         */

        /**
         * Constructs a new reconnect.
         * @memberof proto
         * @classdesc Represents a reconnect.
         * @implements Ireconnect
         * @constructor
         * @param {proto.Ireconnect=} [properties] Properties to set
         */
        function reconnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * reconnect recode.
         * @member {proto.reconnect.ReCode} recode
         * @memberof proto.reconnect
         * @instance
         */
        reconnect.prototype.recode = 0;

        /**
         * reconnect cookie.
         * @member {Uint8Array} cookie
         * @memberof proto.reconnect
         * @instance
         */
        reconnect.prototype.cookie = $util.newBuffer([]);

        /**
         * Creates a new reconnect instance using the specified properties.
         * @function create
         * @memberof proto.reconnect
         * @static
         * @param {proto.Ireconnect=} [properties] Properties to set
         * @returns {proto.reconnect} reconnect instance
         */
        reconnect.create = function create(properties) {
            return new reconnect(properties);
        };

        /**
         * Encodes the specified reconnect message. Does not implicitly {@link proto.reconnect.verify|verify} messages.
         * @function encode
         * @memberof proto.reconnect
         * @static
         * @param {proto.Ireconnect} message reconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        reconnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.recode != null && message.hasOwnProperty("recode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.recode);
            if (message.cookie != null && message.hasOwnProperty("cookie"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.cookie);
            return writer;
        };

        /**
         * Encodes the specified reconnect message, length delimited. Does not implicitly {@link proto.reconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.reconnect
         * @static
         * @param {proto.Ireconnect} message reconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        reconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a reconnect message from the specified reader or buffer.
         * @function decode
         * @memberof proto.reconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.reconnect} reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        reconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.reconnect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.recode = reader.int32();
                    break;
                case 2:
                    message.cookie = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a reconnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.reconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.reconnect} reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        reconnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a reconnect message.
         * @function verify
         * @memberof proto.reconnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        reconnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.recode != null && message.hasOwnProperty("recode"))
                switch (message.recode) {
                default:
                    return "recode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.cookie != null && message.hasOwnProperty("cookie"))
                if (!(message.cookie && typeof message.cookie.length === "number" || $util.isString(message.cookie)))
                    return "cookie: buffer expected";
            return null;
        };

        /**
         * Creates a reconnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.reconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.reconnect} reconnect
         */
        reconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.reconnect)
                return object;
            var message = new $root.proto.reconnect();
            switch (object.recode) {
            case "conSuccess":
            case 0:
                message.recode = 0;
                break;
            case "conError":
            case 1:
                message.recode = 1;
                break;
            case "conRefuse":
            case 2:
                message.recode = 2;
                break;
            case "conIncorrect":
            case 3:
                message.recode = 3;
                break;
            }
            if (object.cookie != null)
                if (typeof object.cookie === "string")
                    $util.base64.decode(object.cookie, message.cookie = $util.newBuffer($util.base64.length(object.cookie)), 0);
                else if (object.cookie.length)
                    message.cookie = object.cookie;
            return message;
        };

        /**
         * Creates a plain object from a reconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.reconnect
         * @static
         * @param {proto.reconnect} message reconnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        reconnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.recode = options.enums === String ? "conSuccess" : 0;
                if (options.bytes === String)
                    object.cookie = "";
                else {
                    object.cookie = [];
                    if (options.bytes !== Array)
                        object.cookie = $util.newBuffer(object.cookie);
                }
            }
            if (message.recode != null && message.hasOwnProperty("recode"))
                object.recode = options.enums === String ? $root.proto.reconnect.ReCode[message.recode] : message.recode;
            if (message.cookie != null && message.hasOwnProperty("cookie"))
                object.cookie = options.bytes === String ? $util.base64.encode(message.cookie, 0, message.cookie.length) : options.bytes === Array ? Array.prototype.slice.call(message.cookie) : message.cookie;
            return object;
        };

        /**
         * Converts this reconnect to JSON.
         * @function toJSON
         * @memberof proto.reconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        reconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ReCode enum.
         * @name proto.reconnect.ReCode
         * @enum {string}
         * @property {number} conSuccess=0 conSuccess value
         * @property {number} conError=1 conError value
         * @property {number} conRefuse=2 conRefuse value
         * @property {number} conIncorrect=3 conIncorrect value
         */
        reconnect.ReCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "conSuccess"] = 0;
            values[valuesById[1] = "conError"] = 1;
            values[valuesById[2] = "conRefuse"] = 2;
            values[valuesById[3] = "conIncorrect"] = 3;
            return values;
        })();

        return reconnect;
    })();

    proto.message = (function() {

        /**
         * Properties of a message.
         * @memberof proto
         * @interface Imessage
         * @property {proto.message.Type|null} [type] message type
         * @property {Uint8Array|null} [userID] message userID
         * @property {Uint8Array|null} [toID] message toID
         * @property {google.protobuf.ITimestamp|null} [time] message time
         * @property {string|null} [content] message content
         * @property {proto.message.MType|null} [mType] message mType
         */

        /**
         * Constructs a new message.
         * @memberof proto
         * @classdesc Represents a message.
         * @implements Imessage
         * @constructor
         * @param {proto.Imessage=} [properties] Properties to set
         */
        function message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * message type.
         * @member {proto.message.Type} type
         * @memberof proto.message
         * @instance
         */
        message.prototype.type = 0;

        /**
         * message userID.
         * @member {Uint8Array} userID
         * @memberof proto.message
         * @instance
         */
        message.prototype.userID = $util.newBuffer([]);

        /**
         * message toID.
         * @member {Uint8Array} toID
         * @memberof proto.message
         * @instance
         */
        message.prototype.toID = $util.newBuffer([]);

        /**
         * message time.
         * @member {google.protobuf.ITimestamp|null|undefined} time
         * @memberof proto.message
         * @instance
         */
        message.prototype.time = null;

        /**
         * message content.
         * @member {string} content
         * @memberof proto.message
         * @instance
         */
        message.prototype.content = "";

        /**
         * message mType.
         * @member {proto.message.MType} mType
         * @memberof proto.message
         * @instance
         */
        message.prototype.mType = 0;

        /**
         * Creates a new message instance using the specified properties.
         * @function create
         * @memberof proto.message
         * @static
         * @param {proto.Imessage=} [properties] Properties to set
         * @returns {proto.message} message instance
         */
        message.create = function create(properties) {
            return new message(properties);
        };

        /**
         * Encodes the specified message message. Does not implicitly {@link proto.message.verify|verify} messages.
         * @function encode
         * @memberof proto.message
         * @static
         * @param {proto.Imessage} message message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.userID != null && message.hasOwnProperty("userID"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.userID);
            if (message.toID != null && message.hasOwnProperty("toID"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.toID);
            if (message.time != null && message.hasOwnProperty("time"))
                $root.google.protobuf.Timestamp.encode(message.time, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
            if (message.mType != null && message.hasOwnProperty("mType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.mType);
            return writer;
        };

        /**
         * Encodes the specified message message, length delimited. Does not implicitly {@link proto.message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.message
         * @static
         * @param {proto.Imessage} message message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a message message from the specified reader or buffer.
         * @function decode
         * @memberof proto.message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.message} message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.userID = reader.bytes();
                    break;
                case 3:
                    message.toID = reader.bytes();
                    break;
                case 4:
                    message.time = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.content = reader.string();
                    break;
                case 6:
                    message.mType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.message} message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a message message.
         * @function verify
         * @memberof proto.message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!(message.userID && typeof message.userID.length === "number" || $util.isString(message.userID)))
                    return "userID: buffer expected";
            if (message.toID != null && message.hasOwnProperty("toID"))
                if (!(message.toID && typeof message.toID.length === "number" || $util.isString(message.toID)))
                    return "toID: buffer expected";
            if (message.time != null && message.hasOwnProperty("time")) {
                var error = $root.google.protobuf.Timestamp.verify(message.time);
                if (error)
                    return "time." + error;
            }
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.mType != null && message.hasOwnProperty("mType"))
                switch (message.mType) {
                default:
                    return "mType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.message} message
         */
        message.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.message)
                return object;
            var message = new $root.proto.message();
            switch (object.type) {
            case "message":
            case 0:
                message.type = 0;
                break;
            case "friend":
            case 1:
                message.type = 1;
                break;
            case "group":
            case 2:
                message.type = 2;
                break;
            }
            if (object.userID != null)
                if (typeof object.userID === "string")
                    $util.base64.decode(object.userID, message.userID = $util.newBuffer($util.base64.length(object.userID)), 0);
                else if (object.userID.length)
                    message.userID = object.userID;
            if (object.toID != null)
                if (typeof object.toID === "string")
                    $util.base64.decode(object.toID, message.toID = $util.newBuffer($util.base64.length(object.toID)), 0);
                else if (object.toID.length)
                    message.toID = object.toID;
            if (object.time != null) {
                if (typeof object.time !== "object")
                    throw TypeError(".proto.message.time: object expected");
                message.time = $root.google.protobuf.Timestamp.fromObject(object.time);
            }
            if (object.content != null)
                message.content = String(object.content);
            switch (object.mType) {
            case "add":
            case 0:
                message.mType = 0;
                break;
            case "del":
            case 1:
                message.mType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.message
         * @static
         * @param {proto.message} message message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "message" : 0;
                if (options.bytes === String)
                    object.userID = "";
                else {
                    object.userID = [];
                    if (options.bytes !== Array)
                        object.userID = $util.newBuffer(object.userID);
                }
                if (options.bytes === String)
                    object.toID = "";
                else {
                    object.toID = [];
                    if (options.bytes !== Array)
                        object.toID = $util.newBuffer(object.toID);
                }
                object.time = null;
                object.content = "";
                object.mType = options.enums === String ? "add" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.proto.message.Type[message.type] : message.type;
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = options.bytes === String ? $util.base64.encode(message.userID, 0, message.userID.length) : options.bytes === Array ? Array.prototype.slice.call(message.userID) : message.userID;
            if (message.toID != null && message.hasOwnProperty("toID"))
                object.toID = options.bytes === String ? $util.base64.encode(message.toID, 0, message.toID.length) : options.bytes === Array ? Array.prototype.slice.call(message.toID) : message.toID;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = $root.google.protobuf.Timestamp.toObject(message.time, options);
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.mType != null && message.hasOwnProperty("mType"))
                object.mType = options.enums === String ? $root.proto.message.MType[message.mType] : message.mType;
            return object;
        };

        /**
         * Converts this message to JSON.
         * @function toJSON
         * @memberof proto.message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Type enum.
         * @name proto.message.Type
         * @enum {string}
         * @property {number} message=0 message value
         * @property {number} friend=1 friend value
         * @property {number} group=2 group value
         */
        message.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "message"] = 0;
            values[valuesById[1] = "friend"] = 1;
            values[valuesById[2] = "group"] = 2;
            return values;
        })();

        /**
         * MType enum.
         * @name proto.message.MType
         * @enum {string}
         * @property {number} add=0 add value
         * @property {number} del=1 del value
         */
        message.MType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "add"] = 0;
            values[valuesById[1] = "del"] = 1;
            return values;
        })();

        return message;
    })();

    proto.remessage = (function() {

        /**
         * Properties of a remessage.
         * @memberof proto
         * @interface Iremessage
         * @property {proto.remessage.ReCode|null} [recode] remessage recode
         */

        /**
         * Constructs a new remessage.
         * @memberof proto
         * @classdesc Represents a remessage.
         * @implements Iremessage
         * @constructor
         * @param {proto.Iremessage=} [properties] Properties to set
         */
        function remessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * remessage recode.
         * @member {proto.remessage.ReCode} recode
         * @memberof proto.remessage
         * @instance
         */
        remessage.prototype.recode = 0;

        /**
         * Creates a new remessage instance using the specified properties.
         * @function create
         * @memberof proto.remessage
         * @static
         * @param {proto.Iremessage=} [properties] Properties to set
         * @returns {proto.remessage} remessage instance
         */
        remessage.create = function create(properties) {
            return new remessage(properties);
        };

        /**
         * Encodes the specified remessage message. Does not implicitly {@link proto.remessage.verify|verify} messages.
         * @function encode
         * @memberof proto.remessage
         * @static
         * @param {proto.Iremessage} message remessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        remessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.recode != null && message.hasOwnProperty("recode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.recode);
            return writer;
        };

        /**
         * Encodes the specified remessage message, length delimited. Does not implicitly {@link proto.remessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.remessage
         * @static
         * @param {proto.Iremessage} message remessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        remessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a remessage message from the specified reader or buffer.
         * @function decode
         * @memberof proto.remessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.remessage} remessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        remessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.remessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.recode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a remessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.remessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.remessage} remessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        remessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a remessage message.
         * @function verify
         * @memberof proto.remessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        remessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.recode != null && message.hasOwnProperty("recode"))
                switch (message.recode) {
                default:
                    return "recode: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a remessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.remessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.remessage} remessage
         */
        remessage.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.remessage)
                return object;
            var message = new $root.proto.remessage();
            switch (object.recode) {
            case "sendError":
            case 0:
                message.recode = 0;
                break;
            case "sendSuccess":
            case 1:
                message.recode = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a remessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.remessage
         * @static
         * @param {proto.remessage} message remessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        remessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.recode = options.enums === String ? "sendError" : 0;
            if (message.recode != null && message.hasOwnProperty("recode"))
                object.recode = options.enums === String ? $root.proto.remessage.ReCode[message.recode] : message.recode;
            return object;
        };

        /**
         * Converts this remessage to JSON.
         * @function toJSON
         * @memberof proto.remessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        remessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ReCode enum.
         * @name proto.remessage.ReCode
         * @enum {string}
         * @property {number} sendError=0 sendError value
         * @property {number} sendSuccess=1 sendSuccess value
         */
        remessage.ReCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "sendError"] = 0;
            values[valuesById[1] = "sendSuccess"] = 1;
            return values;
        })();

        return remessage;
    })();

    proto.info = (function() {

        /**
         * Properties of an info.
         * @memberof proto
         * @interface Iinfo
         * @property {proto.info.Type|null} [type] info type
         * @property {Uint8Array|null} [userID] info userID
         */

        /**
         * Constructs a new info.
         * @memberof proto
         * @classdesc Represents an info.
         * @implements Iinfo
         * @constructor
         * @param {proto.Iinfo=} [properties] Properties to set
         */
        function info(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * info type.
         * @member {proto.info.Type} type
         * @memberof proto.info
         * @instance
         */
        info.prototype.type = 0;

        /**
         * info userID.
         * @member {Uint8Array} userID
         * @memberof proto.info
         * @instance
         */
        info.prototype.userID = $util.newBuffer([]);

        /**
         * Creates a new info instance using the specified properties.
         * @function create
         * @memberof proto.info
         * @static
         * @param {proto.Iinfo=} [properties] Properties to set
         * @returns {proto.info} info instance
         */
        info.create = function create(properties) {
            return new info(properties);
        };

        /**
         * Encodes the specified info message. Does not implicitly {@link proto.info.verify|verify} messages.
         * @function encode
         * @memberof proto.info
         * @static
         * @param {proto.Iinfo} message info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        info.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.userID != null && message.hasOwnProperty("userID"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.userID);
            return writer;
        };

        /**
         * Encodes the specified info message, length delimited. Does not implicitly {@link proto.info.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.info
         * @static
         * @param {proto.Iinfo} message info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        info.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an info message from the specified reader or buffer.
         * @function decode
         * @memberof proto.info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.info} info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        info.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.info();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.userID = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an info message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.info} info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        info.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an info message.
         * @function verify
         * @memberof proto.info
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        info.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!(message.userID && typeof message.userID.length === "number" || $util.isString(message.userID)))
                    return "userID: buffer expected";
            return null;
        };

        /**
         * Creates an info message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.info
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.info} info
         */
        info.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.info)
                return object;
            var message = new $root.proto.info();
            switch (object.type) {
            case "user":
            case 0:
                message.type = 0;
                break;
            case "frined":
            case 1:
                message.type = 1;
                break;
            case "group":
            case 2:
                message.type = 2;
                break;
            }
            if (object.userID != null)
                if (typeof object.userID === "string")
                    $util.base64.decode(object.userID, message.userID = $util.newBuffer($util.base64.length(object.userID)), 0);
                else if (object.userID.length)
                    message.userID = object.userID;
            return message;
        };

        /**
         * Creates a plain object from an info message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.info
         * @static
         * @param {proto.info} message info
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        info.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "user" : 0;
                if (options.bytes === String)
                    object.userID = "";
                else {
                    object.userID = [];
                    if (options.bytes !== Array)
                        object.userID = $util.newBuffer(object.userID);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.proto.info.Type[message.type] : message.type;
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = options.bytes === String ? $util.base64.encode(message.userID, 0, message.userID.length) : options.bytes === Array ? Array.prototype.slice.call(message.userID) : message.userID;
            return object;
        };

        /**
         * Converts this info to JSON.
         * @function toJSON
         * @memberof proto.info
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        info.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Type enum.
         * @name proto.info.Type
         * @enum {string}
         * @property {number} user=0 user value
         * @property {number} frined=1 frined value
         * @property {number} group=2 group value
         */
        info.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "user"] = 0;
            values[valuesById[1] = "frined"] = 1;
            values[valuesById[2] = "group"] = 2;
            return values;
        })();

        return info;
    })();

    return proto;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;

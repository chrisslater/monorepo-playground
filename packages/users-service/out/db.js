"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Low = require("lowdb");
var path = require("path");
var FileSync = require("lowdb/adapters/FileSync");
var Db = (function () {
    function Db(context) {
        this.context = context;
    }
    Db.prototype.getUsers = function () {
        return this.context.get('users').value();
    };
    return Db;
}());
exports.Db = Db;
var filePath = path.resolve(__dirname, '../db.json');
var adapter = new FileSync(filePath);
var dbFactory = function (context) {
    if (context === void 0) { context = new Low(adapter); }
    return new Db(context);
};
exports.default = dbFactory;
//# sourceMappingURL=db.js.map
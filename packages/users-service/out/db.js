"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lowdb = require("lowdb");
var path = require("path");
var filePath = path.resolve(__dirname, '../db.json');
var DbContext = (function () {
    function DbContext() {
        this.context = new Lowdb(filePath);
    }
    Object.defineProperty(DbContext.prototype, "users", {
        get: function () {
            return this.context.get('users');
        },
        enumerable: true,
        configurable: true
    });
    return DbContext;
}());
exports.DbContext = DbContext;
var dbFactory = function () { return new DbContext(); };
exports.default = dbFactory;
//# sourceMappingURL=db.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("server");
var db_1 = require("./db");
var app = server_1.default();
var context = db_1.default();
app.get('/', function (ctx) {
    ctx.body = context.users;
});
app.listen();
//# sourceMappingURL=index.js.map
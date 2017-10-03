"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var bodyParser = require("koa-bodyparser");
var Router = require("koa-router");
var Server = (function () {
    function Server() {
        this.server = new Koa();
        this.router = new Router();
    }
    Server.prototype.routes = function (routes) {
        var _this = this;
        routes.forEach(function (route) {
            return _this.route(route);
        });
    };
    Server.prototype.route = function (_a) {
        var method = _a.method, path = _a.path, handler = _a.handler;
        this.router[method](path, handler);
    };
    Server.prototype.get = function (path, handler) {
        this.router.get(path, handler);
    };
    Server.prototype.post = function (path, handler) {
        this.router.post(path, handler);
    };
    Server.prototype.listen = function (port) {
        if (port === void 0) { port = 3000; }
        this.server.use(bodyParser());
        this.server.use(this.router.routes());
        this.server.use(this.router.allowedMethods());
        this.server.listen(port);
    };
    return Server;
}());
exports.Server = Server;
function serverFactory() {
    return new Server();
}
exports.serverFactory = serverFactory;
exports.default = serverFactory;
//# sourceMappingURL=index.js.map
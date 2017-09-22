"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Graphql = require("graphql");
var inversify_1 = require("inversify");
var types_1 = require("../types");
var users_1 = require("./users");
exports.UsersSchema = users_1.UsersSchema;
var RootQuerySchema = (function () {
    function RootQuerySchema(usersSchema) {
        this.usersSchema = usersSchema;
    }
    Object.defineProperty(RootQuerySchema.prototype, "schema", {
        get: function () {
            var query = new Graphql.GraphQLObjectType({
                name: 'RootQueryType',
                fields: __assign({}, this.usersSchema.schema),
            });
            return new Graphql.GraphQLSchema({ query: query });
        },
        enumerable: true,
        configurable: true
    });
    RootQuerySchema = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.Types.UsersSchema)),
        __metadata("design:paramtypes", [Object])
    ], RootQuerySchema);
    return RootQuerySchema;
}());
exports.RootQuerySchema = RootQuerySchema;
//# sourceMappingURL=index.js.map
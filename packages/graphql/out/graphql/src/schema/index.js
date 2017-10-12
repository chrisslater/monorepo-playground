"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Graphql = require("graphql");
var users_1 = require("./users");
var query = new Graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: __assign({}, users_1.default),
});
var schema = new Graphql.GraphQLSchema({ query: query });
exports.default = schema;
//# sourceMappingURL=index.js.map
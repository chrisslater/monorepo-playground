"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Graphql = require("graphql");
exports.UserType = new Graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: Graphql.GraphQLString,
        },
        name: {
            type: Graphql.GraphQLString,
        },
        nationality: {
            type: Graphql.GraphQLString,
        },
    },
});
exports.UserInputType = new Graphql.GraphQLObjectType({
    name: 'UserInput',
    fields: {
        id: {
            type: Graphql.GraphQLString,
        },
        name: {
            type: Graphql.GraphQLString,
        },
        nationality: {
            type: Graphql.GraphQLString,
        },
    },
});
var userByName = {
    name: 'User',
    description: 'User',
    args: {
        name: {
            name: 'name',
            type: Graphql.GraphQLString,
        },
    },
    type: exports.UserType,
    resolve: function (root, args) {
        return _this.usersRepository.getUserByName(args.name);
    },
};
var users = {
    description: 'Users',
    type: new Graphql.GraphQLList(exports.UserType),
    resolve: function () {
        return _this.usersRepository.getUsers();
    },
};
var userFields = {
    users: users,
    userByName: userByName,
};
exports.default = userFields;
//# sourceMappingURL=users.js.map
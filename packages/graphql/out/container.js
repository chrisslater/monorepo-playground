"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var application_1 = require("./application");
var db_1 = require("./db");
var repositories_1 = require("./repositories");
var schema_1 = require("./schema");
var types_1 = require("./types");
exports.container = new inversify_1.Container();
exports.default = exports.container;
exports.container.bind(types_1.Types.DbContext).to(db_1.DbContext);
exports.container.bind(types_1.Types.UsersRepository).to(repositories_1.UsersRepository);
exports.container.bind(types_1.Types.UsersSchema).to(schema_1.UsersSchema);
exports.container.bind(types_1.Types.RootQuerySchema).to(schema_1.RootQuerySchema);
exports.container.bind(types_1.Types.Application).to(application_1.Application);
//# sourceMappingURL=container.js.map
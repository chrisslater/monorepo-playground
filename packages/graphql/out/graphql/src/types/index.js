"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createTypes(typeStrings) {
    var types = {};
    typeStrings.forEach(function (type) { return types[type] = Symbol(type); });
    return types;
}
exports.Types = createTypes([
    'UsersRepository',
    'DbContext',
    'Server',
    'Application',
    'UsersSchema',
    'RootQuerySchema',
]);
//# sourceMappingURL=index.js.map
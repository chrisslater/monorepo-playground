"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsersRepository = (function () {
    function UsersRepository() {
    }
    UsersRepository.prototype.getUserByName = function (name) {
        return this.context.users
            .find({ name: name })
            .value();
    };
    UsersRepository.prototype.getUsers = function () {
        return this.context.users.value();
    };
    return UsersRepository;
}());
usersRepositorUsersRepository;
//# sourceMappingURL=users.js.map
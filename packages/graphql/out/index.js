"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var container_1 = require("./container");
var types_1 = require("./types");
var application = container_1.container.get(types_1.Types.Application);
application.run();
//# sourceMappingURL=index.js.map
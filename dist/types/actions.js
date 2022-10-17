"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
var Action;
(function (Action) {
    Action[Action["EXIT"] = 0] = "EXIT";
    Action[Action["INPUT"] = 1] = "INPUT";
    Action[Action["REMOVE"] = 2] = "REMOVE";
    Action[Action["TOTAL_SALARY"] = 3] = "TOTAL_SALARY";
    Action[Action["MANAGER_ENOUGH_TEAM"] = 4] = "MANAGER_ENOUGH_TEAM";
    Action[Action["MANAGER_CROWED_TEAM"] = 5] = "MANAGER_CROWED_TEAM";
    Action[Action["SUM_EMPLOYEES"] = 6] = "SUM_EMPLOYEES";
    Action[Action["ALL_MEMBERS"] = 7] = "ALL_MEMBERS";
})(Action = exports.Action || (exports.Action = {}));

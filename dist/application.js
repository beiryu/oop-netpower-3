"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require("prompt-sync")();
const EmployeeFactory_1 = __importDefault(require("./classes/EmployeeFactory"));
const Company_1 = __importDefault(require("./classes/Company"));
const Team_1 = __importDefault(require("./classes/Team"));
const actions_1 = require("./types/actions");
const roles_1 = require("./types/roles");
const validation_1 = __importDefault(require("./utils/validation"));
const generateCode_1 = require("./utils/generateCode");
const Manager_1 = __importDefault(require("./classes/Manager"));
class Application {
    start() {
        var _a;
        let company = Company_1.default.getInstance();
        company.addTeam(new Team_1.default(new Manager_1.default((0, generateCode_1.generateCode)(), "Dinh Nguyen Khanh", 1, 1, new Date("12/12/2022"))));
        do {
            console.log("\n------------------------------------------------------------------------------");
            console.log("MENU.");
            console.log("0. Exit");
            console.log("1. Input newcomer");
            console.log("2. Remove the employee");
            console.log("3. Show the total salary of all employee ");
            console.log("4. Show the name of manager in team not enough 4 positions");
            console.log("5. Show the name of manager who have most crowded member in the company");
            console.log("6. Sum of employees in the company");
            console.log("7. Show all employees in the company");
            console.log("------------------------------------------------------------------------------");
            var input = Number(prompt("Choose: "));
            if (input || input == 0)
                switch (input) {
                    case actions_1.Action.EXIT:
                        break;
                    case actions_1.Action.INPUT:
                        let type = prompt("Type of Employee (0. Manager, 1. Developer, 2. Tester, 4. Designer): ");
                        if (!validation_1.default.isRoleExist(type)) {
                            console.log("Role is not exist!");
                            break;
                        }
                        let name = prompt("Name: ");
                        let level = prompt("Level: ");
                        if (!validation_1.default.isNonNegativeNum(level)) {
                            console.log("Input must be a non negative number!");
                            break;
                        }
                        let baseSalary = prompt("Base Salary: ");
                        if (!validation_1.default.isNonNegativeNum(baseSalary)) {
                            console.log("Input must be a non negative number!");
                            break;
                        }
                        let onboardDate = prompt("Onboard Date (mm/dd/yyyy): ");
                        if (!validation_1.default.isValidDate(onboardDate)) {
                            console.log("This date is invalid format or wrong!");
                            break;
                        }
                        let employee = EmployeeFactory_1.default.getEmployee(type, [
                            String((0, generateCode_1.generateCode)()),
                            String(name),
                            Number(baseSalary),
                            Number(level),
                            new Date(onboardDate),
                        ]);
                        if (type == roles_1.Role.Manager) {
                            company.addTeam(new Team_1.default(employee));
                        }
                        else {
                            console.log("\n** Manager And Team Information");
                            company.showTeam();
                            let mCode = prompt("\nEnter code of manager: ");
                            (_a = company
                                .selectTeamByManagerCode(mCode)) === null || _a === void 0 ? void 0 : _a.addMember(employee);
                        }
                        break;
                    case actions_1.Action.REMOVE:
                        console.log("\n** Manager And Team Information");
                        company.showTeam();
                        let mCode = prompt("Select team: ");
                        let team = company.selectTeamByManagerCode(mCode);
                        console.log("\n** Employees Information");
                        team === null || team === void 0 ? void 0 : team.showEmployee();
                        let eCode = prompt("Enter code of employee: ");
                        team === null || team === void 0 ? void 0 : team.removeMember(eCode);
                        break;
                    case actions_1.Action.TOTAL_SALARY:
                        console.log("\n** Total salary of employees in the company: ", company.totalSalary());
                        break;
                    case actions_1.Action.MANAGER_ENOUGH_TEAM:
                        console.log("\n** Name of managers who have the team not enough all the roles");
                        company.teamLackOfPosition();
                        break;
                    case actions_1.Action.MANAGER_CROWED_TEAM:
                        console.log("\n** Name of manager who has the team crowed in the company");
                        company.crowdedTeam();
                        break;
                    case actions_1.Action.SUM_EMPLOYEES:
                        console.log("\n** Sum of employees in the company: ", company.sumOfEmployees());
                        break;
                    case actions_1.Action.ALL_MEMBERS:
                        console.log("\n** Info of employees in the company: ");
                        company.infoOfEmployees();
                        break;
                    default:
                        console.log("The number is not in the list");
                        break;
                }
            else {
                console.log("Input is invalid! Please try again");
            }
        } while (input != 0);
    }
}
exports.default = Application;

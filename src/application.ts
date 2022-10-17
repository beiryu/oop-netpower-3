const prompt = require("prompt-sync")();

import EmployeeFactory from "./classes/EmployeeFactory";
import Company from "./classes/Company";
import Team from "./classes/Team";
import { Action } from "./types/actions";
import { Role } from "./types/roles";
import Validation from "./utils/validation";
import { generateCode } from "./utils/generateCode";
import Manager from "./classes/Manager";

export default class Application {
    start() {
        let company = Company.getInstance();
        company.addTeam(
            new Team(
                new Manager(
                    generateCode(),
                    "Dinh Nguyen Khanh",
                    1,
                    1,
                    new Date("12/12/2022")
                )
            )
        );

        do {
            console.log(
                "\n------------------------------------------------------------------------------"
            );
            console.log("MENU.");
            console.log("0. Exit");
            console.log("1. Input newcomer");
            console.log("2. Remove the employee");
            console.log("3. Show the total salary of all employee ");
            console.log(
                "4. Show the name of manager in team not enough 4 positions"
            );
            console.log(
                "5. Show the name of manager who have most crowded member in the company"
            );
            console.log("6. Sum of employees in the company");
            console.log("7. Show all employees in the company");

            console.log(
                "------------------------------------------------------------------------------"
            );

            var input = Number(prompt("Choose: "));
            if (input || input == 0)
                switch (input) {
                    case Action.EXIT:
                        break;

                    case Action.INPUT:
                        let type: number = prompt(
                            "Type of Employee (0. Manager, 1. Developer, 2. Tester, 4. Designer): "
                        );
                        if (!Validation.isRoleExist(type)) {
                            console.log("Role is not exist!");
                            break;
                        }

                        let name: string = prompt("Name: ");
                        let level: string = prompt("Level: ");

                        if (!Validation.isNonNegativeNum(level)) {
                            console.log("Input must be a non negative number!");
                            break;
                        }

                        let baseSalary: string = prompt("Base Salary: ");

                        if (!Validation.isNonNegativeNum(baseSalary)) {
                            console.log("Input must be a non negative number!");
                            break;
                        }

                        let onboardDate: string = prompt(
                            "Onboard Date (mm/dd/yyyy): "
                        );

                        if (!Validation.isValidDate(onboardDate)) {
                            console.log(
                                "This date is invalid format or wrong!"
                            );
                            break;
                        }

                        let employee = EmployeeFactory.getEmployee(type, [
                            String(generateCode()),
                            String(name),
                            Number(baseSalary),
                            Number(level),
                            new Date(onboardDate),
                        ]);

                        if (type == Role.Manager) {
                            company.addTeam(new Team(employee));
                        } else {
                            console.log("\n** Manager And Team Information");
                            company.showTeam();
                            let mCode: string = prompt(
                                "\nEnter code of manager: "
                            );
                            company
                                .selectTeamByManagerCode(mCode)
                                ?.addMember(employee);
                        }
                        break;

                    case Action.REMOVE:
                        console.log("\n** Manager And Team Information");
                        company.showTeam();
                        let mCode: string = prompt("Select team: ");
                        let team = company.selectTeamByManagerCode(mCode);
                        console.log("\n** Employees Information");
                        team?.showEmployee();
                        let eCode: string = prompt("Enter code of employee: ");
                        team?.removeMember(eCode);
                        break;

                    case Action.TOTAL_SALARY:
                        console.log(
                            "\n** Total salary of employees in the company: ",
                            company.totalSalary()
                        );
                        break;

                    case Action.MANAGER_ENOUGH_TEAM:
                        console.log(
                            "\n** Name of managers who have the team not enough all the roles"
                        );
                        company.teamLackOfPosition();
                        break;

                    case Action.MANAGER_CROWED_TEAM:
                        console.log(
                            "\n** Name of manager who has the team crowed in the company"
                        );
                        company.crowdedTeam();
                        break;

                    case Action.SUM_EMPLOYEES:
                        console.log(
                            "\n** Sum of employees in the company: ",
                            company.sumOfEmployees()
                        );
                        break;

                    case Action.ALL_MEMBERS:
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

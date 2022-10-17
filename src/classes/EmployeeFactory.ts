import Employee from "./Employee";
import Manager from "./Manager";
import Developer from "./Developer";
import Tester from "./Tester";
import Designer from "./Designer";
import { Role } from "../types/roles";

export default class EmployeeFactory {
    static getEmployee(
        role: number,
        input: [string, string, number, number, Date]
    ): Employee {
        if (role == Role.Manager) return new Manager(...input);
        else if (role == Role.Developer) return new Developer(...input);
        else if (role == Role.Tester) return new Tester(...input);
        else if (role == Role.Designer) return new Designer(...input);
        else throw new Error("Type not found");
    }
}

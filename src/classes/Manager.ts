import Employee from "./Employee";
import { ICalcSalary } from "../interfaces/ICalcSalary";

export default class Manager extends Employee implements ICalcSalary {
    override info(): void {
        console.log("\n\nThis is a manager");
        super.info();
    }

    calcSalary(): number {
        return super.salary();
    }
}

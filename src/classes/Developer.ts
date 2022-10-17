import Employee from "./Employee";
import { ICalcSalary } from "../interfaces/ICalcSalary";

export default class Developer extends Employee implements ICalcSalary {
    override info(): void {
        console.log("This is a developer");
        super.info();
    }

    calcSalary(): number {
        return super.salary();
    }
}

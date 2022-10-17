import Employee from "./Employee";
import { ICalcSalary } from "../interfaces/ICalcSalary";

export default class Designer extends Employee implements ICalcSalary {
    override info(): void {
        console.log("This is a designer");
        super.info();
    }

    calcSalary(): number {
        return super.salary();
    }
}

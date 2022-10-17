import Employee from "./Employee";
import { ICalcSalary } from "../interfaces/ICalcSalary";
export default class Tester extends Employee implements ICalcSalary {
    override info(): void {
        console.log("This is a tester");
        super.info();
    }

    calcSalary(): number {
        return super.salary();
    }
}

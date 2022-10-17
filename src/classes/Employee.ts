import Const from "../utils/constant";

export default abstract class Employee {
    constructor(
        protected _code: string,
        protected _name: string,
        protected _baseSalary: number,
        protected _level: number,
        protected _onboardDate: Date
    ) {}
    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get baseSalary(): number {
        return this._baseSalary;
    }

    set baseSalary(value: number) {
        this._baseSalary = value;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }

    get onboardDate(): Date {
        return this._onboardDate;
    }

    set onboardDate(value: Date) {
        this._onboardDate = value;
    }

    salary(): number {
        let workingDate =
            Math.floor(
                (Date.now() - this._onboardDate.getTime()) /
                    Const.millisecondsPerDay()
            ) + 1;
        return this._baseSalary * workingDate + this._level;
    }

    info(): void {
        console.log(
            `Code: ${this._code} \nName: ${this._name} \nBase salary: ${this._baseSalary} \nLevel: ${this._level} \nOnboard day: ${this._onboardDate}\n`
        );
    }
}

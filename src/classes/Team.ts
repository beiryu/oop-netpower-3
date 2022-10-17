import Employee from "./Employee";

export default class Team {
    constructor(
        private _leader: Employee,
        private _employees: Employee[] = []
    ) {}

    get leader(): Employee {
        return this._leader;
    }

    set leader(value: Employee) {
        this._leader = value;
    }

    get employees(): Employee[] {
        return this._employees;
    }

    set employees(value: Employee[]) {
        this._employees = value;
    }

    addMember(member: Employee) {
        this._employees.push(member);
    }

    removeMember(code: string) {
        this._employees = this._employees.filter((e) => e.code != code);
    }

    showEmployee() {
        this._employees.forEach((e) => e.info());
    }

    isFullPosition(): boolean {
        return (
            [new Set(...this._employees.map((e) => e.constructor.name))]
                .length == 3
        );
    }

    totalSalary(): number {
        return (
            this._leader.salary() +
            this._employees
                .map((e) => e.salary())
                .reduce((acc, next) => acc + next, 0)
        );
    }

    sumOfEmployeesInTeam(): number {
        return this._employees.length + 1;
    }

    infoOfEmployeesInTeam(): void {
        this._leader.info();
        this.showEmployee();
    }
}

import Team from "./Team";

export default class Company {
    private static _onlyInstance: Company;

    private _teams: Team[] = [];

    private constructor() {}

    static getInstance(): Company {
        return this._onlyInstance ? this._onlyInstance : new Company();
    }

    get teams(): Team[] {
        return this._teams;
    }

    set teams(value: Team[]) {
        this._teams = value;
    }

    addTeam(team: Team) {
        this._teams.push(team);
    }

    selectTeamByManagerCode(code: string): Team | undefined {
        return this._teams.find((t) => t.leader.code == code);
    }

    totalSalary(): number {
        return this._teams
            .map((t) => t.totalSalary())
            .reduce((acc, val) => acc + val, 0);
    }

    sumOfEmployees(): number {
        return this._teams
            .map((t) => t.sumOfEmployeesInTeam())
            .reduce((acc, val) => acc + val, 0);
    }

    infoOfEmployees(): void {
        this._teams.forEach((t) => t.infoOfEmployeesInTeam());
    }

    largestEmployeesOneTeam(): number {
        return Math.max(...this._teams.map((t) => t.employees.length));
    }

    teamLackOfPosition() {
        return this._teams.filter(
            (t) => !t.isFullPosition() && console.log(`\n${t.leader.name}`)
        );
    }

    crowdedTeam() {
        const maxSize = this.largestEmployeesOneTeam();
        this._teams.forEach(
            (t) =>
                t.employees.length == maxSize &&
                console.log(`\n${t.leader.name}`)
        );
    }

    showTeam() {
        this._teams.forEach((t) =>
            console.log(
                `Manager code: ${t.leader.code} \nName: ${t.leader.name} \nNumber of employees: ${t.employees.length}`
            )
        );
    }
}

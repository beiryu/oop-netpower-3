"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Company {
    constructor() {
        this._teams = [];
    }
    static getInstance() {
        return this._onlyInstance ? this._onlyInstance : new Company();
    }
    get teams() {
        return this._teams;
    }
    set teams(value) {
        this._teams = value;
    }
    addTeam(team) {
        this._teams.push(team);
    }
    selectTeamByManagerCode(code) {
        return this._teams.find((t) => t.leader.code == code);
    }
    totalSalary() {
        return this._teams
            .map((t) => t.totalSalary())
            .reduce((acc, val) => acc + val, 0);
    }
    sumOfEmployees() {
        return this._teams
            .map((t) => t.sumOfEmployeesInTeam())
            .reduce((acc, val) => acc + val, 0);
    }
    infoOfEmployees() {
        this._teams.forEach((t) => t.infoOfEmployeesInTeam());
    }
    largestEmployeesOneTeam() {
        return Math.max(...this._teams.map((t) => t.employees.length));
    }
    teamLackOfPosition() {
        return this._teams.filter((t) => !t.isFullPosition() && console.log(`\n${t.leader.name}`));
    }
    crowdedTeam() {
        const maxSize = this.largestEmployeesOneTeam();
        this._teams.forEach((t) => t.employees.length == maxSize &&
            console.log(`\n${t.leader.name}`));
    }
    showTeam() {
        this._teams.forEach((t) => console.log(`Manager code: ${t.leader.code} \nName: ${t.leader.name} \nNumber of employees: ${t.employees.length}`));
    }
}
exports.default = Company;

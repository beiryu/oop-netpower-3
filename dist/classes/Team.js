"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Team {
    constructor(_leader, _employees = []) {
        this._leader = _leader;
        this._employees = _employees;
    }
    get leader() {
        return this._leader;
    }
    set leader(value) {
        this._leader = value;
    }
    get employees() {
        return this._employees;
    }
    set employees(value) {
        this._employees = value;
    }
    addMember(member) {
        this._employees.push(member);
    }
    removeMember(code) {
        this._employees = this._employees.filter((e) => e.code != code);
    }
    showEmployee() {
        this._employees.forEach((e) => e.info());
    }
    isFullPosition() {
        return ([new Set(...this._employees.map((e) => e.constructor.name))]
            .length == 3);
    }
    totalSalary() {
        return (this._leader.salary() +
            this._employees
                .map((e) => e.salary())
                .reduce((acc, next) => acc + next, 0));
    }
    sumOfEmployeesInTeam() {
        return this._employees.length + 1;
    }
    infoOfEmployeesInTeam() {
        this._leader.info();
        this.showEmployee();
    }
}
exports.default = Team;

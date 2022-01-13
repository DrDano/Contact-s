const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);

        this.officeNumber = /*get name of school*/"";
    }

    getRole() {
        return 'Manager';
    }

}
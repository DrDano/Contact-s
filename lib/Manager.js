const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);

        this.officeNumber;
    }

    OfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }

}

module.exports = Manager;

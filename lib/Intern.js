const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);

        this.school = /*get name of school*/"";
    }

    getSchool() {

    }

    getRole() {
        return 'Intern';
    }

}

module.exports = Intern;
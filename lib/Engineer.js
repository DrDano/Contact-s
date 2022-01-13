const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);

        this.github = /*get github username*/"";
    }

    getGithub() {

    }

    getRole() {
        return 'Engineer';
    }

}
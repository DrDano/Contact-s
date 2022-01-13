const inquirer = require("inquirer");

class Employee {
    constructor(name) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        inquirer.prompt({
            type: 'text'
        })
    }

    getId() {

    }

    getEmail() {

    }

    getRole(role) {
        if (!role) {
            return 'Employee'
        } else if (role) {
            
        }
    }
}
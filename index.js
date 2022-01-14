const employee = require('./lib/Employee')
const manager = require('./lib/Manager')
const engineer = require('./lib/Engineer')
const intern = require('./lib/Intern')
const prompt = require('./utils/promptUser')

class buildEmployee {
    constructor(role) {
        this.role = role;
        this.name
        this.id
        this.email
        this.officeNumber
        this.github
        this.school
    }

    buildManager() {
        const managerInstance = new manager;
        const prompter = new prompt;

        prompter.promptName("manager")
        .then(result => {this.name = result})

        prompter.promptId("manager")
    }
}

const employee1 = new buildEmployee().buildManager();
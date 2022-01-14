const employee = require('./lib/Employee')
const manager = require('./lib/Manager')
const engineer = require('./lib/Engineer')
const intern = require('./lib/Intern')
const prompt = require('./utils/promptUser')

class buildEmployee {
    constructor(role) {
        this.role = role;
        this.prompter = new prompt
        this.manager;
        this.engineer;
        this.intern;

        this.name;
        this.id;
        this.email;
        this.officeNumber;
        this.github;
        this.school;
    }

    buildTeam(role) {
        this.prompter.promptName(role)
        .then(name => {
            this.manager = new manager(name)
            this.prompter.promptId(role).then(id => {
                this.manager()
            })
        })

    }
}

const employee1 = new buildEmployee().buildTeam("manager");
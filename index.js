const employee = require('./lib/Employee')
const manager = require('./lib/Manager')
const engineer = require('./lib/Engineer')
const intern = require('./lib/Intern')
const prompt = require('./utils/promptUser')



class buildEmployee {
    constructor() {
        this.role;
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

    buildTeamMember() {
        this.prompter.promptRole()
        .then(res => {
            this.role = res.role;
            return this.prompter.promptName(this.role)
        })
        .then(res => {
            this.name = res.name;
            return this.prompter.promptId(this.role)
            })
        .then(res => {
            this.id = res.id;
            return this.prompter.promptEmail(this.role)
        })
        .then(res => {
            this.email = res.email;
            if (this.role === 'manager') {
                return [this.prompter.promptOfficeNum(this.role), 'manager']
            } else if (this.role === 'engineer') {
                return [this.prompter.promptGithub(this.role), 'engineer']
            } else {
                return [this.prompter.promptSchool(this.role), 'intern']
            }
        })
        .then(res => {
            if (res[1] === 'manager') {
                this.officeNumber = res.officeNumber;
                this.manager = new manager(this.name, this.id, this.email, this.officeNumber)
                return 'manager'
            } else if (res[1] === 'engineer') {
                this.github = res.github;
                return 'engineer'
            } else {
                this.school = res.school;
                return 'intern'
            }
        })
        

    }
}

const employee1 = new buildEmployee().buildTeamMember();
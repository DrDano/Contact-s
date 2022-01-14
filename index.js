const employee = require('./lib/Employee')
const manager = require('./lib/Manager')
const engineer = require('./lib/Engineer')
const intern = require('./lib/Intern')
const prompt = require('./utils/promptUser')
const fs = require('fs')



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
                return this.prompter.promptOfficeNum(this.role)
            } else if (this.role === 'engineer') {
                return this.prompter.promptGithub(this.role)
            } else {
                return this.prompter.promptSchool(this.role)
            }
        })
        .then(res => {
            if (res.officeNumber) {
                this.officeNumber = res.officeNumber;
                this.manager = new manager(this.name, this.id, this.email, this.officeNumber)
                return this.prompter.promptAddAnotherEmployee()
                
            } else if (res.github) {
                this.github = res.github;
                this.engineer = new engineer(this.name, this.id, this.email, this.github)
                return this.prompter.promptAddAnotherEmployee()
            } else {
                this.school = res.school;
                this.intern = new intern(this.name, this.id, this.email, this.school)
                return this.prompter.promptAddAnotherEmployee()
            }
        })
        .then(res => {
            this.createEmployeeCard();
            if (res.addConfirm) {
                this.buildTeamMember()
            }
        })
        .then(res => {
            this.createHTMLFile(res)
        })
    }

    createEmployeeCard() {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <h6 class="card-title">${this.role}</h6>
                <p class="card-text">ID: ${this.id}</p>
                <a href="mailto:${this.email}">${this.email}</a>
                <p class="card-text">${this.officeNumber, this.github, this.school}</p>
            </div>
        </div>
    `;
    }

    createHTMLFile(html) {
        fs.writeFile("./employees.html", html, (err) => {
            console.log(err);
        })
    }
}

const employee1 = new buildEmployee().buildTeamMember();
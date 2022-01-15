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

        this.html;
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
            return [this.createEmployeeCard(), res.addConfirm]
        })
        .then(res => {
            if (res[1]) {
                return this.buildTeamMember();
            } else {
                return this.writeToFile('./dist/employees.html', this.buildFile())
            }
        })
    }

    special() {
        if (this.github) {
            return this.github
        } else if (this.officeNumber) {
            return this.officeNumber
        }
        return this.school
    }

    createEmployeeCard() {

        this.html += 
        `
        <div class="card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <h6 class="card-title">${this.role}</h6>
                <p class="card-text">ID: ${this.id}</p>
                <a href="mailto:${this.email}">${this.email}</a>
                <p class="card-text">${this.special()}</p>
            </div>
        </div>

        `;
    }

    buildFile() {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
        />
        <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="../src/style.css">
        <title>Document</title>
        </head>
        <header id="header">My Team</header>
        <body>
        <div class="container">
        ${this.html}
        </div>
        </body>
        </html>
        
        `;
    }

    writeToFile(fileName, data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(fileName, data, err => {
                if (err) {
                    reject(err);
                    return;
                }
    
                resolve({
                    ok: true,
                    message: 'File created successfully!'
                });
            });
        });
    };
}

new buildEmployee().buildTeamMember();
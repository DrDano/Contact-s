const inquirer = require('inquirer')

class Prompt {

    promptRole() {
        return inquirer.prompt(
            {
                type: "list",
                name: "role",
                message: `What is the employee's role?`,
                choices: ['manager', 'engineer', 'intern']
            }
        )
    }

    promptName(role) {
        return inquirer.prompt(
            {
                type: "text",
                name: "name",
                message: `What is the ${role}'s name?`,
                validate: (input) => {
                    if (!input) {
                        console.log(`Please provide the person's name.`)
                        return false;
                    }
                    return true;
                }
            }
        )
    }

    promptId(role) {
        return inquirer.prompt(
            {
            type: "number",
            name: "id",
            message: `What is the ${role}'s employee id?`,
            validate: (input) => {
                if (!input) {
                    console.log("Please provide an id.")
                    return false;
                }
                return true;
                }
            }
        )
    }

    promptEmail(role) {
        return inquirer.prompt(
            {
                type: "input",
                name: "email",
                message: `What is the ${role}'s email address?`,
                validate: (email) => {
                    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        
                    if (valid) {
                        return true;
                    } else {
                        console.log("_  Please provide a valid email.")
                        return false;
                    }
                }
            }
        )
    }

    promptOfficeNum(role) {
        return inquirer.prompt(
            {
                type: "number",
                name: "officeNumber",
                message: `What is the ${role}'s office number?`,
                validate: (input) => {
                    if (!input) {
                        console.log("Please provide a phone number")
                        return false;
                    }
                    return true;
                }
            }
        )
    }

    promptGithub(role) {
        return inquirer.prompt(
            {
                type: "text",
                name: "github",
                message: `What is the ${role}'s Github username?`,
                validate: (input) => {
                    if (!input) {
                        console.log(`Please provide a username.`)
                        return false;
                    }
                    return true;
                }
            }
        )
    }

    promptSchool(role) {
        return inquirer.prompt(
            {
                type: "text",
                name: "school",
                message: `What is the ${role}'s school?`,
                validate: (input) => {
                    if (!input) {
                        console.log(`Please provide a school.`)
                        return false;
                    }
                    return true;
                }
            }
        )
    }

    promptAddAnotherEmployee() {
        return inquirer.prompt(
            {
                type: "confirm",
                name: "addConfirm",
                message: `Would you like to add another employee to your team?`,
            }
        )
    }


}

module.exports = Prompt;
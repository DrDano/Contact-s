const inquirer = require('inquirer')

class Prompt {

    getEmployeeInfo(role) {
        return inquirer.prompt([
            {
                type: "text",
                name: "name",
                message: `What is the ${role}'s name?`,
                validate: (input) => {
                    if (!input) {
                        console.log(`Please provide the ${role}'s name.`)
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "id",
                message: `What is your ${role}'s employee id?`,
                validate: (input) => {
                    if (!input) {
                        console.log("Please provide an id.")
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "email",
                message: `What is your ${role}'s email address?`,
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
        ])
    }

    getEngineerName() {
        return inquirer.prompt(
            {
                type: "text",

            }
        )
    }
}

module.exports = Prompt;
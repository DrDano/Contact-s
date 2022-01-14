const inquirer = require('inquirer')

class Prompt {

    promptName() {
        return inquirer.prompt(
            {
                type: "text",
                name: "name",
                message: `What is the person's name?`,
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

    promptId() {
        return inquirer.prompt(
            {
            type: "number",
            name: "id",
            message: `What is the person's employee id?`,
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

    promptEmail() {
        return inquirer.prompt(
            {
                type: "input",
                name: "email",
                message: `What is the person's email address?`,
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

    promptOfficeNum() {
        return inquirer.prompt(
            {
                type: "number",
                name: "officeNumber",
                message: "What is the office number?",
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

    
}

module.exports = Prompt;
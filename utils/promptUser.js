const inquirer = require('inquirer')

class Prompt {

    getManagerName() {
        return inquirer.prompt(
            {
                type: "text",
                name: "name",
                message: "What is your team manager's name?",
                validate: (input) => {
                    if (!input) {
                        console.log("Please select a team manager.")
                        return false;
                    }
                    return true;
                }
            }
        )
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
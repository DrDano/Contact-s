const manager = require('./lib/Manager')
const engineer = require('./lib/Engineer')
const intern = require('./lib/Intern')
const prompt = require('./utils/promptUser')

function runProgram() {
    new prompt().getEmployeeInfo("Manager")
    .then(result => console.log(result))
}

runProgram()
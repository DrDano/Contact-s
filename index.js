const Employee = require('./lib/Employee')
const prompt = require('./utils/promptUser')

function runProgram() {
    new prompt().getManagerName()
    .then(result => console.log(result))
}

runProgram();
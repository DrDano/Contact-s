const employee = require('./lib/Employee')
const manager = require('./lib/Manager')
const engineer = require('./lib/Engineer')
const intern = require('./lib/Intern')
const prompt = require('./utils/promptUser')

let initializeApp = new Promise(function(resolve, reject){
    const employeeInstance = new employee()
    employeeInstance.getEmployeeInfo()
})


initializeApp().then(result => console.log(result));
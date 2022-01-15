const Employee = require('../lib/Employee');

describe('Employee Tests', () => {
    test('creates an employee object', () => {
        const employee = new Employee('Russ Hanneman', 15566, 'russ@gmail.com');

        expect(employee.getEmployeeInfo()).toEqual(
        {"name": "Russ Hanneman", 
        "id": 15566, 
        "email": "russ@gmail.com"});
        expect(employee.getRole()).toEqual('Employee');  
    })
});


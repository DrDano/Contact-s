const Employee = require('../lib/Employee');

describe('Employee Tests', () => {
    test('creates an employee object', () => {
        const employee = new Employee('Russ Hanneman', 15566, 'russ@gmail.com');

        expect(employee.getName()).toBe('Russ Hanneman');
        expect(employee.getId()).toEqual(expect.any(Number));
        expect(employee.getEmail()).toEqual(expect.any(String));
        expect(employee.getRole()).toEqual('Employee');  
    })
});


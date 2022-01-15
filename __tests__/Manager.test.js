const Manager = require('../lib/Manager');

describe('Manager Tests', () => {
    test('creates a Manager object', () => {
        const manager = new Manager("Russ Hanneman", 1234, "russ@gmail.com", 5036557887);

        expect(manager.name).toBe('Russ Hanneman');
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(expect.any(String));
        expect(manager.getRole()).toEqual('Manager');  
    })
});
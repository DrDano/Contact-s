const Manager = require('../lib/Manager');

describe('Manager Tests', () => {
    test('creates a Manager object', () => {
        const manager = new Manager(5208966644);

        expect(manager.getName()).toBe('Russ Hanneman');
        expect(manager.getId()).toEqual(expect.any(Number));
        expect(manager.getEmail()).toEqual(expect.any(String));
        expect(manager.getRole()).toEqual('Manager');  
    })
});
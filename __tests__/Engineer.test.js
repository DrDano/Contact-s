const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

describe('Engineer Tests', () => {
    test('creates an Engineer object', () => {
        const engineer = new Engineer('Russ Hanneman', 15566, 'russ@gmail.com', 'TresCommas');

        expect(engineer.name).toEqual('Russ Hanneman');
        expect(engineer.getRole()).toEqual('Engineer');  
        expect(engineer.getGithub()).toEqual('TresCommas')
    })
});
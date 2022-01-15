const Intern = require('../lib/Intern');

describe('Intern Tests', () => {
    test('creates an Intern object', () => {
        const intern = new Intern('Russ Hanneman', 15566, 'russ@gmail.com', 'Grand Canyon University'); 

        expect(intern.name).toEqual('Russ Hanneman');
        expect(intern.getRole()).toEqual('intern');  
        expect(intern.getSchool()).toEqual('Grand Canyon University')
    })
});

class Employee {

    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getEmployeeInfo() {
       return {"name": this.name, 
       "id": this.id, 
       "email": this.email}
    }

    getRole(role) {
        if (!role) {
            return 'Employee'
        }
        return this.role;
    }
}

module.exports = Employee;

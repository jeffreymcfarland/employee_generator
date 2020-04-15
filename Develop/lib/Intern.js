// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require ("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        
        super(name, id, email);
        
        this.school = school;

    };

    getRole() {
        const role = "Intern";
        console.log(role);
        return role;
    };

    getSchool() {
        const school = this.school;
        console.log(`Intern's school is ${school}`);
        return school;
    };
};

module.exports = Intern;
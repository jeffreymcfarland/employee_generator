
const Employee = require ("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getRole() {
        const role = "Manager";
        return role;
    };

    getOfficeNumber() {
        const officeNumber = this.officeNumber;
        console.log(`Manager office number is ${officeNumber}`);
        return officeNumber;
    }
};

module.exports = Manager;
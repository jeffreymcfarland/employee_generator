
const Employee = require ("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getRole() {
        const role = "Engineer";
        return role;
    };

    getGithub() {
        return this.github;
    };
};

const e = new Engineer("Alice", 100, "test@email.com", "jeff");
e.getGithub();

module.exports = Engineer;
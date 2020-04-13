// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require ("./Employee");

class Engineer extends Employee {
    constructor (GitHubUser) {
        super(name, id, email);
        this.GitHubUser = GitHubUser;
    };

    getRole() {
        const role = "Engineer";
        return role;
    }''

    getGithub() {
        const GitHubUser = this.GitHubUser;
        console.log(`github username is ${GitHubUser}`);
    };
};

module.exports = Engineer;
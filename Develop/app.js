const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const teamArray = [

]

const baseQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their id number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email?"
    },
    {
        type: "list",
        name: "role",
        message: "What is the role of this employee?",
        choices: ["Manager", "Engineer", "Intern"]
    }
];

basePrompt = () => {
inquirer.prompt(baseQuestions).then(answers => {

    const name = answers.name;
    const id = answers.id;
    const email = answers.email;
    const role = answers.role;
    let roleInfo = "";

        if (answers.role === "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "phone",
                    message: "What is their office phone number?"
                },
                {
                    type: "confirm",
                    name: "confirm",
                    message: "Do you need to add another employee's information?"
                }
            ]).then(answers => {

                roleInfo = answers.phone;

                // console.log(`${name}, ${id}, ${email}, ${role}, ${roleInfo}`);

                const newEmpl = {
                    name: name,
                    role: role,
                    id: id,
                    email: email,
                    roleInfo: roleInfo
                };

                teamArray.push(newEmpl);

                if (answers.confirm === true) {
                    basePrompt();
                } else {
                    console.log(teamArray);
                };

            }).catch(error => {
                if(error.isTtyError) {
                  console.log("error")
                };
              });
        } else if (answers.role === "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "What is their github username?"
                },
                {
                    type: "confirm",
                    name: "confirm",
                    message: "Do you need to add another employee's information?"
                }
            ]).then(answers => {

                roleInfo = answers.github;

                // console.log(`${name}, ${id}, ${email}, ${role}, ${roleInfo}`);

                const newEmpl = {
                    name: name,
                    role: role,
                    id: id,
                    email: email,
                    roleInfo: roleInfo
                };

                teamArray.push(newEmpl);

                if (answers.confirm === true) {
                    basePrompt();
                } else {
                    console.log(teamArray);
                };

            }).catch(error => {
                if(error.isTtyError) {
                  console.log("error")
                };
              });
        } else if (answers.role === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "What school do they attend?"
                },
                {
                    type: "confirm",
                    name: "confirm",
                    message: "Do you need to add another employee's information?"
                }
            ]).then(answers => {

                roleInfo = answers.school;

                // console.log(`${name}, ${id}, ${email}, ${role}, ${roleInfo}`);

                const newEmpl = {
                    name: name,
                    role: role,
                    id: id,
                    email: email,
                    roleInfo: roleInfo
                };

                teamArray.push(newEmpl);

                if (answers.confirm === true) {
                    basePrompt();
                } else {
                    console.log(teamArray);
                };

            }).catch(error => {
                if(error.isTtyError) {
                  console.log("error")
                };
              });
        } else {
            console.log("error");
        }

}).catch(error => {
    if(error.isTtyError) {
      console.log("error")
    };
  });

};

basePrompt();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

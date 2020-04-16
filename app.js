const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Empty array for dynamically created employee objects to be used for render team.html
const employees = [

]

// Questions for inquirer prompt to get basic information for employee
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

// Function for initiating inqiurer prompt 
// Question about employee role will initiate another set of questions specific to the role
basePrompt = () => {
inquirer.prompt(baseQuestions).then(answers => {

    const name = answers.name;
    const id = answers.id;
    const email = answers.email;
    const role = answers.role;

        // Next prompt about manager role specifics and inquirer to see if more employees need to be added
        if (role === "Manager") {
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

                const officeNumber = answers.phone;

                // Answers will be put into new Manager class and pushed into employees array
                const employee = new Manager(name, id, email, officeNumber);

                employees.push(employee);

                if (answers.confirm === true) {
                // Function intitiated if another employee needs to be added
                    basePrompt();
                } else {
                // If no more employees are added, initiate render function with employees array as the parameter
                // Set returned value to const team
                    const team = render(employees);

                // Write new team.html file with data from render function and put into output folder
                    fs.writeFileSync(outputPath, team, (err) => {
                        if (err) throw err;
                        console.log('The file has been saved!');
                    });
                };

            }).catch(error => {
                if(error.isTtyError) {
                  console.log("error")
                };
              });
        // Next prompt about engineer role specifics and inquirer to see if more employees need to be added
        } else if (role === "Engineer") {
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

                const github = answers.github;

                // Answers will be put into new Engineer class and pushed into employees array
                const employee = new Engineer(name, id, email, github);

                employees.push(employee);

                if (answers.confirm === true) {
                // Function intitiated if another employee needs to be added
                    basePrompt();
                } else {
                // If no more employees are added, initiate render function with employees array as the parameter
                // Set returned value to const team
                    const team = render(employees);

                // Write new team.html file with data from render function and put into output folder    
                    fs.writeFileSync(outputPath, team, (err) => {
                        if (err) throw err;
                        console.log('The file has been saved!');
                    });
                };

            }).catch(error => {
                if(error.isTtyError) {
                  console.log("error")
                };
              });
        // Next prompt about engineer role specifics and inquirer to see if more employees need to be added
        } else if (role === "Intern") {
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

                const school = answers.school;

                // Answers will be put into new Intern class and pushed into employees array
                const employee = new Intern(name, id, email, school);

                employees.push(employee);

                if (answers.confirm === true) {
                // Function intitiated if another employee needs to be added
                    basePrompt();
                } else {
                // If no more employees are added, initiate render function with employees array as the parameter
                // Set returned value to const team
                    const team = render(employees);

                // Write new team.html file with data from render function and put into output folder
                    fs.writeFileSync(outputPath, team, (err) => {
                        if (err) throw err;
                        console.log('The file has been saved!');
                    });
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

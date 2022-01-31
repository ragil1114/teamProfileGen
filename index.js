const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateTeam = require("./src/pagetemplate");
const teamMembers = [];

function appMenu() {
    function createManager() {
        console.log("Creating Manager");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?",
                validate: function (value) {
                    if (value === "") {
                        return "Please enter a valid name";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your manager's id?",
                validate: function (value) {
                    if (value === "") {
                        return "Please enter a valid id";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email?",
                validate: function (value) {
                    if (value === "") {
                        return "Please enter a valid email";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is your manager's office number?",
                validate: function (value) {
                    if (value === "") {
                        return "Please enter a valid office number";
                    }
                    return true;
                }
            },

        ])
        .then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            console.log(teamMembers);
            createTeam();
        })
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "teamMember",
                message: "What type of team member would you like to add?",
                choices: ["Engineer", "Intern", "Quit"]
            },
        ])
        .then((answers) => {
            switch (answers.teamMember) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                case "Quit":
                    endTeamCreation();
                    break;
            }
        })
    }
    
    function createIntern() {
        console.log("Creating Intern");
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?",
                validate: function (value) {
                    if (value === "") {
                        return "Please enter a valid name";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is your intern's id?",
                validate: function (value) {
                    if (value === "") {
                        return "Please enter a valid id";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email?",
                validate: function (value) {
                    if (value === "") {
                        return "Please enter a valid email";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school did the intern attend?",
                validate: function (value) {
                    if (value === "") {
                        return "Please enter a valid school";
                    }
                    return true;
                }
            },

        ])
        .then((answers) => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            console.log(teamMembers);
            createTeam();
        })
    }
    
    function createEngineer() {
        console.log("Creating Engineer");
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
                validate: function (value) {
                    if (value === "") {
                        return "Please enter a valid name";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer's id?",
                validate: function (value) {
                    if (value === "") {
                        return "Please enter a valid id";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?",
                validate: function (value) {
                    if (value === "") {
                        return "Please enter a valid email";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer's github username?",
                validate: function (value) {
                    if (value === "") {
                        return "Please enter a valid username";
                    }
                    return true;
                }
            },

        ])
        .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            console.log(teamMembers);
            createTeam();
        })
    }
    
    function endTeamCreation() {
        console.log("Ending Team Creation");
        console.log(teamMembers);
        const html = generateTeam(teamMembers);
        fs.writeFile(path.join(__dirname, "dist", "team.html"), html, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });
    }
    createManager();
}

appMenu();
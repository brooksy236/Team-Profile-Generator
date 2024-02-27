const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");
let team = []

// TODO: Write Code to gather information about the development team members, and render the HTML file.

function managerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter the team manager\'s name:',
            name: 'manager',
            validate: function(value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter your name';
                }
            }
        },
        {
            type: 'input',
            message: 'Please enter the team manager\'s employee id:',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Please enter the team manager\'s email address:',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please enter the team manager\'s office number:',
            name: 'officeNumber'
        }
    ]).then((data) => {
        const manager = new Manager(data.manager, data.id, data.email, data.officeNumber)
        team.push(manager)
        console.log(team)
        mainMenu();
})
}

function mainMenu() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to:',
            name: 'menu1',
            choices: [  {name: 'Add an engineer', value: 'engineer'}, 
            {name: 'Add an intern', value: 'intern'}, 
            {name: 'Finish building the team', value: 'finish'}
            ]
        }
    ]).then((data) => {
        switch (data.menu1) {
            case 'engineer':
                engineerQuestions();
                break;
            case 'intern':
                internQuestions();
                break;
            case 'finish':
                renderPage();
                break;
            }
        })
    }

function engineerQuestions() {

    inquirer.prompt([
    {
        type: 'input',
        message: 'Please enter the engineer\'s name?',
        name: 'engineerName',
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return 'Please enter your name';
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter the engineer\'s ID?',
        name: 'engineerId'
    },
    {
        type: 'input',
        message: 'Please enter the engineer\'s email address?',
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: 'Please enter the engineer\'s GitHub username?',
        name: 'engineerGithub'
    }
]).then((data) => {
    let engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
    team.push(engineer);
    console.log(team);
    mainMenu();
 });
}
function internQuestions() {
    inquirer.prompt([
    {
        type: 'input',
        message: 'Please enter the intern\'s name?',
        name: 'internName',
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return 'Please enter your name';
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter the intern\'s ID?',
        name: 'internId'
    },
    {
        type: 'input',
        message: 'Please enter the intern\'s email address?',
        name: 'internEmail'
    },
    {
        type: 'input',
        message: 'Please enter the intern\'s School name?',
        name: 'internSchool',
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return 'Please enter your name';
            }
        }
    }
]).then((data) => {
    let intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
    team.push(intern)
    console.log(team)
    mainMenu();
 });
}

function renderPage(team) {
    fs.writeFileSync(outputPath, team, "utf-8")
}

managerQuestions();


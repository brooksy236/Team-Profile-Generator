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


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const managerQuestions = [
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
    ]


const menuOptions = [
    {
        type: 'list',
        message: 'Would you like to:',
        name: 'menu1',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'Please enter the engineer\'s name?',
        name: 'engineerName'
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
]

const internQuestions = [
    {
        type: 'input',
        message: 'Please enter the intern\'s name?',
        name: 'internName'
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
        name: 'internSchool'
    }
]

 function main() {
    let team = []

    inquirer.prompt(managerQuestions).then((answers) => {
        team.push(answers)
        console.log(team)
         inquirer.prompt(menuOptions).then((answers) => {

             if (answers.menu1 === 'Add an engineer') {
                 inquirer.prompt(engineerQuestions).then((answers) => {
                    team.push(answers)
                    console.log(team)
                 })
         } else if (answers.menu1 === 'Add an intern') {
             inquirer.prompt(internQuestions).then((answers) => {
                team.push(answers)
                console.log(team)
             })
            } else {
                console.log(`Your ${team} page is being built`)
            }
        })
    })
}

main();
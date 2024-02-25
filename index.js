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

const questions = [
    {
        type: 'input',
        message: 'Please enter the team manager\'s name:',
        name: 'manager'
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
    },
    {
        type: 'option',
        message: 'Please enter the team manager\'s name:',
        name: ''
    }
]
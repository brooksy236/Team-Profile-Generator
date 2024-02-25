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

const employee1 = new Employee("Dave", 111, "dave@mail.com");
const employee2 = new Employee("Cooper", 112, "cooper@mail.com");
const employee3 = new Employee("Bob", 113, "bob@mail.com");


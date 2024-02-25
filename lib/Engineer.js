// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// const { right } = require("inquirer/lib/utils/readline");
// Not sure what the above line is

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {

    }

    getRole() {

    }
}

const engineer1 = new Engineer("Cooper", 112, "cooper@mail.com", "brooksy236")
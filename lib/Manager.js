// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {

    }
}

const manager = new Manager("Dave", 111, "dave@mail.com", '555-1111' );

module.exports = Manager;

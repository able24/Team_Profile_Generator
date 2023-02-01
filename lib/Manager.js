// Importing parent class
const Employee = require("./Employee");

// Creating manager class to inherit from parent class using keywork extends
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // Inheriting parent class properties
        super (name, id, email);

        //Defining property unique to manager class
        this.officeNumber = officeNumber;
    }

    // Defining methods unique to manager class
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
};





module.exports = Manager;


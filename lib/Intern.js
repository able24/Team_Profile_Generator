// Importing parent class
const Employee = require("./Employee");


// Creating a child intern class to inherit from parent employee class
class Intern extends Employee {
    constructor (name, id, email, school) {
        // Inheriting parent's class properties
        super (name, id, email);

        //Defining property unique to intern class
        this.school = school;
    }

    // Defining methods unique to intern class
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;
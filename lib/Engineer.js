// Importing parent class.
const Employee = require("./Employee");

// Defining engineer's class to inherit from employee class using the extends keyword
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // Inheriting properties from the parent employee class
        super (name, id, email);

        // Defining property unique to engineer class
        this.github = github;
    }

    // Defining methods unique to engnieer class
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};


module.exports = Engineer;
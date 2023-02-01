// TODO: Write code to define and export the Employee class
class Employee {
    // Defining future object properties using the constructor function
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

// Defining various required methods for future objects
    getName() {
        return this.name;

    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
};


module.exports = Employee;
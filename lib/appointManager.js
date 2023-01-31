const inquirer = require("inquirer");
const Manager = require("./Manager");

const appointManager = () => {
    return inquirer.prompt ([
        {
            name: 'name',
            message: 'Please enter the name of the manager for this team:', 
            validate: nameEntered => {
                if (nameEntered) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false; 
                }
            }
        },

        {
            name: 'id',
            message: "Please enter the manager's ID:",
            validate: idEntered => {
                if  (isNaN(idEntered)) {
                    console.log ("Please enter the manager's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },

        {
            name: 'email',
            message: "Please enter the manager's email:",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },

        {
            name: 'officeNumber',
            message: "Please enter the manager's office number:",
            validate: numberEntered => {
                if  (isNaN(numberEntered)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerDetails => {
        const  { name, id, email, officeNumber } = managerDetails; 
        const manager = new Manager (name, id, email, officeNumber);

        //teamArray.push(manager); 
        console.log(manager); 
    })
};


module.exports = appointManager;
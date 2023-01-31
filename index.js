const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = [];

const managerDetails = () => {

    console.log(
        `
        ===============================================
        Please give details of the manager of the team!
        ===============================================`
        
    );

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
                if (email) {
                    return true;
                } else {
                    console.log ('Please enter a valid email for the manager!')
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
    .then(details => {
        const manager = new Manager (details.name, details.id, details.email, details.officeNumber);
        teamMembers.push(manager);
        menuPage(); 
        //console.log(manager); 
    })
};




function menuPage() {
    return inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'Who do you want to add to  your team?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
    }).then(data => {
        switch (data.choice) {
            case 'Add an engineer':
                engineerDetails();
                break;
            

            case 'Add an intern':
                internDetails();
                break;
                

            default:
                createTeam();
        }
    })
};


const engineerDetails = () => {

    console.log(
        `
        =================================
        Add a new engeineer to your team!
        =================================`
        
    );

    return inquirer.prompt ([
        {
            name: 'name',
            message: 'Please enter a name for the engineer:', 
            validate: nameEntered => {
                if (nameEntered) {
                    return true;
                } else {
                    console.log ("Please enter the engineer's name!");
                    return false; 
                }
            }
        },

        {
            name: 'id',
            message: "Please enter the engineer's ID:",
            validate: idEntered => {
                if  (isNaN(idEntered)) {
                    console.log ("Please enter the engineer's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },

        {
            name: 'email',
            message: "Please enter the engineer's email:",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ('Please enter a valid email for the engineer!')
                    return false; 
                }
            }
        },

        {
            name: 'github',
            message: "Please enter the engineer's github username:",
            validate: github => {
                if  (github) {
                    return true; 
                } else {
                    console.log ('Please enter a github username!')
                    return false;
                }
            }
        }
    ])
    .then(details => {
        const engineer = new Engineer (details.name, details.id, details.email, details.github);
        teamMembers.push(engineer);
        menuPage(); 
        //console.log(engineer); 
    })
};


const internDetails = () => {

    console.log(
        `
        =================================
        Add a new intern to your team!
        =================================`
        
    );

    return inquirer.prompt ([
        {
            name: 'name',
            message: 'Please enter a name for the intern:', 
            validate: nameEntered => {
                if (nameEntered) {
                    return true;
                } else {
                    console.log ("Please enter the intern's name!");
                    return false; 
                }
            }
        },

        {
            name: 'id',
            message: "Please enter the intern's ID:",
            validate: idEntered => {
                if  (isNaN(idEntered)) {
                    console.log ("Please enter the intern's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },

        {
            name: 'email',
            message: "Please enter the intern's email:",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ('Please enter a valid email for the intern!')
                    return false; 
                }
            }
        },

        {
            name: 'school',
            message: "Please enter the intern's github school:",
            validate: school => {
                if  (school) {
                    return true; 
                } else {
                    console.log ('Please enter a school name!')
                    return false;
                }
            }
        }
    ])
    .then(details => {
        const intern = new Intern (details.name, details.id, details.email, details.school);
        teamMembers.push(intern);
        menuPage(); 
        //console.log(intern); 
    })
};


const createTeam = () => {

    console.log(`
                =====================================
                You have finished building your team!
                =====================================`);

                if (!fs.existsSync(OUTPUT_DIR)) {
                    fs.mkdirSync(OUTPUT_DIR)
                };
                
                fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
};



function init() {
    managerDetails();
}

init();
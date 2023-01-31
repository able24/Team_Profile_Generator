const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const appointManager = require("./lib/appointManager");


const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.



function mainPage() {
    return inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'Please choose your employee status',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
    }).then(data => {
        switch (data.choice) {
            case 'Add an engineer':
                return Engineer()
                .then(mainPage);
            

            case 'Add an intern':
                return Intern()
                .then(mainPage);
                

            case 'Finish building the team':
                console.log('Thanks for using our app!');
                process.exit();
        }
    })
};

function init() {
    return appointManager()
    .then(mainPage);
}

init();
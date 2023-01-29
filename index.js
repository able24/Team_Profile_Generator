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

function mainPage () {
   return inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'Please choose your employee status',
    choices: ['Engineer', 'Intern', 'Exit From Application']
   }).then (data => {
    switch(data.choice) {
        case 'Engineer':
            Engineer();
            break;
        
        case 'Intern':
            Intern();
            break;

        case 'Exit From Application':
            process.exit();
    }
   })
};

function init () {
    mainPage();
}

init();
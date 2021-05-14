// TODO: Include packages needed for this application
const inquirer =  require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is your projects name? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a brief descritption of your project.(required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description about your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please include installation instructions (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please include installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please add usage information. (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please add usage information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please include and contributers.(required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please include and contributers!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name :'test',
            message: 'Please enter test instructions. (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'badge',
            message: 'Please select a license.',
            choices: ['MIT', 'GNU']
        }, 
        {
            type:'input',
            name: 'github',
            message: 'Please enter your GitHub user name.(required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please Enter your GitHub user name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address. (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please Enter your email address!');
                    return false;
                }
            }
        },
    ])
};

questions();
console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile("./demo/"+fileName, data, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log ("Successfully wrote: " + fileName);
    })
    
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
      writeToFile("DemoREADME.md", generatorMarkdown(data));
    })
  }

// Function call to initialize app
init();
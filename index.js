// Packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// List of questions for user input
const promptUser = [
    {   
        type:'input',
        name: 'userName',
        message: 'What is your GitHub user name.',
        type: 'input',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        name: 'title',
        message: "What is your project's name?",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the projects name!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'please write a short description of your project'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Does your project require any installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What do you use this app for?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name :'steps',
        message: 'please provide the steps needed run the app'
    }, 
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [
            'GNU General Public', 
            'MIT',
            'Unlicense',
            'Apache'
        ]
    }, 
];

// Writes README file
function writeToFile(fileName, data) {

    fs.writeFile("./dist/"+fileName, data, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log ("success! " + fileName + " has been created.");
    })
    
}

// Initializes app
function init() {
    inquirer.prompt(promptUser)
    .then(function(data) {
      writeToFile("generatedREADME.md", generateMarkdown(data));
    })
}


init();
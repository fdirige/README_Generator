const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: 'What is the Description for your project?',
            name: 'Description',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: 'What is the installation instructions for your project?',
            name: 'Installation Instructions',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: 'What is the usage information for your project?',
            name: 'Usage Information',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: 'What are the contribution guidlines for your project?',
            name: 'Contribuion Guidelines',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
        },
        {
            type: 'input',
            message: 'What are the test instructions for your project?',
            name: 'Test Instructions',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
        },
        {
            type: 'list',
            message: 'What license did you use for your project?',
            name: 'License',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'Github',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'Email',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
        }
    ]
);

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init () {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating README.md File...");
        writeToFile('README.md', generateMarkdown({ ...responses}));
    });
}
init();
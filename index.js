// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'Title',
    message: 'Enter a name for your project: '
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project: '
  },
  {
    type: 'input',
    name: 'license',
    message: 'Choose a Liscense: ',
    choices: ['MIT', 'Apache 2.0', 'BSD']
  },
  {
    type: 'input',
    name: 'Username',
    message: 'What is your Github username?'
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is your e-mail adress?'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

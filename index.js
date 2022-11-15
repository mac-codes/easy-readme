// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
    type: 'list',
    name: 'licenses',
    message: 'Choose a Liscense: ',
    choices: ['MIT', 'GPL', 'BSD', 'CC--0', 'N/A']
  },
  {
    type: 'input',
    name: 'Username',
    message: 'What is your Github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your e-mail adress?'
  },
];

// TODO: Create a function to write README file
const writeToFile = data => {
  return new Promise((resolve, reject) => {
      // make a readme file and add to dist folder
      fs.writeFile('README.md', data, err => {
          // if there's an error, reject the Promise and send the error to .catch() method
          if (err) {
              reject (err);
              // return out of the function here to make sure the Promise doesn't continut to execute the resolve() function
              return;
          }
          // if everything went well, resolve the Promise and send the successful data to the .then() method
          resolve({
              ok: true,
              message: console.log('Awesome! you just made a professional README file.')
          });
      })
  })
}
// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions);
}
// Function call to initialize app
init()
.then(userInput => {
  return generateMarkdown(userInput);
})
.then(readmeInfo => {
  return writeToFile(readmeInfo);
})
.catch(err => {
  console.log(err);
})
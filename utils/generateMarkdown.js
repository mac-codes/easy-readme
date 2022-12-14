const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  }else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'GPL') {

    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'CC--0') {
    return `https://creativecommons.org/licenses/by-nd/4.0` 
  }
  if (license === 'BSD') {
    return `https://opensource.org/licenses/BSD-3-Clause`
  }
  if (license === 'N/A') {
    return `N'A`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  }else {
    return `## licenses`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Table of Contents
  *[License](#licenses)
  *[Description](#description)
  *[Question](#questions)
  *[Credits](#credits)
  

  ${renderLicenseBadge(data.licenses)}


  ## Description
  ${data.description}

  ## Questions
  Do you have questions about this project?
  contact me!
  Github: https://github.com/${data.Username}
  Email: ${data.email}

  ## Credits
  ${data.name}
`;
}

module.exports = generateMarkdown;

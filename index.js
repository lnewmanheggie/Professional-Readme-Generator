/* THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README */

const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown.js');



inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        default: 'hit enter if this section does not apply'
    },
    {
        type: 'input',
        message: 'Enter your project description:',
        name: 'description',
        default: 'hit enter if this section does not apply'
    },
    {
        type: 'input',
        message: 'Enter the installation instructions for your project',
        name: 'installation',
        default: 'hit enter if this section does not apply'
    },
    {
        type: 'input',
        message: 'What is the usage information for your project?',
        name: 'usage',
        default: 'hit enter if this section does not apply'
    
    },
    {
        type: 'input',
        message: 'Enter the contribution guidelines for your project:',
        name: 'contribution',
        default: 'hit enter if this section does not apply'
    },
    {
        type: 'input',
        message: 'Enter the test instructions for your project',
        name: 'test',
        default: 'hit enter if this section does not apply'
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        choices: ["MIT", "Apache-2.0", "GPL-3.0", "WTFPL"],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your Github username',
        name: 'username',
        default: 'hit enter if this section does not apply'
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
        default: 'hit enter if this section does not apply'
    },
  ])
  .then((response) => {
    const title = response.title;
    const description = response.description;
    const installation = response.installation;
    const usage = response.usage;
    const contribution = response.contribution;
    const test = response.test;
    const license = response.license;
    const username = response.username;
    const email = response.email;

    const data = 
`${markdown.title(response)}
${markdown.description(response)}
${markdown.installation(response)}
${markdown.usage(response)}
${markdown.contribution(response)}
${markdown.test(response)}
${markdown.license(response)}
${markdown.questions(response)}`

    fs.writeFile('README.md', data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
    }
  );


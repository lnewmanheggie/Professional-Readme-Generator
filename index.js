const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown.js');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        default: ''
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
        default: ''
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
        default: ''
    },
  ])
  .then((response) => {
    const data = 
`${markdown.licenseBadge(response)}
${markdown.title(response)}
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


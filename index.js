const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown.js');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
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
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email'
    },
  ])
  .then(({title, description, installation, usage, contribution, test, license, username, email}) => {
    const data = 
`${markdown.licenseBadge(license)}
${markdown.title(title)}
${markdown.description(description)}
${markdown.installation(installation)}
${markdown.usage(usage)}
${markdown.contribution(contribution)}
${markdown.test(test)}
${markdown.license(license)}
${markdown.questions(username, email)}`

    fs.writeFile('README.md', data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
    }
  );


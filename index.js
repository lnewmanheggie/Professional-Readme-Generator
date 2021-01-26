const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown.js');
const questions = require('./questions');

// const promptUser = () => {
//     return inquirer.prompt(questions);
// }

inquirer
  .prompt(questions)
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


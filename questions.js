const questions = [
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
  ]

  module.exports = questions;
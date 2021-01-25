// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
    switch (license) {
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            break;
        case "Apache-2.0":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            break;
        case "GPL-3.0":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            break;
        case "WTFPL":
            return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
            break;
        default:
            return "";
            break;
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
    switch (license) {
        case "MIT":
            return "![MIT](https://opensource.org/licenses/MIT)"
            break;
        case "Apache-2.0":
            return "![Apache-2.0](https://opensource.org/licenses/Apache-2.0)"
            break;
        case "GPL-3.0":
            return "![GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
            break;
        case "WTFPL":
            return "![WTFPL](http://www.wtfpl.net/about/)"
            break;
        default:
            return "";
            break;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// const renderLicenseSection = license => {}

// TODO: Create a function to generate markdown for README
// const generateMarkdown = data => {
//   return `# ${data.title}`
// }

const noInput = "hit enter if this section does not apply"

module.exports = {
    title: (data) => data.title === noInput
        ? "" 
        : `# ${data.title}`,

    description: (data) => data.description === noInput
        ? "" 
        : `## Description\n${data.description}`,
    
    installation: (data) => data.installation === noInput 
        ? "" 
        : `## Description\n${data.installation}`,

    usage: (data) => data.usage === noInput 
        ? "" 
        : `## Description\n${data.usage}`,

    contribution: (data) => data.contribution === noInput 
        ? "" 
        : `## Description\n${data.contribution}`,

    test: (data) => data.test === noInput 
        ? "" 
        : `## Description\n${data.test}`,
    
    license: (data) => data.license === noInput 
        ? "" 
        : `## Description\n${data.license}`,

    licenseBadge: (data) => data.license === noInput 
        ? "" 
        : `## Description\n${data.license}`,
};
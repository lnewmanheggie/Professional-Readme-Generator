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

const renderLicenseLink = license => {
    switch (license) {
        case "MIT":
            return "[MIT](https://opensource.org/licenses/MIT)"
            break;
        case "Apache-2.0":
            return "[Apache-2.0](https://opensource.org/licenses/Apache-2.0)"
            break;
        case "GPL-3.0":
            return "[GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
            break;
        case "WTFPL":
            return "[WTFPL](http://www.wtfpl.net/about/)"
            break;
        default:
            return "";
            break;
    }
}

const noInput = "hit enter if this section does not apply"

module.exports = {
    licenseBadge: (data) => data.license === noInput 
        ? "" 
        : `${renderLicenseBadge(data.license)}`,

    title: (data) => data.title === noInput
        ? "" 
        : `# ${data.title}`,

    description: (data) => data.description === noInput
        ? "" 
        : `## Description\n${data.description}`,
    
    installation: (data) => data.installation === noInput 
        ? "" 
        : `## Installation\n${data.installation}`,

    usage: (data) => data.usage === noInput 
        ? "" 
        : `## Usage\n${data.usage}`,

    contribution: (data) => data.contribution === noInput 
        ? "" 
        : `## Contributing\n${data.contribution}`,

    test: (data) => data.test === noInput 
        ? "" 
        : `## Tests\n${data.test}`,
    
    license: (data) => data.license === noInput 
        ? "" 
        : `## License\nLicensed under the ${renderLicenseLink(data.license)} license.`,

    questions: (data) => `## Questions\nPlease direct questions to [${data.username}](${data.username}) at ${data.email}`

};
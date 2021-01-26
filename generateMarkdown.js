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
    licenseBadge: (license) => license === noInput 
        ? "" 
        : `${renderLicenseBadge(license)}`,

    title: (title) => `# ${title}`,

    description: (description) => description === noInput
        ? "" 
        : `## Description\n${description}`,
    
    installation: (installation) => installation === noInput 
        ? "" 
        : `## Installation\n${installation}`,

    usage: (usage) => usage === noInput 
        ? "" 
        : `## Usage\n${usage}`,

    contribution: (contribution) => contribution === noInput 
        ? "" 
        : `## Contributing\n${contribution}`,

    test: (test) => test === noInput 
        ? "" 
        : `## Tests\n${test}`,
    
    license: (license) => license === noInput 
        ? "" 
        : `## License\nLicensed under the ${renderLicenseLink(license)} license.`,

    questions: (username, email) => `## Questions\nPlease direct questions to [${username}](${username}) at ${email}`
};
const fs = require('fs');

// Returns a license badge based on which license is used
function licenseBadges(data) {
  const selectLicense = data.license[0];
  let thisBadge = " "
  if (selectLicense === 'MIT') {
    thisBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
   if (selectLicense === 'GNU General Public') {
    thisBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  };
  if (selectLicense === 'Apache') {
    thisBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };
  if (selectLicense === 'Unlicense') {
    thisBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  };
  if (selectLicense === ' ') {
    thisBadge = `" "`
  };
 return thisBadge;
};

// Creates the markdown for README
function generateMarkdown(data) {  
  return `# ${data.title}
  
  ${licenseBadges(data)}
  # Description
  ${data.description}

  # GitHub Links
  Live Page: https://${data.userName}.github.io/${data.title}/
  <br>
  Repository: https://github.com/${data.userName}/${data.title}
  
  # Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Steps](#steps)
  * [Contact](#contact)
  
  # Installation
  Please install this before using the app:
  <br>
  ${data.install}
  
  # Usage
  ​${data.usage}
 
  # License
  ${data.license}
  
  # Contributing
  ​Contributors: ${data.contributors}
  
  # Steps
  ${data.steps}
  
  # Contact
  Got questions? contact me! : ${data.email}.
`;
}

module.exports = generateMarkdown;
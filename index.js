/*jshint esversion: 6 */

//Require the inquirer module
const inquirer = require('inquirer');

//Run inquirer module
inquirer
    .prompt([{
        type: "input",
        message: "Enter your Project Title",
        name: "title"
    },
    {
        type: "input",
        message: "Enter description of your Project",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation guide",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter usage information",
        name: "usageInformation"
    },
    {
        type: "input",
        message: "Enter contribution guidelines",
        name: "contribution"
    },
    {
        type: "input",
        message: "Enter test instructions",
        name: "tests"
    },
    {
        type: "list",
        message: "Choose a licence for your project",
        name: "license",
        choices: ["ISC", new inquirer.Separator(), "MIT"]
    },
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "gitHubUserName"
    },
    {
        type: "input",
        message: "Enter your email address",
        name: "emailAddress"
    }
    ])
    .then(function (response) {
        //Require the FS module to create the MD file
        const fs = require("fs");
        //Create the Licence Badge image link
        const licenceBadge = (response.license == "ISC") ?
            "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]" :
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
        //Licence notices sources: http://opensource.org/licenses/ISC and http://opensource.org/licenses/MIT
        const licenceNotice = (response.license == "ISC") ?
            (
                `This software is under the ISC License. Copyright (c) 2020, https://github.com/${response.gitHubUserName} ` +
                `Permission to use, copy, modify, and/or distribute this software for any purpose with or 
            without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.` +
                `THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD 
            TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. 
            IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES 
            OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, 
            NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF 
            THIS SOFTWARE.`) :
            (
                `This software is under the MIT License (MIT)
            Copyright (c) 2020 https://github.com/${response.gitHubUserName}` +
                `Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
            The above copyright notice and this permission notice shall be included in
            all copies or substantial portions of the Software.
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
            THE SOFTWARE.`);
        //Create the file and save the user's inputs
        fs.writeFile(`${response.title}.md`,
            (`## Project Title: ${response.title} ${licenceBadge} \n` +
                `\n## Description: \n${response.description} \n` +
                `\n## Table of Contents \n` +
                `* [Installation](#Installation) \n` +
                `* [Usage Information](#Usage) \n` +
                `* [Contributing](#Contributing) \n` +
                `* [Test Instructions](#Tests) \n` +
                `* [Questions](#Questions) \n` +
                `* [License](#License)  \n` +
                `\n## Installation: \n${response.installation} \n` +
                `\n## Usage: \n${response.usageInformation} \n` +
                `\n## Contributing: \n${response.contribution} \n` +
                `\n## Tests: \n${response.tests} \n` +
                `\n## Questions: \n Please visit my [GitHub Page](https://github.com/${response.gitHubUserName}/)` +
                ` or email me your questions at ${response.emailAddress}. \n` +
                `\nI am available 8am-4pm Monday-Friday (Australian Western Standard Time). \n` +
                `\n## License: \n${licenceNotice} `),
            function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("ReadMe file generated.");
            });
    });
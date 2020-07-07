console.log("Running index.js");
var inquirer = require("inquirer");

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
        }
    ])
    .then(function(response) {
        console.log(response)
        var fs = require("fs");
        fs.writeFile(`${response.title}.md`,
            `* Project Title: ${response.title} \n* Description: ${response.description} \n* Usage Information: ${response.usageInformation} \n* Description: ${response.contribution} \n* Usage Information: ${response.tests}`,
            function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log("Success!");
            });
    });
const inquirer = require('inquirer');
const filesystem = require('./node_modules/graceful-fs/graceful-fs');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Provide the three characters",
        validate: (input) => input.length === 3,
    },
    {
        type: "input",
        name: "textColor",
        message: `Provide a hex color`
    },
    {
        type: "list",
        name: "shape",
        message: "Provide the shape, i.e. triangle, square, or circle",
        choices: ['Triangle', 'Square', 'Circle']
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Provide the hex color for your shape"
    }
];


function logoInput(content) {
    console.clear()

    try {
        if (!fs.existsSync('./output/')) {
            fs.mkdirSync('./output/');
        }
        fs.writeFileSync('./output/README.md', content, 'utf-8');
        console.log("Generated output in 'output' folder as 'README.md'")
    } catch (err) {
        console.error(err);
        console.log("F")
    }
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            let readMeFile = []
            readMeFile.push(`${answers.text}\n`)

            readMeFile.push(`${answers.textColor}\n`)

            readMeFile.push(`${answers.shape}\n`)

            readMeFile.push(`${answers.shapeColor}`)
            logoInput(readMeFile.join(""))
        })
        .catch((error) => {
            console.error(error)
        });
}

// Function call to initialize app
init();

/**
 * 0 - Title
 * 1 - Description
 * 2 - Installtion
 * 3 - Usage
 * 4 - Contribution
 * 5 - Tests
 */

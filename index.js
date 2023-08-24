const Shape = require('./lib/shapes')
const Element = require("./lib/svg");

const fs = require('fs')
const inquirer = require('inquirer');

const questions = [
    {
        type: "text",
        name: "text",
        message: "Provide the title of your logo",
        validate: (answer) => {
            console.clear()
            if (answer.length <= 3) {
                return true
            } else {
                console.clear()
                console.log("Title can only be a maxmium of 3 characters!")
            }
        },
    },
    {
        type: "input",
        name: "textColor",
        message: `Provide a color (hex or display) for the title text`,
        validate: (answer) => {
            console.clear()
            return true
        },
    },
    {
        type: "list",
        name: "shape",
        message: "Select which shape you would like to use for the logo",
        choices: Object.keys(Shape),
        validate: (answer) => {
            console.clear()
            return true
        },
    },
    {
        type: "input",
        name: "shapeColor",
        message: `Provide a color (hex or display) for the shape in the logo`,
        validate: (answer) => {
            console.clear()
            return true
        },
    },
];
function saveOutput(outputSVG, fileName) {

    try {
        if (!fs.existsSync('./outputs/')) {
            fs.mkdirSync('./outputs/');
        }

        fs.writeFile(`./outputs/${fileName ?? `output_${Date.now()}`}.svg`, outputSVG, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully!");
            }
        });
    } catch (err) {
        console.error(err);
    }
}

function renderLogo(textChoice, textColorChoice, shapeChoice, shapeColorChoice, outputFileName) {
    let shape

    switch (shapeChoice) {
        case "Circle":
            shape = new Shape.Circle()
            break
        case "Triangle":
            shape = new Shape.Triangle()
            break
        default:
            shape = new Shape.Square()
            break
    }

    shape.setColor(shapeColorChoice)

    let text = new Element.BrandText()
    text.setText(textChoice)
    text.setColor(textColorChoice)

    let svg = new Element.Svg(shape, text)

    saveOutput(svg.render(), `${textChoice}_${shapeChoice}`)
}

function init() {
    const answers = inquirer.prompt(questions).then(answers => {
        renderLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor)
    })
}

init()

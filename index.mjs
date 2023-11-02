import fs from "fs";
import inquirer from "inquirer";
import { Square, Triangle, Circle } from "./lib/shapes.mjs";

const shapeQuestions = [
  {
    type: "list",
    name: "shapeType",
    message: "Select a shape:",
    choices: ["triangle", "square", "circle"],
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter text color:",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter shape color:",
  },
  {
    type: "input",
    name: "text",
    message: "Enter text (up to 3 characters):",
    validate: (input) => {
      if (input.length <= 3) {
        return true;
      } else {
        return "Please enter up to 3 characters.";
      }
    },
  },
];

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("svg has been successfully generated.");
    }
  });
}

async function promptUserForInput() {
  const answers = await inquirer.prompt(shapeQuestions);
  const { shapeType, textColor, shapeColor, text } = answers;

  let shape;

  switch (shapeType) {
    case "triangle":
      shape = new Triangle(textColor, shapeColor, text);
      break;
    case "square":
      shape = new Square(textColor, shapeColor, text);
      break;
    case "circle":
      shape = new Circle(textColor, shapeColor, text);
      break;
    default:
      console.log(
        "Invalid shape type. Please choose triangle, square, or circle."
      );
      process.exit(1);
  }

  const svgContent = shape.render();
  writeToFile(`./examples/logo.svg`, svgContent);
  console.log("Generated logo.svg");
}

promptUserForInput();

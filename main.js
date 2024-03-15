//Only Modulus Calculator
import inquirer from "inquirer";
import chalk from "chalk";
const input1 = await inquirer.prompt({
    name: "number1",
    type: "number",
    message: "Enter your first number."
});
const input2 = await inquirer.prompt({
    name: "number2",
    type: "number",
    message: "Enter your second number."
});
const result = input1.number1 % input2.number2;
console.log(`${chalk.bgWhite.blue.bold("Your answer is:")} ${chalk.red.bold.italic.bgWhite(result)}`);

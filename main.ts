import { addition } from './addition.js';
import { subtraction } from './subtraction.js';
import { multiplication } from './multiplication.js';
import { division } from './division.js';
import inquirer from "inquirer";

// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);

// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");

let calculator_ascii_art =  `_____________________
|  _________________  |
| |                 | |
| |   7       8     | |
| |                 | |
| |   4       5     | |
| |                 | |
| |   1       2     | |
| |                 | |
| |       0     .   | |
| |_________________| |
|  _________________  |
| |  AC  |  +  |  - | |
| |______|_____|____| |
| |  *   |  /  |  = | |
| |______|_____|____| |
| |  %   |  ^  |  √ | |
| |______|_____|____| |
|_____________________|
 `;
console.log(calculator_ascii_art)
async function main(){
    let should_continue = true
    while(should_continue){
        let question = await inquirer.prompt([
            {
            name: "Number_1",
            type: "number",
            message: "Enter a Number:"
        },
        {
            name: "Number_2",
            type: "number",
            message: "Enter another Number:"
        },
        {
            name: "Operation",
            type: "list",
            message: "Select an Operation:",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        }  
        ]);

        if (question.Operation == "Addition"){
            console.log(addition(question.Number_1, question.Number_2));
        }else if (question.Operation == "Subtraction"){
            console.log(subtraction(question.Number_1, question.Number_2));
        }else if (question.Operation == "Multiplication"){
            console.log(multiplication(question.Number_1, question.Number_2));
        }else{
            console.log(division(question.Number_1, question.Number_2));
        };


        const continue_operation = await inquirer.prompt([{
            name: "operation_more",
            type: "confirm",
            message: "Want to Continue Operations?"
        }])
        
        should_continue = continue_operation.operation_more

    }
}
main()

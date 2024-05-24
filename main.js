#! /usr/bin/env node
import inquirer from "inquirer";
let Balance = 10000;
let pin = 2468;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === pin) {
    console.log("Correct pin!");
    let operationSelect = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select option:",
            choices: ["withdraw", "check balance", "Fast Cash"]
        }
    ]);
    if (operationSelect.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount"
            }
        ]);
        if (amountAns.amount <= Balance) {
            Balance -= amountAns.amount;
            console.log(`your remaining balance is:  ${Balance}`);
        }
        else {
            console.log("You have insufficient balance");
        }
    }
    else if (operationSelect.operation === "check balance") {
        console.log(`Your balance is ${Balance}`);
    }
    else if (operationSelect.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "Select the amount to be withdrawn",
                choices: ["2000", "4000", "8000"]
            }
        ]);
        Balance -= fastCash.fastcash;
        console.log(`You have successfully withdrawn ${fastCash.fastcash}`);
        console.log(`your remaining balance is ${Balance}`);
    }
}
else {
    console.log("Incorrect pin");
}

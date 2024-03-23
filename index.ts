#! /usr/bin/env node

import inquirer from "inquirer"

const rendomNumber =Math.floor(Math.random() *10 +1 )

const answer =await inquirer.prompt([
    {
        message:"Enter Under 1-10 Number Guessing Game",
        type:"number",
        name:"Number",
    }
])

if (answer.Number == rendomNumber) {
    console.log("You Win The Guessing Game");
}
else{
    console.log("You Have Lost Tha Guessing game");
}
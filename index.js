const inquirer = require("inquirer")
const fs = require("fs")
// const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const GenerateHtml = require("./util/generateHtml")

let managerArr = []
let engineerArr = []
let internArr = []

const start = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Please Enter the Manager's Name:",
            name: "managerName"
        },
        {
            type: "input",
            message: "Please Enter Their Employee ID:",
            name: "managerID",
        },
        {
            type: "input",
            message: "Please Enter Their Email Address:",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Please Enter Their Office Number:",
            name: "officeNumber"
        }
]).then(managerAns => {
    const newManager = new Manager(managerAns.managerName, managerAns.managerID, managerAns.managerEmail, managerAns.officeNumber)
    managerArr.push(newManager)
    GenerateHtml.writeManager(managerArr)
    stepTwo()
})
}

start()

const stepTwo = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do next?",
            choices: ["Enter An Engineer", "Enter An Intern", "Quit/Done"],
            name: "stepTwoChoice"
        }
    ]).then(stepTwoAns => {
        if(stepTwoAns.stepTwoChoice === "Quit/Done") {
            GenerateHtml.writeFooter()
            console.log("Goodbye")
        }
        if(stepTwoAns.stepTwoChoice === "Enter An Engineer") {
            enterEngineer()
        }
        if(stepTwoAns.stepTwoChoice === "Enter An Intern") {
            enterIntern()
        }
    })
}

const enterEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Please Enter the Engineer's Name:",
            name: "engineerName",
        },
        {
            type: "input",
            message: "Please Enter Their Employee ID:",
            name: "engineerID",
        },
        {
            type: "input",
            message: "Please Enter Their Email Address:",
            name: "engineerEmail",
        },
        {
            type: "input",
            message: "Please Enter Their GitHub Username:",
            name: "engineerGitHub"
        }
    ]).then(engineerAns =>{
        const newEngineer = new Engineer(engineerAns.engineerName, engineerAns.engineerID, engineerAns.engineerEmail, engineerAns.engineerGitHub)
        engineerArr.push(newEngineer)
        inquirer.prompt([
            {
                type: "list",
                message: "Would you Like to Enter Another Engineer?",
                choices: ["Yes", "No"],
                name: "engineerChoice",
            }
        ]).then(engineerChoiceAns =>{
            if (engineerChoiceAns.engineerChoice === "Yes") {
                enterEngineer()
            }
            if (engineerChoiceAns.engineerChoice === "No") {
                GenerateHtml.writeEngineer(engineerArr)
                engineerArr = []
                inquirer.prompt([
                    {
                        type: "list",
                        message: "What Would you Like to Do?",
                        choices: ["Enter an Intern", "Quit"],
                        name: "endEngineer"
                    }
                ]).then(endEngineerAns => {
                    if (endEngineerAns.endEngineer === "Quit") {
                        GenerateHtml.writeFooter()
                        console.log("Goodbye")
                    }
                    if (endEngineerAns.endEngineer === "Enter an Intern") {
                        enterIntern()
                    }
                })
            }
        })
    })
}

const enterIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Please Enter the Intern's Name:",
            name: "internName",
        },
        {
            type: "input",
            message: "Please Enter Their Employee ID:",
            name: "internID",
        },
        {
            type: "input",
            message: "Please Enter Their Email Address:",
            name: "internEmail",
        },
        {
            type: "input",
            message: "What School are they from?",
            name: "internSchool"
        }
    ]).then(internAns =>{
        const newIntern = new Intern(internAns.internName, internAns.internID, internAns.internEmail, internAns.internSchool)
        internArr.push(newIntern)
        inquirer.prompt([
            {
                type: "list",
                message: "Would you like to Enter Another Intern?",
                choices: ["Yes", "No"],
                name: "internChoice"
            }
        ]).then(internChoiceAns =>{
            if (internChoiceAns.internChoice === "Yes") {
                enterIntern()
            }
            if (internChoiceAns.internChoice === "No") {
                GenerateHtml.writeIntern(internArr)
                internArr = []
                inquirer.prompt([
                    {
                        type: "list",
                        message: "What Would you Like to Do?",
                        choices: ["Enter an Engineer", "Quit"],
                        name: "endIntern"
                    }
                ]).then(endInternAns =>{
                    if (endInternAns.endIntern === "Enter an Engineer") {
                        enterEngineer()
                    }
                    if (endInternAns.endIntern === "Quit") {
                        GenerateHtml.writeFooter()
                        console.log("Goodbye")
                    }
                })
            }
        })
    })
}
const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const managerArr = []

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
    managerArr.push(managerAns)
    console.log(managerArr)
})
}

start()
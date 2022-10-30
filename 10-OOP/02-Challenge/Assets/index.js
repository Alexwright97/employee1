const inquirer=require("inquirer")
const db = require("./config/connection")

require("console.table")

db.connect( ()=>{
    menu()
})
/*
view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

*/ 
const menuQuestion=[
    {
        type:"list",
        name:"menu",
        message:"choose the following option:",
        choices:["view all departments","view all roles","view all employees","add a department","add a role","add an employee","update an employee role"]
    }
]

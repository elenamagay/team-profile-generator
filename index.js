const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const renderPage = require("./src/template")
let team = [];

function managerQuestions() {
inquirer.prompt ([
    {type: "Input",
    message: "What is manager's name?",
    name: "name"
    },    
    {type: "Input",
    message: "What is manager's email address?",
    name: "email"
    },
    {type: "Input",
    message: "What is manager's ID number?",
    name: "id"
    },
    {type: "Input",
    message: "What is manager's office number?",
    name: "officeNumber"
    },
]).then (response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        team.push(manager);
        console.log(team);
    
    employeeQuestions();
    
})
};

function buildTeam(){
    fs.writeFile('./index.html', renderPage(team), (err)=>
    err ? console.error(err) : console.log('Success!')
  );
}
function employeeQuestions(){
    inquirer.prompt ([    
        {type: "list",
        message: "What is team member's position",
        choices:["Engineer", "Intern", "Team", "Exit"],
        name: "position"
        },
    ]).then ((answer) => {
        const employee = new Employee(answer.name, answer.id, answer.email);
        team.push(employee);
                
        switch (answer.position) {
            case "Engineer":
                engineerQuestions();
                break;
            case "Intern":
                internQuestions();
                break;
            case "Team":
                buidTeam();
            case "Exit":
                process.exit();
        }
    })
};
function engineerQuestions(){
inquirer.prompt ([
    {type: "Input",
    message: "What is team member's name?",
    name: "name"
    },    
    {type: "Input",
    message: "What is team member's email address?",
    name: "email"
    },
    {type: "Input",
    message: "What is team member's ID number?",
    name: "id"
    },
    {type: "Input",
    message: "What is team member's GitHub username?",
    name: "github"
    },
    {type: 'confirm',
    name: 'add',
    message: 'Do you want to add more team members?',
    default: false,
    },    
]).then (response  => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        team.push(engineer);
        console.log(team);
    
if (response.add) {
    employeeQuestions();
} else {
    buildTeam();
}
})


};

function internQuestions() {
    inquirer.prompt ([
        {type: "Input",
        message: "What is team member's name?",
        name: "name"
        },    
        {type: "Input",
        message: "What is team member's email address?",
        name: "email"
        },
        {type: "Input",
        message: "What is team member's ID number?",
        name: "id"
        },
        {type: "Input",
        message: "What school has the team member graduated?",
        name: "school"
        },
        {type: 'confirm',
        name: 'add',
        message: 'Do you want to add more team members?',
        default: false,
        },
    ]).then (response => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            team.push(intern);
            console.log(team);
        
            
    if (response.add) {
        employeeQuestions();
    } else {
        buildTeam();
    }                
    })
    
};
managerQuestions();


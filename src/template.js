const renderTeam = (team) => {
    let html = "";
    team.forEach((teamMember) => {
        if (teamMember.getRole() === "Manager") {
            html += `
            <div class="card" style="width: 18rem; margin: 10px; box-shadow: 5px 10px 8px #888888;">
                <div class="card-header" style="background-color: rgb(0, 43, 170); color: white;">
                    <h5 class="card-title">${teamMember.getName()}</h5>
                    <h6 class="card-subtitle mb-2"><i class="fas fa-mug-hot"></i> Manager</h6>
                </div>
                <div class="card-body">                    
                    <p class="card-text">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${teamMember.getId()}</li>
                            <li class="list-group-item">Email: ${teamMember.getEmail()}</li>
                            <li class="list-group-item">Office number: ${teamMember.getOfficeNumber()}</li>
                        </ul>
                    </p>              
                </div>
            </div>
            `
        }
        else if (teamMember.getRole() === "Engineer") {
        html += `
        <div class="card" style="width: 18rem; margin: 10px; box-shadow: 5px 10px 8px #888888;">
            <div class="card-header" style="background-color: rgb(0, 43, 170); color: white;">
                <h5 class="card-title">${teamMember.getName()}</h5>
                <h6 class="card-subtitle mb-2"><i class="fas fa-glasses"></i> Engineer</h6>
            </div>
                <div class="card-body">        
                    <p class="card-text">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${teamMember.getId()}</li>
                            <li class="list-group-item">Email: ${teamMember.getEmail()}</li>
                            <li class="list-group-item">GitHub: ${teamMember.getGithub()}</li>
                        </ul>
                    </p>              
                </div>
            </div>
            `
        }
        else if (teamMember.getRole() === "Intern") {
        html += `
        <div class="card" style="width: 18rem; margin: 10px; box-shadow: 5px 10px 8px #888888;">
                <div class="card-header" style="background-color: rgb(0, 43, 170); color: white;">
                    <h5 class="card-title">${teamMember.getName()}</h5>
                    <h6 class="card-subtitle mb-2"><i class="fas fa-user-graduate"></i> Intern</h6>
                </div>
                <div class="card-body">
                    <p class="card-text">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${teamMember.getId()}</li>
                            <li class="list-group-item">Email: ${teamMember.getEmail()}</li>
                            <li class="list-group-item">School: ${teamMember.getSchool()}</li>
                        </ul>
                    </p>              
            </div>
        </div>
        `
        };
    });
    return html;
}




const renderPage = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <title>Team Profile Generator</title>
    <style>
        header {
            text-align: center;
            font-size: xxx-large;
            font-weight: bold;
            padding-top: 30px;
            padding-bottom: 70px;
            background-color: red;
        };
        
    </style>
    </head>
    <body>
        <header>My Team</header>
        <div class="container">
            <div class = "row">
                ${renderTeam(team)}
            </div>
        </div>
        
    </body>
    </html>
    `
}

module.exports = renderPage;
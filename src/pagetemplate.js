const generateTeam = team => {
    const generateManager = manager => {
        return `
        <div class="card">
            <div class="card-header">
                <h2>${manager.getName()}</h2>
                <h3>${manager.getId()}</h3>
                <h3>${manager.getEmail()}</h3>
                <h3>${manager.getOfficeNumber()}</h3>
                <h3>${manager.getRole()}</h3>
            </div>
        </div>
        `;
    };
    const html = [];

    const generateEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header">
                <h2>${engineer.getName()}</h2>
                <h3>${engineer.getId()}</h3>
                <h3>${engineer.getEmail()}</h3>
                <h3>${engineer.getGithub()}</h3>
                <h3>${engineer.getRole()}</h3>
            </div>
        </div>
        `;
    };

    const generateIntern = intern => {
        return `
        <div class="card">
            <div class="card-header">
                <h2>${intern.getName()}</h2>
                <h3>${intern.getId()}</h3>
                <h3>${intern.getEmail()}</h3>
                <h3>${intern.getSchool()}</h3>
                <h3>${intern.getRole()}</h3>
            </div>
        </div>
        `;
    };
    

    html.push(team.filter(member => member.getRole() === "Manager").map(manager => generateManager(manager)));
    html.push(team.filter(member => member.getRole() === "Engineer").map(engineer => generateEngineer(engineer)));
    html.push(team.filter(member => member.getRole() === "Intern").map(intern => generateIntern(intern)));
    return html.join("");
};

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" "content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    ${generateTeam(team)}
                </div>
            </div>        
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};
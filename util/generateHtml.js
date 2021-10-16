const fs = require("fs")

function writeManager(resp) {
    fs.writeFile("./dist/index.html",
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <title>Software Team</title>
    </head>
    <body>
        <header>
            <div class="container">
                <div class="jumbotron bg-danger text-white w-100 p-3 mx-auto mt-2 text-center">
                  <h1>My Team</h1>
              </div>
        </header>
    
        <main>
            <div class = "d-flex justify-content-center w-75 mx-auto mt-3 flex-wrap">
                <div class="card m-2 shadow" style="width: 18rem;">
                    <div class="card-body bg-primary text-white">
                        <h5 class="card-title">${resp[0].name}</h5>
                        <h5><span class="material-icons align-text-bottom">local_cafe</span>Manager</h5>
                    </div>
                    <ul class="list-group list-group-flush bg-light px-3 py-4">
                        <li class="list-group-item">ID: ${resp[0].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${resp[0].email}">${resp[0].email}</a></li>
                        <li class="list-group-item">Office Number: ${resp[0].officeNumber}</li>
                    </ul>
                </div>
    `,
    function (error) {
        if (error) {
            console.log(error)
        }
    })
}

function writeEngineer (resp) {
    for (let i = 0; i < resp.length; i++) {
        fs.appendFile("./dist/index.html",
        `            <div class="card m-2 shadow" style="width: 18rem;">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title">${resp[i].name}</h5>
            <h5><span class="material-icons align-text-bottom">code</span>Engineer</h5>
        </div>
        <ul class="list-group list-group-flush bg-light px-3 py-4">
            <li class="list-group-item">ID: ${resp[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${resp[i].email}">${resp[i].email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${resp[i].github}" target="_blank">${resp[i].github}</a></li>
        </ul>
    </div>
        `,
        function(error) {
            if (error) {
                console.log(error)
            }
        })
    }
}

function writeIntern (resp) {
    for (let i = 0; i < resp.length; i++) {
        fs.appendFile("./dist/index.html",
        `            <div class="card m-2 shadow" style="width: 18rem;">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title">${resp[i].name}</h5>
            <h5><span class="material-icons align-text-bottom">school</span>Intern</h5>
        </div>
        <ul class="list-group list-group-flush bg-light px-3 py-4">
            <li class="list-group-item">ID: ${resp[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${resp[i].email}">${resp[i].email}</a></li>
            <li class="list-group-item">School: ${resp[i].school}</li>
        </ul>
    </div>
        `,
        function(error) {
            if (error) {
                console.log(error)
            }
        })
    }
}

function writeFooter () {
    fs.appendFile("./dist/index.html",
    `    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
    `,
    function (error) {
        if (error) {
            console.log(error)
        }
    })
}

module.exports = {
    writeManager,
    writeFooter,
    writeEngineer,
    writeIntern,
}
async function fetchTeamInfo(teamID) {
    fetch("https://v3.football.api-sports.io/teams?id=33", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "b61ef01f3458f0f1db19a3d12413f664"
        }
    })
        .then(result => result.json())
        .then((json) => {
            console.log(json.response[0].team)
            document.getElementById("team_info").innerHTML = json.response[0].team.name;
            document.getElementById("team_logo").src = json.response[0].team.logo;
        })
        .catch(err => {
            console.log(err);
        });
}

function displayTeams() {
    fetch("https://v3.football.api-sports.io/teams?league=39&season=2023", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "b61ef01f3458f0f1db19a3d12413f664"
        }
    })
        .then(result => result.json())
        .then((json) => {
            console.log(json)
            for (let i = 0; i < json.response.length; i++) {
                // Create name elements
                const newElement = document.createElement("p");
                const teamName = document.createTextNode(json.response[i].team.name);
                newElement.appendChild(teamName);
                document.getElementById("teams").appendChild(newElement);
                // Create image elements for logos
                console.log(json.response[i].team.name);
            }
        })
        .catch(err => {
            console.log(err);
        });
}

function newFunction() {
    const newElement = document.createElement("p");
    const teamName = document.createTextNode("This is it.");
    newElement.appendChild(teamName);
    document.getElementById("teams").appendChild(newElement);
}
// {
//     "get": "teams",
//     "parameters": {
//         "id": "33"
//     },
//     "errors": [],
//     "results": 1,
//     "paging": {
//         "current": 1,
//         "total": 1
//     },
//     "response": [
//         {
//             "team": {
//                 "id": 33,
//                 "name": "Manchester United",
//                 "code": "MUN",
//                 "country": "England",
//                 "founded": 1878,
//                 "national": false,
//                 "logo": "https://media.api-sports.io/football/teams/33.png"
//             },
//             "venue": {
//                 "id": 556,
//                 "name": "Old Trafford",
//                 "address": "Sir Matt Busby Way",
//                 "city": "Manchester",
//                 "capacity": 76212,
//                 "surface": "grass",
//                 "image": "https://media.api-sports.io/football/venues/556.png"
//             }
//         }
//     ]
// }
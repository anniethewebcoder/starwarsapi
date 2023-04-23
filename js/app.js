//ROOT API

const rootAPI = "https://swapi.dev/api/";

const loader = document.getElementById("loader");
const intro = document.getElementById("intro");
const result = document.getElementById("swResult");

const zeroResult = "These aren't the droids you're looking for."
//DEFINE getAPI FUNCTION
async function getAPI(url, category) {
    let html = ""

    let res = await fetch(url)

    loader.style.visibility = "hidden";
    intro.style.display = "none";

    if(res.status === 200) {
            
        const data = await res.json()
        
        switch(category) {
            case "People": await getPeople(data);
            break;
            case "Planets": await getPlanets(data);
            break;
            case "Films": await getFilms(data);
            break;
            case "Species": await getSpecies(data);
            break;
            case "Starships": await getStarships(data);
            break;
            case "Vehicles": await getVehicles(data);
            break;
            default: console.log("Category Uh oh!");
            break;
        }
        

    } else {
        result.innerHTML = "<p>Can't get any result.</p>"
    }
}

//DEFINE getSearch FUNCTION
function getSearch(category) {

    let swsearch = `<label for="swInput" class="search-label">Search ${category}</label>
        <input type="text" id="swInput">`

    let section = document.querySelector(".search-box");
    section.innerHTML = swsearch
    
    const input = document.getElementById("swInput");
    input.addEventListener('keydown', event => {
        if(event.key === "Enter") {
            event.preventDefault();

            //WHEN SOMEONE HITS ENTER IN SEARCH BOX
            let swValue = input.value;
            let url = rootAPI + category.toLowerCase() + "/?search=" + swValue;

            loader.style.visibility = "visible";
            getAPI(url, category);
        }
    })
}

async function getPeople(data) {
    
    let html = "";

    if(data.count === 0) {
        html = zeroResult;
    } else {
        html = `<div class="result-count"><h1>Never tell me the odds. You got ${data.count} results.</h1></div>`
    }

    if(data.next !== null) {
        console.log(data.next)
    }

    if(data.previous !== null) {
        console.log(data.previous)
    }

    for(const item of data.results) {
        let hwName = await getHomeworld(item.homeworld);
        let personID = item.url.split('/')
        personID = personID[personID.length - 2]


        let htmlSegment = `<div class="result-item">
            <div class="result-image">
                <img src="img/profile.png" width="80">
            </div>
            <div class="result-entry">
                <h3>${item.name}</h3>
                <ul>
                    <li>Gender: ${item.gender}</li>
                    <li>Birth Year: ${item.birth_year}</li>
                    <li class="hw">Home World: ${hwName}</li>
                    <li><a href="./people.html?peopleID=${personID}" value="${item.url}" class="btn">Click here for details</a></li>
                </ul>
            </div>
        </div>`;

        html += htmlSegment
    }

    result.innerHTML = html;

}

async function getPlanets(data) {
    let html = "";

    if(data.count === 0) {
        html = zeroResult;
    } else {
        html = `<div class="result-count"><h1>Never tell me the odds. You got ${data.count} results.</h1></div>`
    }

    if(data.next !== null) {
        console.log(data.next)
    }

    if(data.previous !== null) {
        console.log(data.previous)
    }

    for(const item of data.results) {
        let planetID = item.url.split('/')
        planetID = planetID[planetID.length - 2]


        let htmlSegment = `<div class="result-item">
            <div class="result-image">
                <img src="img/profile.png" width="80">
            </div>
            <div class="result-entry">
                <h3>${item.name}</h3>
                <ul>
                    <li>Population: ${item.poulation}</li>
                    <li>Climate: ${item.climate}</li>
                    <li>Terrain: ${item.terrain}</li>
                    <li><a href="./planets.html?planetsID=${planetID}" value="${item.url}" class="btn">Click here for details</a></li>
                </ul>
            </div>
        </div>`;

        html += htmlSegment
    }

    result.innerHTML = html;
}

async function getHomeworld(url) {
    const res = await fetch(url)
    const data = await res.json();
    console.log(data.name)
    return data.name
}

async function getFilms(data) {
    let html = "";

    if(data.count === 0) {
        html = zeroResult;
    } else {
        html = `<div class="result-count"><h1>A long time ago in a galaxy far, far away, there were ${data.count} results.</h1></div>`
    }

    if(data.next !== null) {
        console.log(data.next)
    }

    if(data.previous !== null) {
        console.log(data.previous)
    }

    for(const item of data.results) {
        let filmID = item.url.split('/')
        filmID = filmID[filmID.length - 2]


        let htmlSegment = `<div class="result-item">
            <div class="result-image">
                <img src="img/${item.episode_id}.jpg" alt="${item.title}" width="100">
            </div>
            <div class="result-entry">
                <h3>${item.title}</h3>
                <ul>
                    <li>Episode Number: ${item.episode_id}</li>
                    <li>Release Date: ${item.release_date}</li>
                    <li><a href="./films.html?filmsID=${filmID}" value="${item.url}" class="btn">Click here for details</a></li>
                </ul>
            </div>
        </div>`;

        html += htmlSegment
    }

    result.innerHTML = html;
}

async function getSpecies(data) {
    let html = "";

    if(data.count === 0) {
        html = zeroResult;
    } else {
        html = `<div class="result-count"><h1>I'd just as soon kiss a Wookie. I'd kiss ${data.count} results.</h1></div>`
    }

    if(data.next !== null) {
        console.log(data.next)
    }

    if(data.previous !== null) {
        console.log(data.previous)
    }

    for(const item of data.results) {
        let hwName = await getHomeworld(item.homeworld);
        let speciesID = item.url.split('/')
        speciesID = speciesID[speciesID.length - 2]


        let htmlSegment = `<div class="result-item">
            <div class="result-image">
                <img src="img/profile.png" width="80">
            </div>
            <div class="result-entry">
                <h3>${item.name}</h3>
                <ul>
                    <li>Classification: ${item.classification}</li>
                    <li>Designation: ${item.designation}</li>
                    <li class="hw">Home World: ${hwName}</li>
                    <li><a href="./species.html?speciesID=${speciesID}" value="${item.url}" class="btn">Click here for details</a></li>
                </ul>
            </div>
        </div>`;

        html += htmlSegment
    }

    result.innerHTML = html;
}

async function getStarships(data) {
    let html = "";

    if(data.count === 0) {
        html = zeroResult;
    } else {
        html = `<div class="result-count"><h1>I just did the Kessel Run in ${data.count} results.</h1></div>`
    }

    if(data.next !== null) {
        console.log(data.next)
    }

    if(data.previous !== null) {
        console.log(data.previous)
    }

    for(const item of data.results) {
        let starshipID = item.url.split('/')
        starshipID = starshipID[starshipID.length - 2]


        let htmlSegment = `<div class="result-item">
            <div class="result-image">
                <img src="img/profile.png" width="80">
            </div>
            <div class="result-entry">
                <h3>${item.name}</h3>
                <ul>
                    <li>Model: ${item.model}</li>
                    <li>Manufacturer: ${item.manufacturer}</li>
                    <li>Cost: ${item.cost_in_credits}</li>
                    <li><a href="./starships.html?starshipsID=${starshipID}" value="${item.url}" class="btn">Click here for details</a></li>
                </ul>
            </div>
        </div>`;

        html += htmlSegment
    }

    result.innerHTML = html;
}

async function getVehicles(data) {
    let html = "";

    if(data.count === 0) {
        html = zeroResult;
    } else {
        html = `<div class="result-count"><h1>Never tell me the odds. You got ${data.count} results.</h1></div>`
    }

    if(data.next !== null) {
        console.log(data.next)
    }

    if(data.previous !== null) {
        console.log(data.previous)
    }

    for(const item of data.results) {
        let vehicleID = item.url.split('/')
        vehicleID = vehicleID[vehicleID.length - 2]


        let htmlSegment = `<div class="result-item">
            <div class="result-image">
                <img src="img/profile.png" width="80">
            </div>
            <div class="result-entry">
                <h3>${item.name}</h3>
                <ul>
                    <li>Model: ${item.model}</li>
                    <li>Manufacturer: ${item.manufacturer}</li>
                    <li>Cost: ${item.cost_in_credits}</li>
                    <li><a href="./vehicles.html?vehiclesID=${vehicleID}" value="${item.url}" class="btn">Click here for details</a></li>
                </ul>
            </div>
        </div>`;

        html += htmlSegment
    }

    result.innerHTML = html;
}



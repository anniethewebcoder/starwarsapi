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
            case "Planets": getPlanets(data);
            break;
            case "Films": getFilms(data);
            break;
            case "Species": getSpecies(data);
            break;
            case "Starships": getStarships(data);
            break;
            case "Vehicles": getVehicles(data);
            break;
            default: console.log("Category Uh oh!");
            break;
        }
        
        // result.innerHTML = "Success! 200!"

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

async function getPersonDetail(url) {

}

function getPlanets(data) {
    let html = ""
}

async function getHomeworld(url) {
    const res = await fetch(url)
    const data = await res.json();
    console.log(data.name)
    return data.name
}

function getFilms(data) {

}

function getSpecies(data) {
    console.log("Species")
    console.log(data.count)
    console.log(data.results.name)
}

function getStarships(data) {
    console.log("Starships")
    console.log(data.count)
    console.log(data.results.name)
}

function getVehicles(data) {
    console.log("Vehicles")
    console.log(data.count)
    console.log(data.results.name)
}



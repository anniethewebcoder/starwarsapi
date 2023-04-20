//ROOT API

const rootAPI = "https://swapi.dev/api/";

const loader = document.getElementById("loader");
const intro = document.getElementById("intro");
const result = document.getElementById("swResult");

//DEFINE getAPI FUNCTION
async function getAPI(url, category) {
    let html = ""

    fetch(url).then(res => {
        
        loader.style.visibility = "hidden";
        intro.style.display = "none";
        
        if(res.status === 200) {
            
            const data = res.json().then(data => {
                switch(category) {
                    case "People": getPeople(data);
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
            });
            let htmlSegment = ""
            
            result.innerHTML = "Success! 200!"
 
        } else {
            result.innerHTML = "<p>Can't get any result.</p>"
        }
        
    }).catch(err => {
        console.log(err)
    })
}

//getAPI(rootAPI + "films")

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

function getPeople(data) {
    console.log("People")
    console.log(data.count)
    console.log(data.results.name)

    let html = ""

    if(data.count === 0) {
        html = "These aren't the droids you're looking for.";
    }


    data.results.forEach(item => {
        let htmlSegment = `
            <li class="result-item">
                <div class="result-image">
                    <img src="img/profile.png" width="100">
                </div>
                <div class="result-entry">
                    <h4>${item.name}</h4>
                    <p><button class="personlink" value="${item.url}">Click here for details</button></p>
                </div>
            </li>
            `

        html += htmlSegment;
    })

    result.innerHTML = html;

}

function getPlanets(data) {
    console.log("Planets")
    console.log(data.count)
    console.log(data.results.name)
}

function getFilms(data) {
    console.log("Films")
    console.log(data.count)
    console.log(data.results.name)
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



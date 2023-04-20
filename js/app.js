//ROOT API

const rootAPI = "https://swapi.dev/api/";

//DEFINE getAPI FUNCTION
async function getAPI(url, category) {
    let loader = document.getElementById("loader");
    let intro = document.getElementById("intro");
    let result = document.getElementById("swResult");

    let html = ""

    fetch(url).then(res => {
        
        loader.style.visibility = "hidden";
        intro.style.display = "none";
        
        if(res.status === 200) {
            
            const data = res.json().then(data => {
                getPeople(data)
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

            let x = document.getElementById("loader");
            x.style.visibility = "visible";
            getAPI(url, category);
        }
    })
}

function getPeople(data) {
    console.log("People")
    console.log(data)
}

function getPlanets(data) {
    console.log("Planets")
    console.log(data)
}

function getFilms(data) {
    console.log("Films")
    console.log(data)
}

function getSpecies(data) {
    console.log("Species")
    console.log(data)
}

function getStarships(data) {
    console.log("Starships")
    console.log(data)
}

function getVehicles(data) {
    console.log("Vehicles")
    console.log(data)
}



//ROOT API
const rootapi = "https://swapi.dev/api/";

const form = document.getElementById("swpeople");
const input = document.getElementById("input-people")

input.addEventListener('keydown', event => {
    if(event.key === "Enter") {
        event.preventDefault();
        renderPeople();
    }
})

//DESCRIBE getPeople() FUNCTION
async function getPeople() {
    //GET QUERY FROM index.html
    const peopleInput = document.getElementById("input-people").value;

    //URL FOR PEOPLE SEARCH
    const url = rootapi + "/people/?search=" + peopleInput;

    try {
        const res = await fetch(url);
        return await res.json();  
    } catch (error) {
        return error;
    }
}

//DESCRIBE renderPeople() FUNCTION
async function renderPeople() {
    const results = await getPeople();

    const countRes = results.count;
        
    let html = "";

    const arrayResults = results.results

    arrayResults.forEach(result => {
        let htmlSegment = `
            <li class="result-item">
                <div class="result-image">
                    <img src="img/profile.png" width="100">
                </div>
                <div class="result-entry">
                    <h4>${result.name}</h4>
                    <p><button onclick="getPerson(this.value)" value="${result.url}">Click here for details</button></p>
                </div>
            </li>
            `

        html += htmlSegment;
    })

    let container = document.querySelector('#peopleresult');
    container.innerHTML = html;
}

//DESCRIBE getPerson() FUNCTION
async function getPerson(val) {
    const getUrl = val
    
    let html = "";

    try {
        const res = await fetch(getUrl);
        const data = await res.json();

        if(data.films.length > 1) {
            data.films.forEach(link => {
                getFilm(link)
            })
        }

        // if(data.vehicles.length > 1) {
        //     data.vehicles.forEach(link => {
        //         getVehicle(link)
        //     })
        // }

        // if(data.vehicles.length > 1) {
        //     data.vehicles.forEach(link => {
        //         getStarship(link)
        //     } )
        // }

        // if(data.species.length > 1) {
        //     data.species.forEach(link => {
        //         getSpec(link)
        //     })
        // }

        let html = `<h4>Name: ${data.name}</h4>
            <ul>
                <li>Height: ${data.height}</li>
                <li>Mass: ${data.mass}</li>
                <li>Hair Color: ${data.hair_color}</li>
                <li>Skin Color: ${data.eye_color}</li>
                <li>Birth Year: ${data.birth_year}</li>
                <li>Gender: ${data.gender}</li>
                <li>Home World: ${data.homeworld}</li>
                <li>Films : <p class="filmlink"></p></li>
                <li>Species: ${data.species}</li>
                <li>Vehicles: ${data.vehicles}</li>
                <li>Starships: ${data.starships}</li>
            
            </ul>`;
        
        let container = document.querySelector('#peopleresult');
        container.innerHTML = html;
    } catch (error) {
        console.log(error);
    }   
}

async function getFilm(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const title = data.title
        
        let container = document.querySelector('.filmlink')
        container.append(title)
    } catch (err) {
        console.log(err);
    }
}

async function getVehicle(url){
    try {
        const res = await fetch(url);
        const data = res.json();
        console.log(data.name)
    } catch (err) {
        console.log(err)
    }
}

async function getSpec(url){
    try {
        const res = await fetch(url);
        const data = res.json();
        console.log(data.name)
    } catch (err) {
        console.log(err)
    }
}

async function getStarship(url){
    try {
        const res = await fetch(url);
        const data = res.json();
        console.log(data.name)
    } catch (err) {
        console.log(err)
    }
}
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

        let html = `<h4>Name: ${data.name}</h4>
            <ul>
                <li>Height: ${data.height}</li>
                <li>Mass: ${data.mass}</li>
                <li>Hair Color: ${data.hair_color}</li>
                <li>Skin Color: ${data.eye_color}</li>
                <li>Birth Year: ${data.birth_year}</li>
                <li>Gender: ${data.gender}</li>
                <li>Home World: ${data.homeworld}</li>
                <li>Films : ${data.films}</li>
                <li>Species: ${data.vehicles}</li>
                <li>Starships: ${data.starships}</li>
            
            </ul>`;
        
        let container = document.querySelector('#peopleresult');
        container.innerHTML = html;
    } catch (error) {
        console.log(error);
    }

    
}
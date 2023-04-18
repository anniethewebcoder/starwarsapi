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
                    <p><button class="personlink" value="${result.url}">Click here for details</button></p>
                </div>
            </li>
            `

        html += htmlSegment;

        console.log(result.url)
        
    })

    let container = document.querySelector('#peopleresult');
    container.innerHTML = html;
}

//DESCRIBE getFilms() FUNCTION
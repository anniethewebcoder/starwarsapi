//ROOT API
const rootapi = "https://swapi.dev/api/";

//DESCRIBE getPeople() FUNCTION
async function getPeople() {
    //GET QUERY FROM index.html
    const peopleInput = document.getElementById("input-people").value;

    //URL FOR PEOPLE SEARCH
    const url = rootapi + "/people/?search=" + peopleInput;

    try {
        const res = await fetch(url);
        const data = await res.json();

        const results = data.results; 
        
        let html = "";

        results.forEach(result => {
            let htmlSegment = `<div class="result"
                <h2>${result.name}</h2>
                <a href="${result.url}">Click here</a>
                </div>`;

            html += htmlSegment;
        })

        let container = document.querySelector('#swresult');
        container.innerHTML = html;
        
    } catch (error) {
        console.log(error);
    }
}

//DESCRIBE getFilms() FUNCTION
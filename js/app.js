//ROOT API
const rootapi = "https://swapi.dev/api/";

//DESCRIBE getPeople() FUNCTION
async function getPeople() {
    //GET QUERY FROM index.html
    const peopleInput = document.getElementById("input-people").value;

    //URL FOR PEOPLE SEARCH
    const url = rootapi + "/people/?search=" + peopleInput;

    try {
        let res = await fetch(url);
        let data = await res.json();

        console.log(data);

        const results = data.results; 

        console.log(results)
        
        let html = "";

        results.forEach(result => {
            let htmlSegment = `<div class="result"
                <h2>${result.name}</h2>
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
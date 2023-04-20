//ROOT API

const rootAPI = "https://swapi.dev/api/";

//DEFINE getAPI FUNCTION
async function getAPI(url) {

    fetch(url).then(res => {
        if(res.status === 200) {
            let x = document.getElementById("loader");
            x.style.visibility = "hidden";
        }
        console.log(res.json());
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
            getAPI(url);
        }
    })
}

function getSearchValue() {

}



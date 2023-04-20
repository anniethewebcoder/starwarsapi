//ROOT API

const rootAPI = "https://swapi.dev/api/";

//DEFINE getAPI FUNCTION
async function getAPI() {

    let url = rootAPI + "people/1"
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

    let swsearch = `<form>
        <label for="swInput">Search ${category}: </label>
        <input type="text" id="swInput">
        <button type="button" onclick="getAPI()">Search</button>
        </form>
    `
    let section = document.getElementById("swSearch");
    section.innerHTML = swsearch
}

function getSearchValue() {

}
    // fetch(apiURL).then(response => {
    //     console.log(response.status); 
    // }).catch(error => {
    //     console.error(error);
    // });

        //WHEN SOMEONE HITS ENTER IN SEARCH BOX
        // const input = document.getElementById("swInput");
        // const swValue = input.value;
    
        // const url = rootAPI + category.toLowerCase() + "/?search=" + swValue;
    
        // input.addEventListener('keydown', event => {
        //     if(event.key === "Enter") {
        //         event.preventDefault();
        //         getAPI(url);
        //     }
        // })
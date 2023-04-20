//ROOT API

const rootAPI = "https://swapi.dev/api/";

//DEFINE getAPI FUNCTION
async function getAPI(url) {
    fetch(url).then(res => {
        if(res.status === 200) {
            let x = document.getElementById("loader")
            x.style.visibility = "hidden"
        }
        console.log(res.status);
    }).catch(err => {
        console.log(err)
    })
}

getAPI(rootAPI + "films")

    // fetch(apiURL).then(response => {
    //     console.log(response.status); 
    // }).catch(error => {
    //     console.error(error);
    // });
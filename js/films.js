//ROOT API
const rootapi = "https://swapi.dev/api/"



async function getPeople() {
    
    const apiURL = rootapi + "people"

    try {
        const res = await fetch(apiURL)
        return await res.json()
    } catch (err) {
        console.log(err)
    }

    // fetch(apiURL).then(response => {
    //         console.log(response.status); 
    //     }).catch(error => {
    //         console.error(error);
    //     });

}

async function renderPeople() {
    const data = await getPeople()

    console.log(data.count)
    
    let page = ""

    data.results.forEach(person => {
        let section = ``
    })
}

renderPeople()

async function getFilms() {
    const apiURL = rootapi + "films"

    try {
        const res = await fetch(apiURL)
        return await res.json()
    } catch (err) {
        console.log(err)
    }

    // fetch(apiURL).then(response => {
    //     console.log(response.status); 
    // }).catch(error => {
    //     console.error(error);
    // });
}

async function renderFilms() {
    const data = await getFilms()
    
    console.log(data)
    let page = ""
    data.results.forEach(film => {
       let section = `<div class="swlist">
            <img src="img/${film.episode_id}.jpg" width="200">
       
            <ul>
                <li><h2>${film.title}</h2></li>
                <li>Episode: ${film.episode_id}</li>
                <li>Director: ${film.director}</li>
                <li>Release Date: ${film.release_date}</li>
            </ul>
        </div>`

       page += section
    })

    let pageSection = document.getElementById("swfilms")
    pageSection.innerHTML = page
}

renderFilms()
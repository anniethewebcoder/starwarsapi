async function getFilm() {

  //FORM URL
  const currentURL = new URL(window.location.toString())
  const filmID = currentURL.searchParams.get('filmsID')
  const getFilmURL = `https://swapi.dev/api/films/${filmID}/`

  //GET DATA OF A PERSON
  try {
    const res = await fetch(getFilmURL);
    const data = await res.json();
    return data;

  } catch (err) {
    console.log(err);
  }
}

async function renderFilm() {

  const data = await getFilm();

  // add name
  const title = data.title;
  document.querySelector('.title').innerHTML = title;

  const episode = data.episode_id;
  document.querySelector('.episodeID').innerHTML = "Episode: " + episode;

  const opening = data.opening_crawl;
  document.querySelector('.openingCrawl').innerHTML = "Opening Crawl: \"" + opening + "\"";
  
  const director = data.director;
  document.querySelector('.director').innerHTML = "Director: " + director;

  const producer = data.producer;
  document.querySelector('.producer').innerHTML = "Producer: " + producer;

  const release = data.release_date;
  document.querySelector('.releaseDate').innerHTML = "Release Date: " + release;

    
  const character = data.characters;
  let character_li = ""
  for(const item of character) {
    let name = await getName(item);
    character_li += `<li>${name}</li>`
  }
  document.querySelector('.characters').innerHTML = "Characters: " + character_li;

  const species = data.species;
  let species_li = ""
  for(const item of species) {
    let name = await getName(item);
    species_li += `<li>${name}</li>`
  }
  document.querySelector('.species').innerHTML = "Species: " + species_li;
  
  const vehicles = data.vehicles;
  let vehicles_li = ""
  for(const item of vehicles) {
    let name = await getName(item);
    vehicles_li += `<li>${name}</li>`
  }
  document.querySelector('.vehicles').innerHTML = "Vehicles: " + vehicles_li;

  const starships = data.starships;
  let starships_li = ""
  for(const item of starships) {
    let name = await getName(item);
    starships_li += `<li>${name}</li>`
  }
  document.querySelector('.starships').innerHTML = "Starships: " + starships_li;

  const planets = data.planets;
  let planets_li = ""
  for(const item of planets) {
    let name = await getName(item);
    planets_li += `<li>${name}</li>`
  }
  document.querySelector('.planets').innerHTML = "Planets: " + planets_li;
}

async function getName(url) {
  try {
    const res = await fetch(url)
    const data = await res.json();

    let name = data.name;
    let link = data.url;
    let splitLink = link.split("/");
    let id = splitLink[splitLink.length - 2]
    let category = splitLink[splitLink.length - 3];
    let newlink = `./${category}.html?${category}ID=${id}`

    let li = `<a href="${newlink}">${id}: ${name}</a>`;

    return li;
  } catch(err) {
    console.log(err);
  }
}


/*
//ROOT API
const rootapi = "https://swapi.dev/api/"

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
*/
async function getStarship() {
  //FORM URL
  const currentURL = new URL(window.location.toString())
  const starshipID = currentURL.searchParams.get('starshipsID')
  const getStarshipURL = `https://swapi.dev/api/starships/${starshipID}/`

  //GET DATA OF A PERSON
  try {
    const res = await fetch(getStarshipURL);
    const data = await res.json();
    return data;

  } catch (err) {
    console.log(err);
  }
}

async function renderStarship() {
    const data = await getStarship();

    const name = data.name;
    document.querySelector('.name').innerHTML = name;

    const model = data.model;
    document.querySelector('.model').innerHTML = "Model: " + model;

    const starship = data.starship_class;
    document.querySelector('.starshipClass').innerHTML = "Class: " + starship;

    const manufacturer = data.manufacturer;
    document.querySelector('.manufacturer').innerHTML = "Manufacturer: " + manufacturer;

    const cost = data.cost_in_credits;
    document.querySelector('.costCredits').innerHTML = "Cost: " + cost + "Galactic Credits";

    const length = data.length;
    document.querySelector('.length').innerHTML = "Length: " + length + "meters";

    const crew = data.crew;
    document.querySelector('.crew').innerHTML = "Crew: " + crew;

    const passengers = data.passengers;
    document.querySelector('.passengers').innerHTML = "Passengers: " + passengers;

    const max = data.max_atmosphering_speed;
    document.querySelector('.maxATMspeed').innerHTML = "Max Atmosphering Speed" + max;

    const hyperdrive = data.hyperdrive_rating;
    document.querySelector('.hyperdriveRating').innerHTML = "Hyperdrive Rating: " + hyperdrive;

    const mglt = data.MGLT; 
    document.querySelector('.MGLT').innerHTML = "Max Megalights: " +  mglt;

    const cargo = data.cargo_capacity;
    document.querySelector('.cargoCapacity').innerHTML = "Cargo Capacity: " + cargo;

    const consumables = data.consumables;
    document.querySelector('.consumables').innerHTML = "Consumables: " + consumables;

    const films = data.films;
    let films_li = ""
    for(const item of films) {
        let name = await getTitle(item);
        films_li += `<li>${name}</li>`
    }
    document.querySelector('.films').innerHTML = "Films: " + films_li;

    const pilots = data.pilots;
    let pilots_li = ""
    for(const item of pilots) {
        let name = await getName(item);
        pilots_li += `<li>${name}</li>`
    }
    document.querySelector('.pilots').innerHTML = "Pilots: " + pilots;
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

  async function getTitle(url) {
    try {
      const res = await fetch(url)
      const data = await res.json();
  
      let title = data.title;
      let link = data.url;
      let splitLink = link.split("/");
      let id = splitLink[splitLink.length - 2]
      let category = splitLink[splitLink.length - 3];
      let newlink = `./${category}.html?${category}ID=${id}`
  
      let li = `<a href="${newlink}">${id}: ${title}</a>`;
  
      return li;
    } catch(err) {
      console.log(err);
    }
  }
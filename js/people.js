async function getPerson() {

  //FORM URL
  const currentURL = new URL(window.location.toString())
  const personID = currentURL.searchParams.get('peopleID')
  const getPersonURL = `https://swapi.dev/api/people/${personID}/`

  //GET DATA OF A PERSON
  try {
    const res = await fetch(getPersonURL);
    const data = await res.json();
    return data;

  } catch (err) {
    console.log(err);
  }
}

async function renderPerson() {
  
  const data = await getPerson();

  // add name
  const name = data.name
  document.querySelector('.name').innerHTML = name;

  const height = data.height;
  document.querySelector('.height').innerHTML = "Height: " + height + " cm";

  const mass = data.mass
  document.querySelector('.mass').innerHTML = "Mass: " + mass + " km";
  
  const hairColor = data.hair_color;
  document.querySelector('.hairColor').innerHTML = "Hair Color: " + hairColor;

  const skinColor = data.skin_color;
  document.querySelector('.skinColor').innerHTML = "Skin Color: " + skinColor;

  const eyeColor = data.eye_color;
  document.querySelector('.eyeColor').innerHTML = "Eye Color: " + eyeColor;

  const birthYear = data.birth_year;
  document.querySelector('.birthYear').innerHTML = "Born in " + birthYear;

  const homeWorld = await getName(data.homeworld);
  document.querySelector('.homeWorld').innerHTML = "Home World: " + homeWorld;
  
  const films = data.films;
  let film_li = ""
  for(const item of films) {
    let title = await getTitle(item);
    film_li += `<li>${title}</li>`
  }
  document.querySelector('.films').innerHTML = "Films: " + film_li;

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
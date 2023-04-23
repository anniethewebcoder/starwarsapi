async function getPerson() {

  //FORM URL
  const currentURL = new URL(window.location.toString())
  const personID = currentURL.searchParams.get('personID')
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
  document.querySelector('.height').innerHTML = height + " cm";

  const mass = data.mass
  document.querySelector('.mass').innerHTML = mass + " km";
  
  const hairColor = data.hair_color;
  document.querySelector('.hairColor').innerHTML = hairColor + " hair";

  const skinColor = data.skin_color;
  document.querySelector('.skinColor').innerHTML = skinColor + " skin";

  const eyeColor = data.eye_color;
  document.querySelector('.eyeColor').innerHTML = eyeColor + " eyes";

  const birthYear = data.birth_year;
  document.querySelector('.birthYear').innerHTML = "Born in " + birthYear;

  const homeWorld = data.homeworld;
  document.querySelector('.homeWorld').innerHTML = homeWorld;
  
  const films = data.films;
  console.log(films[0])
  document.querySelector('.films').innerHTML = films;

  const species = data.species;
  document.querySelector('.species').innerHTML = species;
  
  const vehicles = data.vehicles;
  document.querySelector('.vehicles').innerHTML = vehicles;

  const starships = data.starships;
  document.querySelector('.starships').innerHTML = starships;

}
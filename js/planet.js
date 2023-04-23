async function getPlanet() {
  //FORM URL
  const currentURL = new URL(window.location.toString())
  const planetID = currentURL.searchParams.get('planetsID')
  const getPlanetURL = `https://swapi.dev/api/planets/${planetID}/`

  //GET DATA OF A PERSON
  try {
    const res = await fetch(getPlanetURL);
    const data = await res.json();
    return data;

  } catch (err) {
    console.log(err);
  }
}

async function renderPlanet() {

    const data = await getPlanet();

    const name = data.name;
    document.querySelector('.name').innerHTML = name;

    const diameter = data.diameter;
    document.querySelector('.diameter').innerHTML = "Diameter: " + diameter + " km";
    
    const rotation = data.rotation_period;
    document.querySelector('.rotationPeriod').innerHTML = "Rotation Period: " + rotation + "hours per day";

    const orbital = data.orbital_period;
    document.querySelector('.orbitalPeriod').innerHTML = "Orbital Period: " + orbital + "days per year";

    const gravity = data.gravity;
    document.querySelector('.gravity').innerHTML = "Gravity: " + gravity + " G";

    const population = data.population;
    document.querySelector('.population').innerHTML = "Population: " + population;

    const climate = data.climate;
    document.querySelector('.climate').innerHTML = "Climate: " + climate;

    const terrain = data.terrain;
    document.querySelector('.terrain').innerHTML = "Terrain: " + terrain;

    const water = data.surface_water;
    document.querySelector('.surfaceWater').innerHTML = "Surface Water: " + water + " %";

        
  const residents = data.residents;
  let residents_li = ""
  for(const item of residents) {
    let name = await getName(item);
    residents_li += `<li>${name}</li>`
  }
  document.querySelector('.residents').innerHTML = "Residents: " + residents_li;

  const films = data.films;
  let films_li = ""
  for(const item of films) {
    let name = await getTitle(item);
    films_li += `<li>${name}</li>`
  }
  document.querySelector('.films').innerHTML = "Films: " + films_li;
    


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
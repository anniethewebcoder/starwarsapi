async function getSpecies() {

  //FORM URL
  const currentURL = new URL(window.location.toString())
  const speciesID = currentURL.searchParams.get('speciesID')
  const getSpeciesURL = `https://swapi.dev/api/species/${speciesID}/`

  //GET DATA OF A PERSON
  try {
    const res = await fetch(getSpeciesURL);
    const data = await res.json();
    return data;

  } catch (err) {
    console.log(err);
  }
}

async function renderSpecies() {
    const data = await getSpecies();

    const name = data.name;
    document.querySelector('.name').innerHTML = name;

    const classification = data.classification;
    document.querySelector('.classification').innerHTML = "Classification: " + classification;

    const designation = data.designation;
    document.querySelector('.designation').innerHTML = "Designation: " + designation;

    const height = data.average_height;
    document.querySelector('.averageHeight').innerHTML = "Average Height: " + height;

    const life = data.average_lifespan;
    document.querySelector('.averageLifespan').innerHTML = "Average Lifespan: " + life;

    const eyes = data.eye_colors;
    document.querySelector('.eyeColors').innerHTML = "Eye Colors: " + eyes;

    const hairs = data.hair_colors;
    document.querySelector('.hairColors').innerHTML = "Hair Colors: " +  hairs;

    const skins = data.skin_colors;
    document.querySelector('.skinColors').innerHTML = "Skin Colors: " + skins;

    const languages = data.language;
    document.querySelector('.languages').innerHTML = "Languages: " + languages;

    const homeWorld = await getName(data.homeworld);
    document.querySelector('.homeworld').innerHTML = "Home World: " + homeWorld;

    const people = data.people;
    let people_li = ""
    for(const item of people) {
        let name = await getName(item);
        people_li += `<li>${name}</li>`
    }
    document.querySelector('.people').innerHTML = "People: " + people_li;

    const films = data.films;
    let films_li = ""
    for(const item of films) {
        let title = await getTitle(item);
        films_li += `<li>${title}</li>`
    }
    document.querySelector('.films').innerHTML = "Films: " + films_li;
    
   

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
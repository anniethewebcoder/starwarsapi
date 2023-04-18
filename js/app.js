// //URL
// const sw = 'https://swapi.dev/api/';

// //GET PEOPLE
// async function getPeople() {
//     const person = sw + 'people/1/'
//     try {
//         let res = await fetch(person);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function renderPeople() {
//     let people = await getPeople();
//     console.log(people)

//     let container = document.querySelector('.container');
//     container.innerHTML = people.name;
// }

// renderPeople();

//ROOT API
const rootapi = "https://swapi.dev/api/";

//DESCRIBE getPeople() FUNCTION
async function getPeople() {
    //get query from index.html
    const peopleInput = document.getElementById("input-people").value;

    const url = rootapi + "/people/?search=" + peopleInput;

    try {
        let response = await fetch(url);
        let data = await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function getPeople() {
    var inputData = document.getElementById("input-people").value;
    console.log("User entered: " + inputData);

    let url = "https://swapi.dev/api/people/?search=" + inputData;

    try {
        let res = await fetch(url);
        let data = await res.json();

        let container = document.querySelector('.container');
        container.innerHTML = data.count + data.results[0].name;
        console.log(data)
    } catch (error) {
        console.log(error);
    }
  }
  

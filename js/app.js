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

// JavaScript code
async function processInput() {
    var inputData = document.getElementById("input-data").value;
    console.log("User entered: " + inputData);

    let url = "https://swapi.dev/api/people/?search=" + inputData;

    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
  }
  

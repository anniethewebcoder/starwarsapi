async function getPerson() {
  const currentURL = new URL(window.location.toString())
  const personID = currentURL.searchParams.get('personID')
  const getPersonURL = `https://swapi.dev/api/people/${personID}`


  // form url 
  

  console.log(currentURL)
  console.log(currentURL.searchParams.get('personID'))

  // add name
  const name = 'Luke Skywalker'
  document.querySelector('.name').innerHTML = name


}
interface Pokemon {
  id: number,
  name: string,
}

fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json())
  .then((res) => {
    let response : Pokemon = res.results;
    Object.keys(response).map(i => {
      console.log(response[i].name)
    })
  })

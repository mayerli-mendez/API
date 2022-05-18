
const consultarPokemon = (id,number) => 
{
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
        //Muestra los pokemones
      pintarPokemon(data,number)
    })

    .catch((error) => {
      console.log(error);
    });
};


const btnSeleccionar = () => 
{
  let primerPokemon = Math.round(Math.random() * 150);
  let segundoPokemon = Math.round(Math.random() * 150);
  consultarPokemon(primerPokemon,1);
  consultarPokemon(segundoPokemon,2);
};

btnSeleccionar()

const lista = document.getElementById("listarpokemon")

const pintarPokemon = (data, id) =>
{
  //OBTENER EL DIV 1 O 2   
  let item = lista.querySelector(`#pok-${id}`);
  //PINTAR EL POKEMON
  item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
  //ASIGNAR EL NOMBRE
  item.getElementsByTagName("p")[0].innerHTML = data.name;

}



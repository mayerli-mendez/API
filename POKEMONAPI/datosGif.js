let urlGif = "https://api.giphy.com/v1/gifs/random?api_key=JFxM4euCNTAHbogxeVRFErjY7WPPjv4r&tag=pokemon";

document.addEventListener("DOMContentLoaded", Iniciar);

function Iniciar()
{
  console.log(urlGif);
  fetch(urlGif)
  .then((response) => 
  {
  return response.json();
  })

  .then((data) => {

  const lista = document.getElementById("listargift")
  let item = lista.querySelector(`#gif`);
  item.getElementsByTagName("img")[0].setAttribute("src", data.data.images.original.url);


  })

  .catch((error) =>
  {
  console.log(error);
  });
};
// Univ. Mayra Fabiola Gutierrez Herrera - CI: 13789973 LP
let pagina = 0;
function mostrarPokemons() {
  const nombre = document.getElementById("filtro").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pagina * 20}`;

  fetch(url)
    .then(res => res.json())
    .then(async data => {
      const cont = document.getElementById("contenedor");
      cont.innerHTML = "";
      for (let p of data.results) {
        if (nombre && !p.name.includes(nombre)) continue;
        const resDetalle = await fetch(p.url);
        const poke = await resDetalle.json();
        cont.innerHTML += `
          <div style="display:inline-block; margin:10px; text-align:center">
            <img src="${poke.sprites.front_default}" width="100"><br>${p.name}
          </div>`;
      }
    })
    .catch(() => {
      document.getElementById("contenedor").innerHTML = "Error al cargar Pokémon.";
    });
}

mostrarPokemons();

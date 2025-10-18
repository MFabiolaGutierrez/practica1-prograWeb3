// Univ. Mayra Fabiola Gutierrez Herrera - CI: 13789973 LP
function buscarDigimon() {
  let texto = document.getElementById("busqueda").value.toLowerCase();
  let url;

  if (texto === "") {
    url = "https://digimon-api.vercel.app/api/digimon";
  } else if (["rookie","champion","ultimate","fresh","training","mega","armor"].includes(texto)) {
    url = `https://digimon-api.vercel.app/api/digimon/level/${texto}`;
  } else {
    url = `https://digimon-api.vercel.app/api/digimon/name/${texto}`;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let tabla = document.getElementById("resultado");
      tabla.innerHTML = "";
      data.forEach(d => {
        tabla.innerHTML += `<tr><td>${d.name}</td><td>${d.level}</td></tr>`;
      });
    })
    .catch(() => {
      document.getElementById("resultado").innerHTML =
        "<tr><td colspan='2'>No se encontró resultado</td></tr>";
    });
}

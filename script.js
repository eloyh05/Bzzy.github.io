const list = document.getElementById("music-list");
const search = document.getElementById("search");
const searchContainer = document.getElementById("searchContainer");

function mostrarMusica(data) {
  list.innerHTML = "";

  data.forEach(item => {
    const a = document.createElement("a");
    a.href = item.link;
    a.className = "card";

    a.innerHTML = `
      <img src="${item.portada}" alt="${item.titulo}">
      <h4>${item.titulo}</h4>
      <p>${item.artista}</p>
    `;

    list.appendChild(a);
  });
}

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  const filtrado = musica.filter(item =>
    item.titulo.toLowerCase().includes(value) ||
    item.artista.toLowerCase().includes(value)
  );

  mostrarMusica(filtrado);
});


if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", () => {
    const teclado = window.innerHeight - window.visualViewport.height;

    if (teclado > 100) {
      searchContainer.style.bottom = teclado + 20 + "px";
    } else {
      searchContainer.style.bottom = "20px";
    }
  });
}

mostrarMusica(musica);
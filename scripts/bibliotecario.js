let tituloLibro = document.getElementById("Titulo");
let autorLibro = document.getElementById("Autor");
let editorialLibro = document.getElementById("Editorial");
let categoriaLibro = document.getElementById("Categoria");
let fechaPublicacion = document.getElementById("fecha");
let btnLibro = document.getElementById("btnEnviar");
let listaHtmlLibros = document.getElementById("lista");
let listaLibros = [];

btnLibro.addEventListener("click", () => {
  listaLibros.push({
    titulo: tituloLibro.value,
    autor: autorLibro.value,
    editorial: editorialLibro.value,
    categoria: categoriaLibro.value,
    fecha: fechaPublicacion.value,
    id: Date.now()
  });
  actualizarListaLibros();
});

let actualizarListaLibros = () => {
  listaHtmlLibros.innerHTML = "";
  for (let i = 0; i < listaLibros.length; i++) {
    let libro = listaLibros[i];
    let display = `<ul><li>${i + 1}</li><li>${libro.titulo}</li><li>${
      libro.autor
    }</li><li>${libro.editorial}</li><li>${libro.categoria}</li><li>${
      libro.fecha
    }</li><li><button data-id="${libro.id}" type="submit" class="btnBorrar">Borrar</button></li></ul>`;
    listaHtmlLibros.innerHTML += display;
  }
  let botonesBorrar = document.querySelectorAll(".btnBorrar");
  botonesBorrar.forEach(btn => {
    btn.addEventListener("click", () => {
      const idBorrar = parseInt(btn.getAttribute("data-id"));
      borrarLibro(idBorrar);
      actualizarListaLibros();
    });
  });
};

let borrarLibro = (id) => {
   listaLibros = listaLibros.filter(libro => libro.id !== id)
};

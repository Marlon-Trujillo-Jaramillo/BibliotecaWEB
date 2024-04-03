let nombreUsuario = document.getElementById("nombre");
let emailUsuario = document.getElementById("email");
let fechaNacimiento = document.getElementById("fecha");
let btnUsuario = document.getElementById("btnEnviarUsuario");
let listaHtmlUsuarios = document.getElementById("lista");
let listaUsuarios = [];

btnUsuario.addEventListener("click", () => {
  listaUsuarios.push({
    nombre: nombreUsuario.value,
    email: emailUsuario.value,
    fecha: fechaNacimiento.value,
    id: Date.now(),
  });
  actualizarListaUsuarios();
});

let actualizarListaUsuarios = () => {
  listaHtmlUsuarios.innerHTML = "";
  for (let i = 0; i < listaUsuarios.length; i++) {
    let usuario = listaUsuarios[i];
    let display = `<ul><li>${i + 1}</li><li>${usuario.nombre}</li><li>${
      usuario.email
    }</li><li>${usuario.fecha}</li><li><button data-id="${
      usuario.id
    }" type="submit" class="btnBorrarUsuario">Borrar</button></li></ul>`;
    listaHtmlUsuarios.innerHTML += display;
  }
  let botonesBorrarUsuario = document.querySelectorAll(".btnBorrarUsuario");
  botonesBorrarUsuario.forEach(btn => {
    btn.addEventListener("click", () => {
      const idBorrar = parseInt(btn.getAttribute("data-id"));
      borrarUsuario(idBorrar);
      actualizarListaUsuarios();
    });
  });
};

let borrarUsuario = (id) => {
   listaUsuarios = listaUsuarios.filter(usuario => usuario.id !== id)
};

const formReserva = document.querySelector("#formNuevaReserva");
const reservaId = formReserva.dataset.id;

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const fecha_salida = document.querySelector("#fecha_salida");
const destino = document.querySelector("#destino");
const cantidad_personas = document.querySelector("#cantidad_personas");
const dni = document.querySelector("#dni");
const nro_asiento = document.querySelector("#nro_asiento");
const email = document.querySelector("#email");

document.addEventListener("DOMContentLoaded", async () => {
  // Traemos la reserva que se va a editar
  const response = await fetch(`/api/${reservaId}`);
  const data = await response.json();

  // Mostrar en el formulario los datos de la reserva que se quiere actualizar
  nombre.value = data.nombre;
  apellido.value = data.apellido;
  fecha_solicitud.value = dayjs(data.fecha_solicitud).format("DD-MM-YYYY HH:mm");
  fecha_salida.value = dayjs(data.fecha_salida).format("DD-MM-YYYY HH:mm");
  destino.value = data.destino;
  cantidad_personas.value = data.cantidad_personas;
  dni.value = data.dni;
  nro_asiento.value = data.nro_asiento;
  email.value = data.email;
  costo.value = data.costo;

});

formReserva.addEventListener("submit", async (e) => {
  e.preventDefault();

  reservaActualizada = {
    nombre: nombre.value,
    apellido: apellido.value,
    fecha_solicitud: fecha_solicitud.value,
    fecha_salida: fecha_salida.value,
    destino: destino.value,
    cantidad_personas: cantidad_personas.value,
    dni: dni.value,
    nro_asiento: nro_asiento.value,
    email: email.value,
    costo: costo.value,
  };

  // Se envían los nuevos datos al servidor express
  const response = await fetch(`http://localhost:4800/api/${reservaId}`, {
    method: "PUT",
    body: JSON.stringify(reservaActualizada),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // const data = await response.json();

  // Mostrar mensajes al usuario
  alert(data.message);

  // Redireccionar al usuario
});

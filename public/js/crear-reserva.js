const formCrearReserva = document.querySelector("#formNuevaReserva");

formCrearReserva.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const fecha_salida = document.querySelector("#fecha_salida").value;
  const destino = document.querySelector("#destino").value;
  const cantidad_personas = document.querySelector("#cantidad_personas").value;
  const dni = document.querySelector("#dni").value;
  const nro_asiento = document.querySelector("#nro_asiento").value;
  const email = document.querySelector("#email").value;

  const reserva = {
    nombre,
    apellido,
    fecha_salida,
    destino,
    cantidad_personas,
    dni,
    nro_asiento,
    email,
  };

  const response = await fetch("http://localhost:4800/api", {
    method: "POST",
    body: JSON.stringify(reserva),
    headers: {
      "Content-Type": "application/json", // Cuando se envían datos JSON al servidor
    },
  });

  const data = await response.json();

  alert(data.message);
  window.location.href = "/";
});

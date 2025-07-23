const ramos = [
  // Primer año
  { nombre: "Acción y Teatralidad", reqs: [] },
  { nombre: "Autoconocimiento Actoral", reqs: [] },
  { nombre: "Teoría de la Representación", reqs: [] },
  { nombre: "Análisis Dramatúrgico I", reqs: [] },
  { nombre: "Tutoría I", reqs: [] },
  { nombre: "Historia del Arte", reqs: [] },
  { nombre: "Inglés I", reqs: [] },

  { nombre: "Creación de Personaje", reqs: [] },
  { nombre: "El Actor y el Colectivo", reqs: [] },
  { nombre: "Teoría del Teatro", reqs: [] },
  { nombre: "Análisis Dramatúrgico II", reqs: ["Análisis Dramatúrgico I"] },
  { nombre: "Tutoría II", reqs: ["Tutoría I"] },
  { nombre: "Estética", reqs: ["Historia del Arte"] },
  { nombre: "Inglés II", reqs: ["Inglés I"] },

  // Segundo año
  { nombre: "Personaje e Investigación", reqs: ["Acción y Teatralidad", "Creación de Personaje"] },
  { nombre: "Análisis Escénico", reqs: [] },
  { nombre: "Práctica de Observación I", reqs: [] },
  { nombre: "Inglés III", reqs: ["Inglés II"] },
  { nombre: "CFG", reqs: [] },

  { nombre: "Puesta en Escena", reqs: ["Personaje e Investigación"] },
  { nombre: "Taller de Dirección", reqs: ["Teoría del Teatro", "Teoría de la Representación"] },
  { nombre: "Taller de Dramaturgia", reqs: [] },
  { nombre: "Introducción a la Investigación en el Arte", reqs: ["Personaje e Investigación", "Análisis Escénico"] },
  { nombre: "Práctica de Observación II", reqs: ["Práctica de Observación I"] },

  // Tercer año
  { nombre: "Creación Actoral I", reqs: ["Puesta en Escena", "Introducción a la Investigación en el Arte"] },
  { nombre: "Investigación Interdisciplinar", reqs: [] },
  { nombre: "Didáctica del Teatro I", reqs: [] },
  { nombre: "Metodología de la Investigación", reqs: [] },
  { nombre: "Electivo Disciplinar 1", reqs: [] },
  { nombre: "Electivo Disciplinar 2", reqs: [] },
  { nombre: "Taller Interdisciplinario", reqs: ["Puesta en Escena"] },

  { nombre: "Creación Actoral II", reqs: ["Creación Actoral I"] },
  { nombre: "Creación Interdisciplinar", reqs: ["Investigación Interdisciplinar"] },
  { nombre: "Didáctica del Teatro II", reqs: ["Didáctica del Teatro I"] },
  { nombre: "Investigación Teatral", reqs: ["Metodología de la Investigación"] },
  { nombre: "Electivo Disciplinar 3", reqs: [] },
  { nombre: "Electivo Disciplinar 4", reqs: [] },

  // Cuarto año
  { nombre: "Creación Actoral III", reqs: ["Creación Actoral II"] },
  { nombre: "Seminario de Dirección", reqs: ["Taller de Dirección"] },
  { nombre: "Creación Dramatúrgica", reqs: ["Taller de Dramaturgia"] },
  { nombre: "Tutoría Investigación Aplicada I", reqs: [] },
  { nombre: "Electivo Disciplinar 5", reqs: [] },
  { nombre: "Electivo Disciplinar 6", reqs: [] },

  { nombre: "Creación Actoral IV", reqs: ["Creación Actoral III"] },
  { nombre: "Creación Escénica", reqs: ["Seminario de Dirección", "Creación Dramatúrgica"] },
  { nombre: "Tutoría Investigación Aplicada II", reqs: ["Tutoría Investigación Aplicada I"] },
  { nombre: "Electivo Disciplinar 7", reqs: [] },
  { nombre: "Electivo Disciplinar 8", reqs: [] },

  // Quinto año
  { nombre: "Práctica Profesional", reqs: ["Creación Actoral IV", "Tutoría Investigación Aplicada II"] },
  { nombre: "Tutoría de Práctica", reqs: ["Creación Actoral IV", "Tutoría Investigación Aplicada II"] },

  { nombre: "Taller de Memoria", reqs: ["Práctica Profesional", "Tutoría de Práctica"] }
];

function crearMalla() {
  const contenedor = document.getElementById("malla");

  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.classList.add("ramo");
    div.innerText = ramo.nombre;
    if (ramo.reqs.length > 0) {
      div.classList.add("locked");
    }
    div.addEventListener("click", () => toggleRamo(ramo.nombre, div));
    contenedor.appendChild(div);
  });

  actualizarEstado();
}

function toggleRamo(nombre, div) {
  if (div.classList.contains("locked")) return;
  div.classList.toggle("aprobado");
  actualizarEstado();
}

function actualizarEstado() {
  const aprobados = new Set(
    Array.from(document.querySelectorAll(".ramo.aprobado")).map(r => r.innerText)
  );

  document.querySelectorAll(".ramo").forEach(div => {
    const ramo = ramos.find(r => r.nombre === div.innerText);
    const requisitos = ramo.reqs;
    const desbloqueado = requisitos.every(req => aprobados.has(req));

    if (!div.classList.contains("aprobado")) {
      if (requisitos.length === 0 || desbloqueado) {
        div.classList.remove("locked");
      } else {
        div.classList.add("locked");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", crearMalla);

const ramos = {
  // Semestre 1
  "Acción y Teatralidad": [],
  "Autoconocimiento Actoral": [],
  "Teoría de la Representación": [],
  "Análisis Dramatúrgico I": [],
  "Tutoría I": [],
  "Historia del Arte": [],
  "Inglés I": [],
  // Semestre 2
  "Creación de Personaje": [],
  "El Actor y el Colectivo": [],
  "Teoría del Teatro": [],
  "Análisis Dramatúrgico II": ["Análisis Dramatúrgico I"],
  "Tutoría II": ["Tutoría I"],
  "Estética": ["Historia del Arte"],
  "Inglés II": ["Inglés I"],
  // Semestre 3
  "Personaje e Investigación": ["Acción y Teatralidad", "Creación de Personaje"],
  "Análisis Escénico": [],
  "Práctica de Observación I": [],
  "Inglés III": ["Inglés II"],
  "CFG": [],
  // Semestre 4
  "Puesta en Escena": ["Personaje e Investigación"],
  "Taller de Dirección": ["Teoría de la Representación", "Teoría del Teatro"],
  "Taller de Dramaturgia": [],
  "Introducción a la Investigación en el Arte": ["Análisis Escénico", "Personaje e Investigación"],
  "Práctica de Observación II": ["Práctica de Observación I"],
  // Semestre 5
  "Creación Actoral I": ["Puesta en Escena", "Introducción a la Investigación en el Arte"],
  "Investigación Interdisciplinar": [],
  "Didáctica del Teatro I": [],
  "Metodología de la Investigación": [],
  "Curso Electivo I": [],
  "Curso Electivo II": [],
  "Taller Interdisciplinario": ["Puesta en Escena"],
  // Semestre 6
  "Creación Actoral II": ["Creación Actoral I"],
  "Creación Interdisciplinar": ["Investigación Interdisciplinar"],
  "Didáctica del Teatro II": ["Didáctica del Teatro I"],
  "Investigación Teatral": ["Metodología de la Investigación"],
  "Curso Electivo III": [],
  "Curso Electivo IV": [],
  // Semestre 7
  "Creación Actoral III": ["Creación Actoral II"],
  "Seminario de Dirección": ["Taller de Dirección"],
  "Creación Dramatúrgica": ["Taller de Dramaturgia"],
  "Tutoría de Investigación Aplicada I": [],
  "Curso Electivo V": [],
  "Curso Electivo VI": [],
  // Semestre 8
  "Creación Actoral IV": ["Creación Actoral III"],
  "Creación Escénica": ["Seminario de Dirección", "Creación Dramatúrgica"],
  "Tutoría de Investigación Aplicada II": ["Tutoría de Investigación Aplicada I"],
  "Curso Electivo VII": [],
  "Curso Electivo VIII": [],
  // Semestre 9
  "Práctica Profesional": ["Creación Actoral IV", "Tutoría de Investigación Aplicada II"],
  "Tutoría de Práctica": ["Creación Actoral IV", "Tutoría de Investigación Aplicada II"],
  // Semestre 10
  "Taller de Memoria": ["Práctica Profesional", "Tutoría de Práctica"],
};

const semestres = [
  ["Acción y Teatralidad", "Autoconocimiento Actoral", "Teoría de la Representación", "Análisis Dramatúrgico I", "Tutoría I", "Historia del Arte", "Inglés I"],
  ["Creación de Personaje", "El Actor y el Colectivo", "Teoría del Teatro", "Análisis Dramatúrgico II", "Tutoría II", "Estética", "Inglés II"],
  ["Personaje e Investigación", "Análisis Escénico", "Práctica de Observación I", "Inglés III", "CFG"],
  ["Puesta en Escena", "Taller de Dirección", "Taller de Dramaturgia", "Introducción a la Investigación en el Arte", "Práctica de Observación II"],
  ["Creación Actoral I", "Investigación Interdisciplinar", "Didáctica del Teatro I", "Metodología de la Investigación", "Curso Electivo I", "Curso Electivo II", "Taller Interdisciplinario"],
  ["Creación Actoral II", "Creación Interdisciplinar", "Didáctica del Teatro II", "Investigación Teatral", "Curso Electivo III", "Curso Electivo IV"],
  ["Creación Actoral III", "Seminario de Dirección", "Creación Dramatúrgica", "Tutoría de Investigación Aplicada I", "Curso Electivo V", "Curso Electivo VI"],
  ["Creación Actoral IV", "Creación Escénica", "Tutoría de Investigación Aplicada II", "Curso Electivo VII", "Curso Electivo VIII"],
  ["Práctica Profesional", "Tutoría de Práctica"],
  ["Taller de Memoria"],
];

const aprobados = new Set();

function createRamo(nombre) {
  const div = document.createElement("div");
  div.className = "ramo disabled";
  div.textContent = nombre;
  div.dataset.nombre = nombre;
  div.addEventListener("click", () => toggleRamo(div));
  return div;
}

function toggleRamo(div) {
  const nombre = div.dataset.nombre;
  if (!div.classList.contains("disabled")) {
    if (div.classList.contains("aprobado")) {
      div.classList.remove("aprobado");
      aprobados.delete(nombre);
    } else {
      div.classList.add("aprobado");
      aprobados.add(nombre);
    }
    actualizarEstado();
  }
}

function actualizarEstado() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    const requisitos = ramos[nombre] || [];
    const habilitado = requisitos.every(req => aprobados.has(req));
    if (habilitado) {
      div.classList.remove("disabled");
    } else {
      div.classList.add("disabled");
    }
  });
}

function construirMalla() {
  const contenedor = document.getElementById("malla-container");
  semestres.forEach((sem, i) => {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";
    semestreDiv.innerHTML = `<h2>Semestre ${i + 1}</h2>`;
    sem.forEach(ramo => semestreDiv.appendChild(createRamo(ramo)));
    contenedor.appendChild(semestreDiv);
  });
  actualizarEstado();
}

document.addEventListener("DOMContentLoaded", construirMalla);

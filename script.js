const ramos = [
  // Primer Año
  { nombre: "Acción y Teatralidad", semestre: "I Semestre", requisitos: [] },
  { nombre: "Autoconocimiento Actoral", semestre: "I Semestre", requisitos: [] },
  { nombre: "Teoría de la Representación", semestre: "I Semestre", requisitos: [] },
  { nombre: "Análisis Dramatúrgico I", semestre: "I Semestre", requisitos: [] },
  { nombre: "Tutoría I", semestre: "I Semestre", requisitos: [] },
  { nombre: "Historia del Arte", semestre: "I Semestre", requisitos: [] },
  { nombre: "Inglés I", semestre: "I Semestre", requisitos: [] },

  { nombre: "Creación de Personaje", semestre: "II Semestre", requisitos: [] },
  { nombre: "El Actor y el Colectivo", semestre: "II Semestre", requisitos: [] },
  { nombre: "Teoría del Teatro", semestre: "II Semestre", requisitos: [] },
  { nombre: "Análisis Dramatúrgico II", semestre: "II Semestre", requisitos: ["Análisis Dramatúrgico I"] },
  { nombre: "Tutoría II", semestre: "II Semestre", requisitos: ["Tutoría I"] },
  { nombre: "Estética", semestre: "II Semestre", requisitos: ["Historia del Arte"] },
  { nombre: "Inglés II", semestre: "II Semestre", requisitos: ["Inglés I"] },

  // Segundo Año
  { nombre: "Personaje e Investigación", semestre: "III Semestre", requisitos: ["Acción y Teatralidad", "Creación de Personaje"] },
  { nombre: "Análisis Escénico", semestre: "III Semestre", requisitos: [] },
  { nombre: "Práctica de Observación I", semestre: "III Semestre", requisitos: [] },
  { nombre: "Inglés III", semestre: "III Semestre", requisitos: ["Inglés II"] },
  { nombre: "CFG", semestre: "III Semestre", requisitos: [] },

  { nombre: "Puesta en Escena", semestre: "IV Semestre", requisitos: ["Personaje e Investigación"] },
  { nombre: "Taller de Dirección", semestre: "IV Semestre", requisitos: ["Teoría del Teatro", "Teoría de la Representación"] },
  { nombre: "Taller de Dramaturgia", semestre: "IV Semestre", requisitos: [] },
  { nombre: "Introducción a la Investigación en el Arte", semestre: "IV Semestre", requisitos: ["Análisis Escénico", "Personaje e Investigación"] },
  { nombre: "Práctica de Observación II", semestre: "IV Semestre", requisitos: ["Práctica de Observación I"] },

  // Tercer Año
  { nombre: "Creación Actoral I", semestre: "V Semestre", requisitos: ["Puesta en Escena", "Introducción a la Investigación en el Arte"] },
  { nombre: "Investigación Interdisciplinar", semestre: "V Semestre", requisitos: [] },
  { nombre: "Didáctica del Teatro I", semestre: "V Semestre", requisitos: [] },
  { nombre: "Metodología de la Investigación", semestre: "V Semestre", requisitos: [] },
  { nombre: "Curso Electivo I", semestre: "V Semestre", requisitos: [] },
  { nombre: "Curso Electivo II", semestre: "V Semestre", requisitos: [] },
  { nombre: "Taller Interdisciplinario", semestre: "V Semestre", requisitos: ["Puesta en Escena"] },

  { nombre: "Creación Actoral II", semestre: "VI Semestre", requisitos: ["Creación Actoral I"] },
  { nombre: "Creación Interdisciplinar", semestre: "VI Semestre", requisitos: ["Investigación Interdisciplinar"] },
  { nombre: "Didáctica del Teatro II", semestre: "VI Semestre", requisitos: ["Didáctica del Teatro I"] },
  { nombre: "Investigación Teatral", semestre: "VI Semestre", requisitos: ["Metodología de la Investigación"] },
  { nombre: "Curso Electivo III", semestre: "VI Semestre", requisitos: [] },
  { nombre: "Curso Electivo IV", semestre: "VI Semestre", requisitos: [] },

  // Cuarto Año
  { nombre: "Creación Actoral III", semestre: "VII Semestre", requisitos: ["Creación Actoral II"] },
  { nombre: "Seminario de Dirección", semestre: "VII Semestre", requisitos: ["Taller de Dirección"] },
  { nombre: "Creación Dramatúrgica", semestre: "VII Semestre", requisitos: ["Taller de Dramaturgia"] },
  { nombre: "Tutoría de Investigación Aplicada I", semestre: "VII Semestre", requisitos: [] },
  { nombre: "Curso Electivo V", semestre: "VII Semestre", requisitos: [] },
  { nombre: "Curso Electivo VI", semestre: "VII Semestre", requisitos: [] },

  { nombre: "Creación Actoral IV", semestre: "VIII Semestre", requisitos: ["Creación Actoral III"] },
  { nombre: "Creación Escénica", semestre: "VIII Semestre", requisitos: ["Seminario de Dirección", "Creación Dramatúrgica"] },
  { nombre: "Tutoría de Investigación Aplicada II", semestre: "VIII Semestre", requisitos: ["Tutoría de Investigación Aplicada I"] },
  { nombre: "Curso Electivo VII", semestre: "VIII Semestre", requisitos: [] },
  { nombre: "Curso Electivo VIII", semestre: "VIII Semestre", requisitos: [] },

  // Quinto Año
  { nombre: "Práctica Profesional", semestre: "IX Semestre", requisitos: ["Creación Actoral IV"] },
  { nombre: "Tutoría de Práctica", semestre: "IX Semestre", requisitos: ["Creación Actoral IV", "Tutoría de Investigación Aplicada II"] },

  { nombre: "Taller de Memoria", semestre: "X Semestre", requisitos: ["Práctica Profesional", "Tutoría de Práctica"] }
];

const estadoRamos = {};

function crearMalla() {
  const container = document.getElementById("malla-container");
  const semestres = [...new Set(ramos.map(r => r.semestre))];

  semestres.forEach(semestre => {
    const semDiv = document.createElement("div");
    semDiv.className = "semestre";
    const h2 = document.createElement("h2");
    h2.textContent = semestre;
    semDiv.appendChild(h2);

    const ramosSem = ramos.filter(r => r.semestre === semestre);
    ramosSem.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo disabled";
      div.textContent = ramo.nombre;
      div.onclick = () => toggleRamo(ramo.nombre, div);
      div.id = `ramo-${ramo.nombre.replace(/\s+/g, "-")}`;
      semDiv.appendChild(div);
      estadoRamos[ramo.nombre] = { aprobado: false, div, requisitos: ramo.requisitos };
    });

    container.appendChild(semDiv);
  });

  actualizarDisponibilidad();
}

function toggleRamo(nombre, div) {
  const ramo = estadoRamos[nombre];
  if (div.classList.contains("disabled")) return;

  ramo.aprobado = !ramo.aprobado;
  div.classList.toggle("aprobado", ramo.aprobado);
  actualizarDisponibilidad();
}

function actualizarDisponibilidad() {
  Object.entries(estadoRamos).forEach(([nombre, data]) => {
    if (data.aprobado) return;

    const habilitado = data.requisitos.every(req => estadoRamos[req]?.aprobado);
    data.div.classList.toggle("disabled", !habilitado);
  });
}

crearMalla();

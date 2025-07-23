// Base de datos de ramos
const ramos = [
  // Primer año
  { nombre: "Acción y Teatralidad", semestre: "I", creditos: 8, requiere: [] },
  { nombre: "Autoconocimiento Actoral", semestre: "I", creditos: 4, requiere: [] },
  { nombre: "Teoría de la Representación", semestre: "I", creditos: 5, requiere: [] },
  { nombre: "Análisis Dramatúrgico I", semestre: "I", creditos: 4, requiere: [] },
  { nombre: "Tutoría I", semestre: "I", creditos: 3, requiere: [] },
  { nombre: "Historia del Arte", semestre: "I", creditos: 3, requiere: [] },
  { nombre: "Inglés I", semestre: "I", creditos: 3, requiere: [] },

  { nombre: "Creación de Personaje", semestre: "II", creditos: 8, requiere: ["Acción y Teatralidad"] },
  { nombre: "El Actor y el Colectivo", semestre: "II", creditos: 4, requiere: [] },
  { nombre: "Teoría del Teatro", semestre: "II", creditos: 5, requiere: [] },
  { nombre: "Análisis Dramatúrgico II", semestre: "II", creditos: 4, requiere: ["Análisis Dramatúrgico I"] },
  { nombre: "Tutoría II", semestre: "II", creditos: 3, requiere: ["Tutoría I"] },
  { nombre: "Estética", semestre: "II", creditos: 3, requiere: ["Historia del Arte"] },
  { nombre: "Inglés II", semestre: "II", creditos: 3, requiere: ["Inglés I"] },

  // Segundo año
  { nombre: "Personaje e Investigación", semestre: "III", creditos: 12, requiere: ["Acción y Teatralidad", "Creación de Personaje"] },
  { nombre: "Análisis Escénico", semestre: "III", creditos: 5, requiere: [] },
  { nombre: "Práctica de Observación I", semestre: "III", creditos: 3, requiere: [] },
  { nombre: "Inglés III", semestre: "III", creditos: 3, requiere: ["Inglés II"] },
  { nombre: "CFG", semestre: "III", creditos: 2, requiere: [] },

  { nombre: "Puesta en Escena", semestre: "IV", creditos: 10, requiere: ["Personaje e Investigación"] },
  { nombre: "Taller de Dirección", semestre: "IV", creditos: 4, requiere: ["Teoría de la Representación", "Teoría del Teatro"] },
  { nombre: "Taller de Dramaturgia", semestre: "IV", creditos: 4, requiere: [] },
  { nombre: "Introducción a la Investigación en el Arte", semestre: "IV", creditos: 4, requiere: ["Análisis Escénico", "Personaje e Investigación"] },
  { nombre: "Práctica de Observación II", semestre: "IV", creditos: 3, requiere: ["Práctica de Observación I"] },

  // Tercer año
  { nombre: "Creación Actoral I", semestre: "V", creditos: 12, requiere: ["Puesta en Escena", "Introducción a la Investigación en el Arte"] },
  { nombre: "Investigación Interdisciplinar", semestre: "V", creditos: 2, requiere: [] },
  { nombre: "Didáctica del Teatro I", semestre: "V", creditos: 2, requiere: [] },
  { nombre: "Metodología de la Investigación", semestre: "V", creditos: 5, requiere: [] },
  { nombre: "Curso Electivo de Formación Disciplinar (1)", semestre: "V", creditos: 3, requiere: [] },
  { nombre: "Curso Electivo de Formación Disciplinar (2)", semestre: "V", creditos: 3, requiere: [] },
  { nombre: "Taller Interdisciplinario", semestre: "V", creditos: 3, requiere: ["Puesta en Escena"] },

  { nombre: "Creación Actoral II", semestre: "VI", creditos: 12, requiere: ["Creación Actoral I"] },
  { nombre: "Creación Interdisciplinar", semestre: "VI", creditos: 5, requiere: ["Investigación Interdisciplinar"] },
  { nombre: "Didáctica del Teatro II", semestre: "VI", creditos: 2, requiere: ["Didáctica del Teatro I"] },
  { nombre: "Investigación Teatral", semestre: "VI", creditos: 5, requiere: ["Metodología de la Investigación"] },
  { nombre: "Curso Electivo de Formación Disciplinar (3)", semestre: "VI", creditos: 3, requiere: [] },
  { nombre: "Curso Electivo de Formación Disciplinar (4)", semestre: "VI", creditos: 3, requiere: [] },

  // Cuarto año
  { nombre: "Creación Actoral III", semestre: "VII", creditos: 11, requiere: ["Creación Actoral II"] },
  { nombre: "Seminario de Dirección", semestre: "VII", creditos: 4, requiere: ["Taller de Dirección"] },
  { nombre: "Creación Dramatúrgica", semestre: "VII", creditos: 3, requiere: ["Taller de Dramaturgia"] },
  { nombre: "Tutoría de Investigación Aplicada I", semestre: "VII", creditos: 6, requiere: [] },
  { nombre: "Curso Electivo de Formación Disciplinar (5)", semestre: "VII", creditos: 3, requiere: [] },
  { nombre: "Curso Electivo de Formación Disciplinar (6)", semestre: "VII", creditos: 3, requiere: [] },

  { nombre: "Creación Actoral IV", semestre: "VIII", creditos: 11, requiere: ["Creación Actoral III"] },
  { nombre: "Creación Escénica", semestre: "VIII", creditos: 7, requiere: ["Seminario de Dirección", "Creación Dramatúrgica"] },
  { nombre: "Tutoría de Investigación Aplicada II", semestre: "VIII", creditos: 6, requiere: ["Tutoría de Investigación Aplicada I"] },
  { nombre: "Curso Electivo de Formación Disciplinar (7)", semestre: "VIII", creditos: 3, requiere: [] },
  { nombre: "Curso Electivo de Formación Disciplinar (8)", semestre: "VIII", creditos: 3, requiere: [] },

  // Quinto año
  { nombre: "Práctica Profesional", semestre: "IX", creditos: 20, requiere: ["Creación Actoral IV"] },
  { nombre: "Tutoría de Práctica", semestre: "IX", creditos: 10, requiere: ["Creación Actoral IV", "Tutoría de Investigación Aplicada II"] },

  { nombre: "Taller de Memoria", semestre: "X", creditos: 30, requiere: ["Práctica Profesional", "Tutoría de Práctica"] }
];

let aprobados = new Set(JSON.parse(localStorage.getItem("ramosAprobados") || "[]"));

function construirMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  const agrupado = {};
  ramos.forEach(ramo => {
    if (!agrupado[ramo.semestre]) agrupado[ramo.semestre] = [];
    agrupado[ramo.semestre].push(ramo);
  });

  for (const semestre of Object.keys(agrupado)) {
    const box = document.createElement("div");
    box.className = "semestre";
    box.innerHTML = `<h3>Semestre ${semestre}</h3>`;

    for (const ramo of agrupado[semestre]) {
      const div = document.createElement("div");
      const estaAprobado = aprobados.has(ramo.nombre);
      const bloqueado = !estaAprobado && !ramoDesbloqueado(ramo);

      div.className = `ramo ${bloqueado ? "bloqueado" : ""}`;
      div.textContent = `${ramo.nombre} [${ramo.creditos} SCT]`;
      div.addEventListener("click", () => toggleRamo(ramo.nombre));

      box.appendChild(div);
    }

    contenedor.appendChild(box);
  }
}

function ramoDesbloqueado(ramo) {
  if (!ramo.requiere) return true;
  return ramo.requiere.every(nombre => aprobados.has(nombre));
}

function toggleRamo(nombre) {
  const ramo = ramos.find(r => r.nombre === nombre);
  if (!ramoDesbloqueado(ramo)) return;

  if (aprobados.has(nombre)) {
    aprobados.delete(nombre);
  } else {
    aprobados.add(nombre);
  }

  localStorage.setItem("ramosAprobados", JSON.stringify([...aprobados]));
  construirMalla();
}

construirMalla();

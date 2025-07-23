const ramos = [
  {
    semestre: "I Semestre",
    ramos: [
      { nombre: "Acción y Teatralidad", id: "accion", abre: ["personaje", "investigacion"] },
      { nombre: "Autoconocimiento Actoral", id: "auto" },
      { nombre: "Teoría de la Representación", id: "teoria_rep", abre: ["direccion"] },
      { nombre: "Análisis Dramatúrgico I", id: "dram1", abre: ["dram2"] },
      { nombre: "Tutoría I", id: "tut1", abre: ["tut2"] },
      { nombre: "Historia del Arte", id: "historia", abre: ["estetica"] },
      { nombre: "Inglés I", id: "ing1", abre: ["ing2"] }
    ]
  },
  {
    semestre: "II Semestre",
    ramos: [
      { nombre: "Creación de Personaje", id: "creacion", abre: ["personaje", "investigacion"] },
      { nombre: "El Actor y el Colectivo", id: "colectivo" },
      { nombre: "Teoría del Teatro", id: "teatro", abre: ["direccion"] },
      { nombre: "Análisis Dramatúrgico II", id: "dram2", abre: ["seminario_dram"] },
      { nombre: "Tutoría II", id: "tut2" },
      { nombre: "Estética", id: "estetica" },
      { nombre: "Inglés II", id: "ing2", abre: ["ing3"] }
    ]
  },
  {
    semestre: "III Semestre",
    ramos: [
      { nombre: "Personaje e Investigación", id: "personaje", abre: ["puesta", "investigacion_arte"] },
      { nombre: "Análisis Escénico", id: "escenico", abre: ["investigacion_arte"] },
      { nombre: "Práctica de Observación I", id: "observacion1", abre: ["observacion2"] },
      { nombre: "Inglés III", id: "ing3", abre: ["ing4"] },
      { nombre: "CFG", id: "cfg3" }
    ]
  },
  {
    semestre: "IV Semestre",
    ramos: [
      { nombre: "Puesta en Escena", id: "puesta", abre: ["actoral1", "interdisciplinario"] },
      { nombre: "Taller de Dirección", id: "direccion", abre: ["seminario_dir"] },
      { nombre: "Taller de Dramaturgia", id: "dramaturgia", abre: ["creacion_dram"] },
      { nombre: "Introducción a la Investigación en el Arte", id: "investigacion_arte", abre: ["actoral1"] },
      { nombre: "Práctica de Observación II", id: "observacion2" }
    ]
  },
  {
    semestre: "V Semestre",
    ramos: [
      { nombre: "Creación Actoral I", id: "actoral1", abre: ["actoral2"] },
      { nombre: "Investigación Interdisciplinar", id: "inter", abre: ["creacion_inter"] },
      { nombre: "Didáctica del Teatro I", id: "didactica1", abre: ["didactica2"] },
      { nombre: "Metodología de la Investigación", id: "metodologia", abre: ["investigacion_teatro"] },
      { nombre: "Electivo Formación Disciplinar 1", id: "electivo1" },
      { nombre: "Electivo Formación Disciplinar 2", id: "electivo2" },
      { nombre: "Taller Interdisciplinario", id: "interdisciplinario" }
    ]
  },
  {
    semestre: "VI Semestre",
    ramos: [
      { nombre: "Creación Actoral II", id: "actoral2", abre: ["actoral3"] },
      { nombre: "Creación Interdisciplinar", id: "creacion_inter" },
      { nombre: "Didáctica del Teatro II", id: "didactica2" },
      { nombre: "Investigación Teatral", id: "investigacion_teatro" },
      { nombre: "Electivo Formación Disciplinar 3", id: "electivo3" },
      { nombre: "Electivo Formación Disciplinar 4", id: "electivo4" }
    ]
  },
  {
    semestre: "VII Semestre",
    ramos: [
      { nombre: "Creación Actoral III", id: "actoral3", abre: ["actoral4"] },
      { nombre: "Seminario de Dirección", id: "seminario_dir", abre: ["creacion_escenica"] },
      { nombre: "Creación Dramatúrgica", id: "creacion_dram", abre: ["creacion_escenica"] },
      { nombre: "Tutoría de Investigación Aplicada I", id: "tutoria1", abre: ["tutoria2"] },
      { nombre: "Electivo Formación Disciplinar 5", id: "electivo5" },
      { nombre: "Electivo Formación Disciplinar 6", id: "electivo6" }
    ]
  },
  {
    semestre: "VIII Semestre",
    ramos: [
      { nombre: "Creación Actoral IV", id: "actoral4", abre: ["tutoria_practica", "practica"] },
      { nombre: "Creación Escénica", id: "creacion_escenica" },
      { nombre: "Tutoría de Investigación Aplicada II", id: "tutoria2", abre: ["tutoria_practica", "practica"] },
      { nombre: "Electivo Formación Disciplinar 7", id: "electivo7" },
      { nombre: "Electivo Formación Disciplinar 8", id: "electivo8" }
    ]
  },
  {
    semestre: "IX Semestre",
    ramos: [
      { nombre: "Práctica Profesional", id: "practica", abre: ["memoria"] },
      { nombre: "Tutoría de Práctica", id: "tutoria_practica", abre: ["memoria"] }
    ]
  },
  {
    semestre: "X Semestre",
    ramos: [
      { nombre: "Taller de Memoria", id: "memoria" }
    ]
  }
];

const estado = {};

function crearMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  ramos.forEach((sem) => {
    const semDiv = document.createElement("div");
    semDiv.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = sem.semestre;
    semDiv.appendChild(titulo);

    sem.ramos.forEach((ramo) => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;
      div.dataset.id = ramo.id;

      // Requisitos inversos (quién desbloquea a este ramo)
      const requisitos = obtenerRequisitos(ramo.id);

      // Estado guardado o inicial
      const aprobado = localStorage.getItem(ramo.id) === "true";
      estado[ramo.id] = {
        aprobado: aprobado,
        deps: requisitos,
      };

      // ¿Requisitos aprobados?
      const depsAprobados = requisitos.every(dep => localStorage.getItem(dep) === "true");

      if (!aprobado && !depsAprobados) {
        div.classList.add("disabled");
      } else {
        if (aprobado) {
          div.classList.add("aprobado");
        }
      }

      div.onclick = () => aprobarRamo(ramo.id);

      semDiv.appendChild(div);
    });

    container.appendChild(semDiv);
  });
}

function obtenerRequisitos(idRamo) {
  const requisitos = [];
  ramos.forEach(sem => {
    sem.ramos.forEach(ramo => {
      if (ramo.abre && ramo.abre.includes(idRamo)) {
        requisitos.push(ramo.id);
      }
    });
  });
  return requisitos;
}

function aprobarRamo(id) {
  const div = document.querySelector(`[data-id='${id}']`);
  if (div.classList.contains("disabled")) return;

  estado[id].aprobado = !estado[id].aprobado;

  if (estado[id].aprobado) {
    div.classList.add("aprobado");
  } else {
    div.classList.remove("aprobado");
  }

  localStorage.setItem(id, estado[id].aprobado);

  actualizarDesbloqueos();
}

function actualizarDesbloqueos() {
  Object.entries(estado).forEach(([id, dato]) => {
    const div = document.querySelector(`[data-id='${id}']`);
    if (!div) return;

    const depsAprobados = dato.deps.every(dep => estado[dep]?.aprobado);

    if (depsAprobados) {
      div.classList.remove("disabled");
    } else {
      div.classList.add("disabled");
      if (dato.aprobado) {
        dato.aprobado = false;
        div.classList.remove("aprobado");
        localStorage.setItem(id, false);
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  crearMalla();
  actualizarDesbloqueos();
});

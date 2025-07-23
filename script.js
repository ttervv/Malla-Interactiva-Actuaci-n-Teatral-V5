const ramos = [
  { nombre: "Acción y Teatralidad", semestre: "I", creditos: 8, abre: ["Personaje e Investigación"] },
  { nombre: "Autoconocimiento Actoral", semestre: "I", creditos: 4, abre: [] },
  { nombre: "Teoría de la Representación", semestre: "I", creditos: 5, abre: ["Taller de Dirección"] },
  { nombre: "Análisis Dramatúrgico I", semestre: "I", creditos: 4, abre: ["Análisis Dramatúrgico II"] },
  { nombre: "Tutoría I", semestre: "I", creditos: 3, abre: ["Tutoría II"] },
  { nombre: "Historia del Arte", semestre: "I", creditos: 3, abre: ["Estética"] },
  { nombre: "Inglés I", semestre: "I", creditos: 3, abre: ["Inglés II"] },

  { nombre: "Creación de Personaje", semestre: "II", creditos: 8, abre: ["Personaje e Investigación"] },
  { nombre: "El Actor y el Colectivo", semestre: "II", creditos: 4, abre: [] },
  { nombre: "Teoría del Teatro", semestre: "II", creditos: 5, abre: ["Taller de Dirección"] },
  { nombre: "Análisis Dramatúrgico II", semestre: "II", creditos: 4, abre: ["Seminario de Dramaturgia"], requiere: ["Análisis Dramatúrgico I"] },
  { nombre: "Tutoría II", semestre: "II", creditos: 3, requiere: ["Tutoría I"], abre: [] },
  { nombre: "Estética", semestre: "II", creditos: 3, requiere: ["Historia del Arte"], abre: [] },
  { nombre: "Inglés II", semestre: "II", creditos: 3, requiere: ["Inglés I"], abre: ["Inglés III"] },

  { nombre: "Personaje e Investigación", semestre: "III", creditos: 12, requiere: ["Acción y Teatralidad", "Creación de Personaje"], abre: ["Puesta en Escena", "Introducción a la Investigación en el Arte"] },
  { nombre: "Análisis Escénico", semestre: "III", creditos: 5, abre: ["Introducción a la Investigación en el Arte"] },
  { nombre: "Práctica de Observación I", semestre: "III", creditos: 3, abre: ["Práctica de Observación II"] },
  { nombre: "Inglés III", semestre: "III", creditos: 3, requiere: ["Inglés II"], abre: ["Inglés IV"] },
  { nombre: "CFG", semestre: "III", creditos: 2, abre: [] },

  { nombre: "Puesta en Escena", semestre: "IV", creditos: 10, requiere: ["Personaje e Investigación"], abre: ["Creación Actoral I", "Taller Interdisciplinario"] },
  { nombre: "Taller de Dirección", semestre: "IV", creditos: 4, requiere: ["Teoría de la Representación", "Teoría del Teatro"], abre: ["Seminario de Dirección"] },
  { nombre: "Taller de Dramaturgia", semestre: "IV", creditos: 4, abre: ["Creación Dramatúrgica"] },
  { nombre: "Introducción a la Investigación en el Arte", semestre: "IV", creditos: 4, requiere: ["Personaje e Investigación", "Análisis Escénico"], abre: ["Creación Actoral I"] },
  { nombre: "Práctica de Observación II", semestre: "IV", creditos: 3, requiere: ["Práctica de Observación I"], abre: [] },

  { nombre: "Creación Actoral I", semestre: "V", creditos: 12, requiere: ["Puesta en Escena", "Introducción a la Investigación en el Arte"], abre: ["Creación Actoral II"] },
  { nombre: "Investigación Interdisciplinar", semestre: "V", creditos: 2, abre: ["Creación Interdisciplinar"] },
  { nombre: "Didáctica del Teatro I", semestre: "V", creditos: 2, abre: ["Didáctica del Teatro II"] },
  { nombre: "Metodología de la Investigación", semestre: "V", creditos: 5, abre: ["Investigación Teatral"] },
  { nombre: "Curso Electivo de Formación Disciplinar", semestre: "V", creditos: 3, abre: [] },
  { nombre: "Taller Interdisciplinario", semestre: "V", creditos: 3, requiere: ["Puesta en Escena"], abre: [] },

  { nombre: "Creación Actoral II", semestre: "VI", creditos: 12, requiere: ["Creación Actoral I"], abre: ["Creación Actoral III"] },
  { nombre: "Creación Interdisciplinar", semestre: "VI", creditos: 5, requiere: ["Investigación Interdisciplinar"], abre: [] },
  { nombre: "Didáctica del Teatro II", semestre: "VI", creditos: 2, requiere: ["Didáctica del Teatro I"], abre: [] },
  { nombre: "Investigación Teatral", semestre: "VI", creditos: 5, requiere: ["Metodología de la Investigación"], abre: [] },

  { nombre: "Creación Actoral III", semestre: "VII", creditos: 11, requiere: ["Creación Actoral II"], abre: ["Creación Actoral IV"] },
  { nombre: "Seminario de Dirección", semestre: "VII", creditos: 4, requiere: ["Taller de Dirección"], abre: ["Creación Escénica"] },
  { nombre: "Creación Dramatúrgica", semestre: "VII", creditos: 3, requiere: ["Taller de Dramaturgia"], abre: ["Creación Escénica"] },
  { nombre: "Tutoría de Investigación Aplicada I", semestre: "VII", creditos: 6, abre: ["Tutoría de Investigación Aplicada II"] },
  
  { nombre: "Creación Actoral IV", semestre: "VIII", creditos: 11, requiere: ["Creación Actoral III"], abre: ["Tutoría de Práctica", "Práctica Profesional"] },
  { nombre: "Creación Escénica", semestre: "VIII", creditos: 7, requiere: ["Seminario de Dirección", "Creación Dramatúrgica"], abre: [] },
  { nombre: "Tutoría de Investigación Aplicada II", semestre: "VIII", creditos: 6, requiere: ["Tutoría de Investigación Aplicada I"], abre: ["Tutoría de Práctica", "Práctica Profesional"] },

  { nombre: "Práctica Profesional", semestre: "IX", creditos: 20, requiere: ["Creación Actoral IV", "Tutoría de Investigación Aplicada II"], abre: ["Taller de Memoria"] },
  { nombre: "Tutoría de Práctica", semestre: "IX", creditos: 10, requiere: ["Creación Actoral IV", "Tutoría de Investigación Aplicada II"], abre: ["Taller de Memoria"] },

  { nombre: "Taller de Memoria", semestre: "X", creditos: 30, requiere: ["Práctica Profesional", "Tutoría de Práctica"], abre: [] }
];

// Estado actual de aprobados
let aprobados = new Set(JSON.parse(localStorage.getItem("ramosAprobados") || "[]"));

function construirMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  const agrupado = {};
  ramos.forEach(r => {
    if (!agrupado[r.semestre]) agrupado[r.semestre] = [];
    agrupado[r.semestre].push(r);
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

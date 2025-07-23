// Datos de ramos por semestre, requisitos y créditos
const ramos = [
  {
    nombre: "Acción y Teatralidad",
    codigo: "accion",
    semestre: 1,
    requisitos: [],
  },
  {
    nombre: "Autoconocimiento Actoral",
    codigo: "auto",
    semestre: 1,
    requisitos: [],
  },
  {
    nombre: "Teoría de la Representación",
    codigo: "teoria_rep",
    semestre: 1,
    requisitos: [],
  },
  {
    nombre: "Análisis Dramatúrgico I",
    codigo: "analisis1",
    semestre: 1,
    requisitos: [],
  },
  {
    nombre: "Tutoría I",
    codigo: "tutoria1",
    semestre: 1,
    requisitos: [],
  },
  {
    nombre: "Historia del Arte",
    codigo: "historia",
    semestre: 1,
    requisitos: [],
  },
  {
    nombre: "Inglés I",
    codigo: "ingles1",
    semestre: 1,
    requisitos: [],
  },
  {
    nombre: "Creación de Personaje",
    codigo: "personaje",
    semestre: 2,
    requisitos: [],
  },
  {
    nombre: "El Actor y el Colectivo",
    codigo: "actor_colectivo",
    semestre: 2,
    requisitos: [],
  },
  {
    nombre: "Teoría del Teatro",
    codigo: "teoria_teatro",
    semestre: 2,
    requisitos: [],
  },
  {
    nombre: "Análisis Dramatúrgico II",
    codigo: "analisis2",
    semestre: 2,
    requisitos: ["analisis1"],
  },
  {
    nombre: "Tutoría II",
    codigo: "tutoria2",
    semestre: 2,
    requisitos: ["tutoria1"],
  },
  {
    nombre: "Estética",
    codigo: "estetica",
    semestre: 2,
    requisitos: ["historia"],
  },
  {
    nombre: "Inglés II",
    codigo: "ingles2",
    semestre: 2,
    requisitos: ["ingles1"],
  },
  {
    nombre: "Personaje e Investigación",
    codigo: "personaje_inv",
    semestre: 3,
    requisitos: ["accion", "personaje"],
  },
  {
    nombre: "Análisis Escénico",
    codigo: "analisis_escenico",
    semestre: 3,
    requisitos: [],
  },
  {
    nombre: "Práctica de Observación I",
    codigo: "observacion1",
    semestre: 3,
    requisitos: [],
  },
  {
    nombre: "Inglés III",
    codigo: "ingles3",
    semestre: 3,
    requisitos: ["ingles2"],
  },
  {
    nombre: "CFG",
    codigo: "cfg1",
    semestre: 3,
    requisitos: [],
  },
  // Puedes seguir agregando todos los ramos de semestres IV a X de forma similar...
];

// Estado de ramos aprobados
let estado = {};

document.addEventListener("DOMContentLoaded", () => {
  const malla = document.getElementById("malla");

  // Agrupar por semestre
  const semestres = {};
  ramos.forEach((ramo) => {
    if (!semestres[ramo.semestre]) semestres[ramo.semestre] = [];
    semestres[ramo.semestre].push(ramo);
    estado[ramo.codigo] = false;
  });

  // Renderizar por semestre
  for (const semestre in semestres) {
    const box = document.createElement("div");
    box.className = "semestre";
    const title = document.createElement("h2");
    title.textContent = `Semestre ${semestre}`;
    box.appendChild(title);

    semestres[semestre].forEach((ramo) => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;
      div.id = ramo.codigo;

      // Si tiene requisitos, se bloquea inicialmente
      if (ramo.requisitos.length > 0) {
        div.classList.add("locked");
      }

      div.addEventListener("click", () => toggleRamo(ramo));
      box.appendChild(div);
    });

    malla.appendChild(box);
  }
});

function toggleRamo(ramo) {
  const div = document.getElementById(ramo.codigo);

  // Si está bloqueado, no se puede marcar
  if (div.classList.contains("locked")) return;

  estado[ramo.codigo] = !estado[ramo.codigo];
  div.classList.toggle("approved");

  // Revisar si desbloquea otros
  ramos.forEach((r) => {
    if (r.requisitos.includes(ramo.codigo)) {
      const cumple = r.requisitos.every((req) => estado[req]);
      const target = document.getElementById(r.codigo);
      if (cumple) {
        target.classList.remove("locked");
      } else {
        target.classList.add("locked");
        target.classList.remove("approved");
        estado[r.codigo] = false;
      }
    }
  });
}

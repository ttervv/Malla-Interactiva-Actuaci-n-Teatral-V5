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
  }
  // Agrega aquí los demás semestres con el mismo formato
];

const estado = {};

function crearMalla() {
  const container = document.getElementById("malla-container");
  ramos.forEach((sem) => {
    const semDiv = document.createElement("div");
    semDiv.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = sem.semestre;
    semDiv.appendChild(titulo);

    sem.ramos.forEach((ramo) => {
      const div = document.createElement("div");
      div.className = "ramo disabled";
      div.textContent = ramo.nombre;
      div.dataset.id = ramo.id;
      div.onclick = () => aprobarRamo(ramo.id);
      semDiv.appendChild(div);

      estado[ramo.id] = { aprobado: false, deps: ramo.abre || [] };
    });

    container.appendChild(semDiv);
  });

  // Inicializar desbloqueados sin prerequisitos
  document.querySelectorAll(".ramo").forEach((el) => {
    const id = el.dataset.id;
    const tieneRequisitos = ramos.some((sem) =>
      sem.ramos.some((r) => (r.abre || []).includes(id))
    );
    if (!tieneRequisitos) el.classList.remove("disabled");
  });
}

function aprobarRamo(id) {
  const div = document.querySelector(`[data-id='${id}']`);
  if (div.classList.contains("disabled")) return;

  estado[id].aprobado = true;
  div.classList.add("aprobado");

  // Desbloquear dependientes
  for (const [clave, dato] of Object.entries(estado)) {
    if (dato.deps.includes(id)) {
      const el = document.querySelector(`[data-id='${clave}']`);
      const depsAprobados = dato.deps.every((dep) => estado[dep]?.aprobado);
      if (depsAprobados) el.classList.remove("disabled");
    }
  }
}

crearMalla();

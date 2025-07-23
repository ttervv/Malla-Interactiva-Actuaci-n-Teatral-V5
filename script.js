<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Malla Curricular de Actuación</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Malla Curricular de Actuación 🎭</h1>
  <div id="malla" class="malla-container"></div>
  <script>
    const ramos = [
      // SEMESTRE 1
      { nombre: "Acción y Teatralidad", codigo: "accion", semestre: 1, requisitos: [] },
      { nombre: "Autoconocimiento Actoral", codigo: "auto", semestre: 1, requisitos: [] },
      { nombre: "Teoría de la Representación", codigo: "teoria_rep", semestre: 1, requisitos: [] },
      { nombre: "Análisis Dramatúrgico I", codigo: "analisis1", semestre: 1, requisitos: [] },
      { nombre: "Tutoría I", codigo: "tutoria1", semestre: 1, requisitos: [] },
      { nombre: "Historia del Arte", codigo: "historia", semestre: 1, requisitos: [] },
      { nombre: "Inglés I", codigo: "ingles1", semestre: 1, requisitos: [] },

      // SEMESTRE 2
      { nombre: "Creación de Personaje", codigo: "personaje", semestre: 2, requisitos: [] },
      { nombre: "El Actor y el Colectivo", codigo: "actor_colectivo", semestre: 2, requisitos: [] },
      { nombre: "Teoría del Teatro", codigo: "teoria_teatro", semestre: 2, requisitos: [] },
      { nombre: "Análisis Dramatúrgico II", codigo: "analisis2", semestre: 2, requisitos: ["analisis1"] },
      { nombre: "Tutoría II", codigo: "tutoria2", semestre: 2, requisitos: ["tutoria1"] },
      { nombre: "Estética", codigo: "estetica", semestre: 2, requisitos: ["historia"] },
      { nombre: "Inglés II", codigo: "ingles2", semestre: 2, requisitos: ["ingles1"] },

      // SEMESTRE 3
      { nombre: "Personaje e Investigación", codigo: "personaje_inv", semestre: 3, requisitos: ["accion", "personaje"] },
      { nombre: "Análisis Escénico", codigo: "analisis_escenico", semestre: 3, requisitos: [] },
      { nombre: "Práctica de Observación I", codigo: "observacion1", semestre: 3, requisitos: [] },
      { nombre: "Inglés III", codigo: "ingles3", semestre: 3, requisitos: ["ingles2"] },
      { nombre: "CFG", codigo: "cfg1", semestre: 3, requisitos: [] },

      // SEMESTRE 4
      { nombre: "Puesta en Escena", codigo: "puesta", semestre: 4, requisitos: ["personaje_inv"] },
      { nombre: "Taller de Dirección", codigo: "direccion", semestre: 4, requisitos: ["teoria_rep", "teoria_teatro"] },
      { nombre: "Taller de Dramaturgia", codigo: "dramaturgia", semestre: 4, requisitos: [] },
      { nombre: "Introducción a la Investigación en el Arte", codigo: "investigacion_arte", semestre: 4, requisitos: ["analisis_escenico"] },
      { nombre: "Práctica de Observación II", codigo: "observacion2", semestre: 4, requisitos: ["observacion1"] },

      // SEMESTRE 5
      { nombre: "Creación Actoral I", codigo: "actoral1", semestre: 5, requisitos: ["puesta", "investigacion_arte"] },
      { nombre: "Investigación Interdisciplinar", codigo: "interdisciplinar", semestre: 5, requisitos: [] },
      { nombre: "Didáctica del Teatro I", codigo: "didactica1", semestre: 5, requisitos: [] },
      { nombre: "Metodología de la Investigación", codigo: "metodologia", semestre: 5, requisitos: [] },
      { nombre: "Electivo 1", codigo: "electivo1", semestre: 5, requisitos: [] },
      { nombre: "Electivo 2", codigo: "electivo2", semestre: 5, requisitos: [] },
      { nombre: "Taller Interdisciplinario", codigo: "taller_inter", semestre: 5, requisitos: ["puesta"] },

      // SEMESTRE 6
      { nombre: "Creación Actoral II", codigo: "actoral2", semestre: 6, requisitos: ["actoral1"] },
      { nombre: "Creación Interdisciplinar", codigo: "creacion_inter", semestre: 6, requisitos: ["interdisciplinar"] },
      { nombre: "Didáctica del Teatro II", codigo: "didactica2", semestre: 6, requisitos: ["didactica1"] },
      { nombre: "Investigación Teatral", codigo: "invest_teatral", semestre: 6, requisitos: ["metodologia"] },
      { nombre: "Electivo 3", codigo: "electivo3", semestre: 6, requisitos: [] },
      { nombre: "Electivo 4", codigo: "electivo4", semestre: 6, requisitos: [] },

      // SEMESTRE 7
      { nombre: "Creación Actoral III", codigo: "actoral3", semestre: 7, requisitos: ["actoral2"] },
      { nombre: "Seminario de Dirección", codigo: "sem_direccion", semestre: 7, requisitos: ["direccion"] },
      { nombre: "Creación Dramatúrgica", codigo: "crea_dramaturgia", semestre: 7, requisitos: ["dramaturgia"] },
      { nombre: "Tutoría de Investigación Aplicada I", codigo: "tut_inv1", semestre: 7, requisitos: [] },
      { nombre: "Electivo 5", codigo: "electivo5", semestre: 7, requisitos: [] },
      { nombre: "Electivo 6", codigo: "electivo6", semestre: 7, requisitos: [] },

      // SEMESTRE 8
      { nombre: "Creación Actoral IV", codigo: "actoral4", semestre: 8, requisitos: ["actoral3"] },
      { nombre: "Creación Escénica", codigo: "creacion_escenica", semestre: 8, requisitos: ["sem_direccion", "crea_dramaturgia"] },
      { nombre: "Tutoría de Investigación Aplicada II", codigo: "tut_inv2", semestre: 8, requisitos: ["tut_inv1"] },
      { nombre: "Electivo 7", codigo: "electivo7", semestre: 8, requisitos: [] },
      { nombre: "Electivo 8", codigo: "electivo8", semestre: 8, requisitos: [] },

      // SEMESTRE 9
      { nombre: "Práctica Profesional", codigo: "practica", semestre: 9, requisitos: ["actoral4", "tut_inv2"] },
      { nombre: "Tutoría de Práctica", codigo: "tut_practica", semestre: 9, requisitos: ["actoral4", "tut_inv2"] },

      // SEMESTRE 10
      { nombre: "Taller de Memoria", codigo: "memoria", semestre: 10, requisitos: ["practica", "tut_practica"] },
    ];

    let estado = {};

    document.addEventListener("DOMContentLoaded", () => {
      const malla = document.getElementById("malla");
      const semestres = {};
      ramos.forEach((ramo) => {
        if (!semestres[ramo.semestre]) semestres[ramo.semestre] = [];
        semestres[ramo.semestre].push(ramo);
        estado[ramo.codigo] = false;
      });

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

          if (ramo.requisitos.length > 0) div.classList.add("locked");

          div.addEventListener("click", () => toggleRamo(ramo));
          box.appendChild(div);
        });

        malla.appendChild(box);
      }
    });

    function toggleRamo(ramo) {
      const div = document.getElementById(ramo.codigo);
      if (div.classList.contains("locked")) return;

      estado[ramo.codigo] = !estado[ramo.codigo];
      div.classList.toggle("approved");

      if (estado[ramo.codigo]) {
        div.style.textDecoration = "line-through";
      } else {
        div.style.textDecoration = "none";
      }

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
            target.style.textDecoration = "none";
          }
        }
      });
    }
  </script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

    body {
      font-family: 'Nunito', sans-serif;
      background: #f5fff5;
      padding: 20px;
      margin: 0;
      color: #2e4d2e;
    }

    h1 {
      text-align: center;
      color: #2d662d;
      margin-bottom: 30px;
    }

    .malla-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      max-width: 1600px;
      margin: 0 auto;
    }

    .semestre {
      background: #eafae6;
      border: 2px solid #c7ebc4;
      border-radius: 10px;
      padding: 10px;
    }

    .semestre h2 {
      text-align: center;
      color: #417d41;
      margin-bottom: 10px;
    }

    .ramo {
      background: #d6f5d6;
      padding: 8px;
      border-radius: 5px;
      margin: 5px 0;
      cursor: pointer;
      transition: background 0.3s ease;
      border: 1px solid #a2d8a2;
    }

    .ramo:hover {
      background: #bdf0bd;
    }

    .ramo.locked {
      background: #f0f0f0;
      color: #aaa;
      border: 1px dashed #ccc;
      cursor: not-allowed;
    }

    .ramo.approved {
      color: #2e662e;
      font-style: italic;
    }
  </style>
</body>
</html>

const mi_cv = document
  .getElementById("btn-1").addEventListener("click", () => { document.getElementById("area").innerHTML =
      "<h3>Sobre mi:</h3>" + cv.sobre_mi.detalle + "<ul><li>Nombre: " +  cv.sobre_mi.nombre + "</li><li>Mail: " +
      cv.sobre_mi.mail +  "</li><li>Fecha de nac: " + cv.sobre_mi.fnac + "</li></ul>";
  });

document.getElementById("btn-2").addEventListener("click", () => { document.getElementById("area").innerHTML =
    "<h3>Experiencia obtenida en empleos:</h3><ol>" +
    "<li>Trabajé en: " +  cv.exp_lab.trabajo1.trabajo + ", por una duracion de " + cv.exp_lab.trabajo1.duracion +
    ", en los cuales me desempeñé dentro del puesto de: " +   cv.exp_lab.trabajo1.puesto +  
    "</li><li>Trabajé en: " +  cv.exp_lab.trabajo2.trabajo + ", por una duracion de " + cv.exp_lab.trabajo2.duracion +
    ", en los cuales me desempeñé dentro del puesto de: " +   cv.exp_lab.trabajo2.puesto +  
    "</li><li>Trabajé en: " +  cv.exp_lab.trabajo3.trabajo + ", por una duracion de " + cv.exp_lab.trabajo3.duracion +
    ", en los cuales me desempeñé dentro del puesto de: " +   cv.exp_lab.trabajo3.puesto +  "</li></ol>";
});

document.getElementById("btn-3").addEventListener("click", () => { document.getElementById("area").innerHTML =
    "<h3>Habilidades que fui adquiriendo:</h3><ul>"+
    "<li>"+cv.habilid[0]+"</li>"+ "<li>"+cv.habilid[1]+"</li>"+ "<li>"+cv.habilid[2]+"</li></ul>";});

document.getElementById("btn-4").addEventListener("click", () => { document.getElementById("area").innerHTML =
"<h3>Mis cursos realizados:</h3><ul>"+
"<li>"+cv.estudios[0]+"</li>"+ "<li>"+cv.estudios[1]+"</li>"+ "<li>"+cv.estudios[2]+"</li>"+  "<li>"+cv.estudios[3]+"</li></ul>";});


const cv = {

sobre_mi: {
  nombre: "Agustina Cugnoni",
  mail: "aguscugnoni@gmail.com",
  fnac: "28/11/1988",
  detalle: "Mi nombre es Agustina y me desempeño en diseño web. Mi objetivo profesional es mantener un crecimiento continuo en mi vida laboral y conocimientos. Soy capaz de trabajar bajo presión teniendo en cuenta el objetivo de la compañía y la obtención de resultados. Mi amplia trayectoria profesional me permite ofrecer lo mejor a las trabajos en las que trabajo."
},

exp_lab: {
  trabajo1: {
    trabajo: "Codehouse",
    duracion: "2 años",
    puesto: "Diseño web",
  },

  trabajo2: {
    trabajo: "Hendel",
    duracion: "3 años",
    puesto: "Recepcion",
  },

  trabajo3: {
    trabajo: "Tostadas Manieri",
    duracion: "7 años",
    puesto: "Agente de ventas",
  },
},

habilid: ["Recepcionista.",
  "Venta de productos",
  "Intruduccion al diseño web"],

estudios: ["Escuela primaria N°1", "Escuela secundaria, titulo de bachiller",
 "Curso de marketing digital y ventas", "Curso de diseño de sitios web"]}
const http = require("node:http");

const h1 = `<h1>
Mi Espectacular Pagina
</h1>`;

const productos = {
  "Cafe Expreso": 200,
  "Cafe Americano": 250,
  "Cafe Cortado": 200,
  "Cafe Doble": 250,
  "Cafe Lagrima": 200,
};

function mostrar(objeto) {
  let resultado = "";
  for (let x in objeto) {
    resultado += x + ": " + objeto[x] + "<br>";
  }

  return resultado;
}

const server = http.createServer(function (request, response) {
  if (request.url == "/") {
    response.write(h1 + "Victoria Castro Menna");
  } else if (request.url == "/materia") {
    response.write(h1 + "Materia: Aplicaciones hibridas");
  } else if (request.url == "/profesor") {
    response.write(h1 + "Profesor: Brian Lara");
  } else if (request.url == "/productos") {
    response.write(h1 + mostrar(productos));
  } else {
    response.write(h1 + "Pagina no encontrada");
  }

  response.end();
});
server.listen(2022);

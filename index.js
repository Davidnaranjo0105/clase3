const http = require("http");

const HOST = "localhost";
const PORT = 8080;

const writeHTMLResponse = (res, htmlCode) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(htmlCode);
  //res.end("Este es mi primer servidor"); //Creo instancia del servidor
};

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log("URL es: ", url);

  if (url === "/other") {
    writeHTMLResponse(res, "<p> Esta e sotra ruta </p>");
  } else {
    writeHTMLResponse(res, "<p> Codigo HTML </p>");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});
let http = require("http");

const PORT = 85;

start();

function start() {
  let server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    response.write("Welcome to bot.colintree.cn");
    response.write("<ol>");
    response.write("<li><a href=\"http://bot.colintree.cn:6474\">Webhook: port 6474</a></li>");
    response.write("<li><a href=\"http://bot.colintree.cn:8048\">Extension builder: port 8048</a></li>");
    response.write("<li><a href=\"http://bot.colintree.cn:8049\">Extension builder dev: port 8049</a></li>");
    response.write("</ol>");
    response.end();
  });
  console.log("listening port at: " + PORT);
  server.listen(PORT);
}
const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 3001;

const server = http.createServer((req, res) => {
  const filepath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  const extName = String(path.extname(filepath)).toLowerCase();

  const mimTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "text/png",
  };

  const contentType = mimTypes[extName] || "application/octet-stream";
  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("404: File not found Karthik!");
      }
    } else {
      res.writeHead(200, { "content-type": contentType });
      res.end(content, "utf8");
    }
  });
});
server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

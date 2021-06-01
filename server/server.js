const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "catalog.json"));
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(router);
server.listen(9000, () => {
    console.log("JSON Server is running");
});

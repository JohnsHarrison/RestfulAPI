const http = require("http");
const app = require('./app')

// Assigns the port for the server to run.
// process.env accesses node js variables set on deployment servers
const port = process.env.PORT || 3000;

// creates a server using a "listener" as a paramater to handle requests to the server
const server = http.createServer(app);

// starts server
server.listen(port)


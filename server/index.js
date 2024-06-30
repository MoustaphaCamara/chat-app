const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const port = 8000;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User logged in as ${socket.id}.`);

  // Room events
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User ${socket.id} join the room ${data}`);
  });

  // Log off
  socket.on("disconnect", () => {
    console.log(`User ${socket.id} logged out.`);
  })
});

server.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});

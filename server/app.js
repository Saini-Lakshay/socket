import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const port = 3000;
const app = express();
const server = createServer(app);
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173/",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);
  //   socket.emit("welcome", "Welcome to server! - " + socket.id);
  //   socket.broadcast.emit("welcome", "User joined - " + socket.id);
  //   socket.on("disconnect", () => {
  //     console.log("User disconnected - ", socket.id);
  //   });
});

server.listen(port, () => {
  console.log("Server running on port ", port);
});

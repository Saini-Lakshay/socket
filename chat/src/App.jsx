import React, { useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  const backendURL = "http://localhost:3000";
  const socket = io(backendURL);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected : ", socket.id);
    });
    socket.on("welcome", (data) => {
      console.log(data);
    });
    return socket.disconnect();
  }, []);

  return <div>App</div>;
}

export default App;

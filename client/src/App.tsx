import * as io from "socket.io-client";
import { useState } from "react";
import ChatBox from "./components/ChatBox.tsx";
import InputText from "./components/InputText.tsx";
import Button from "./components/Button.tsx";

const socket = io.connect("http://localhost:8000");

function App() {
  const [username, setUsername] = useState<string>("");
  const [room, setRoom] = useState<string>("");

  const joinRoom = () => {
    if (username === "" && room === "") return;
    socket.emit("join_room", room, username);
  };

  return (
    <>
      <div className="text-white w-full h-screen flex flex-col items-center justify-center bg-slate-900">
        <h3 className="text-2xl text-white mb-4">
          Rejoindre la salle de discussion
        </h3>

        <div className="flex flex-col gap-2">
          <InputText
            label="Pseudo"
            placeholder="Carter the fourth"
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputText
            label="Room number"
            placeholder="n° .."
            onChange={(e) => setRoom(e.target.value)}
          />

          <Button content="Rejoindre la salle" onClick={joinRoom} />
        </div>

        <ChatBox socket={socket} username={username} room={room} />
      </div>
    </>
  );
}

export default App;

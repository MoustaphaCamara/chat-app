import InputText from "./InputText.tsx";
import Button from "./Button.tsx";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

interface ChatBoxProps {
  socket: Socket;
  username: string;
  room: string;
}

interface Message {
  room: string;
  author: string;
  message: string;
}

const ChatBox = ({ socket, username, room }: ChatBoxProps) => {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<Message[]>([]);

  const sendMessage = () => {
    if (currentMessage === "") return;
    const date =
      new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes();

    const messageData = {
      room,
      author: username,
      message: currentMessage,
      time: date,
    };

    socket.emit("send_message", messageData);
    setMessageList((previousList) => [...previousList, messageData]);
  };

  useEffect(() => {
    socket.on("receive_message", (data: Message) => {
      setMessageList((previousList) => [...previousList, data]);
      console.log(data);
    });
  }, [socket]);

  return (
    <>
      <div>
        <p>Body</p>
        <div>
          {messageList.map((message: Message, index: number) => (
            <div key={index}>
              <h1>{message.message}</h1>
            </div>
          ))}
        </div>
        <InputText
          label="Chat box"
          placeholder="message content"
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <Button content="&#9658; Envoyer" onClick={sendMessage} />
      </div>
    </>
  );
};

export default ChatBox;

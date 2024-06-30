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
  time: string;
}

const ChatBox = ({ socket, username, room }: ChatBoxProps) => {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<Message[]>([]);

  const handleKeyDown = (e: string) => {
    if (e === "Enter") {
      sendMessage();
      setCurrentMessage("");
    }
  };

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
        <p>Current user : {username}</p>
        {messageList.map((message: Message, index: number) => (
          <div
            className={`${username === message.author ? "bg-purple-900" : "bg-black"} flex items-start gap-2.5 bg-gray-950 p-4`}
            key={index}
          >
            <img
              className="w-8 h-8 rounded-full"
              src="https://picsum.photos/200"
              alt="Jese image"
            />
            <div className="flex flex-col w-full max-w-[320px] leading-1.5">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {message.author}
                </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {message.time}
                </span>
              </div>
              <p className="text-sm font-normal py-2 text-gray-900 dark:text-white">
                {message.message}
              </p>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div>
        ))}

        <InputText
          value={currentMessage}
          label="Chat box"
          placeholder="message content"
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e.key)}
        />
        <Button content="&#9658; Envoyer" onClick={sendMessage} />
      </div>
    </>
  );
};

export default ChatBox;

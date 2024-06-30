import InputText from "./InputText.tsx";
import Button from "./Button.tsx";

const ChatBox = ({ socket, username, room }) => {
  return (
    <>
      <div>
        <InputText label="Chat box" placeholder="message content" />
        <Button content="&#9658; Envoyer" />
      </div>
    </>
  );
};

export default ChatBox;

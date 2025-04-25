
import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatInterface from "./ChatInterface";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatButton isOpen={isOpen} onClick={() => setIsOpen(true)} />
      <ChatInterface isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Chat;

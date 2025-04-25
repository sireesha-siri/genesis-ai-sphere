
import { useState } from "react";
import { Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const ChatInterface = ({ isOpen, onClose, className }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "This is a simulated response to your message: " + userMessage,
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 w-full max-w-[400px] rounded-lg shadow-xl transition-all duration-500 glass-enhanced",
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/50 p-4">
        <h3 className="font-semibold text-gradient">AI Assistant</h3>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="h-[400px] overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col rounded-lg p-3",
              message.role === "user"
                ? "ml-auto bg-primary/10 max-w-[80%]"
                : "mr-auto bg-muted/50 max-w-[80%]"
            )}
          >
            {message.content}
          </div>
        ))}
        {isLoading && (
          <div className="mr-auto bg-muted/50 max-w-[80%] rounded-lg p-3">
            <div className="flex space-x-2">
              <div className="h-2 w-2 animate-bounce rounded-full bg-primary/60 [animation-delay:-0.3s]"></div>
              <div className="h-2 w-2 animate-bounce rounded-full bg-primary/60 [animation-delay:-0.15s]"></div>
              <div className="h-2 w-2 animate-bounce rounded-full bg-primary/60"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t border-border/50 p-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;

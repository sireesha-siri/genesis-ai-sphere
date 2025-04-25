
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const ChatButton = ({ isOpen, onClick, className }: ChatButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl",
        "bg-primary hover:bg-primary/90",
        isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100",
        className
      )}
    >
      <MessageSquare className="h-5 w-5" />
    </Button>
  );
};

export default ChatButton;

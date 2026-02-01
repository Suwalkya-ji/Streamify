import { LoaderIcon } from "lucide-react";

const ChatLoader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-base-100 px-4">
      <LoaderIcon className="size-10 animate-spin text-primary" />

      <div className="text-center">
        <p className="text-lg font-semibold">Connecting to chat</p>
        <p className="text-sm opacity-70">Please wait a moment...</p>
      </div>
    </div>
  );
};

export default ChatLoader;

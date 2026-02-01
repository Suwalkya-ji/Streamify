import { VideoIcon } from "lucide-react";

const CallButton = ({ handleVideoCall }) => {
  return (
    <div className="absolute top-0 right-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-end border-b bg-base-100/80 backdrop-blur px-3 py-2">
        <button
          onClick={handleVideoCall}
          className="btn btn-success btn-sm flex items-center gap-2 text-white"
          aria-label="Start video call"
          title="Start video call"
        >
          <VideoIcon className="size-5" />
          <span className="hidden sm:inline">Start Call</span>
        </button>
      </div>
    </div>
  );
};

export default CallButton;
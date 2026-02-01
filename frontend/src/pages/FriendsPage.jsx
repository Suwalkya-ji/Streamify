import React from "react";
import { Users } from "lucide-react";

const FriendsPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full bg-base-100 p-4 sm:p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-primary/10 p-3 text-primary">
          <Users size={26} />
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">Friends</h1>
      </div>

      {/* Empty State */}
      <div className="flex h-[60vh] flex-col items-center justify-center rounded-2xl border border-dashed border-base-300 bg-base-200 px-6 text-center">
        <Users size={56} className="mb-4 text-base-content/40" />

        <h2 className="text-lg font-semibold sm:text-xl">
          No friends yet
        </h2>

        <p className="mt-2 max-w-md text-sm text-base-content/60">
          When you start connecting with people, your friends will appear here.
          You can chat with them or start video calls anytime.
        </p>
      </div>
    </div>
  );
};

export default FriendsPage;

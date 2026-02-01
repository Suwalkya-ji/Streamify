import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { acceptFriendRequest, getFriendRequests } from "../lib/api";
import {
  BellIcon,
  ClockIcon,
  MessageSquareIcon,
  UserCheckIcon,
} from "lucide-react";
import NoNotificationsFound from "../components/NoNotificationsFound";

const NotificationsPage = () => {
  const queryClient = useQueryClient();

  const { data: friendRequests, isLoading } = useQuery({
    queryKey: ["friendRequests"],
    queryFn: getFriendRequests,
  });

  const { mutate: acceptRequestMutation, isPending } = useMutation({
    mutationFn: acceptFriendRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["friendRequests"] });
      queryClient.invalidateQueries({ queryKey: ["friends"] });
    },
  });

  const incomingRequests = friendRequests?.incomingReqs || [];
  const acceptedRequests = friendRequests?.acceptedReqs || [];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Notifications
        </h1>

        {/* Loading */}
        {isLoading ? (
          <div className="flex justify-center py-16">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : (
          <>
            {/* ================= FRIEND REQUESTS ================= */}
            {incomingRequests.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <UserCheckIcon className="size-5 text-primary" />
                  <h2 className="text-xl font-semibold">Friend Requests</h2>
                  <span className="badge badge-primary">
                    {incomingRequests.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {incomingRequests.map((request) => (
                    <div
                      key={request._id}
                      className="card bg-base-200 hover:shadow-md transition-shadow"
                    >
                      <div className="card-body p-4">
                        <div className="flex items-center justify-between gap-4">
                          {/* User Info */}
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="w-14 rounded-full bg-base-300">
                                <img
                                  src={request.sender.profilePic}
                                  alt={request.sender.fullName}
                                />
                              </div>
                            </div>

                            <div>
                              <h3 className="font-semibold">
                                {request.sender.fullName}
                              </h3>
                              <div className="mt-1 flex flex-wrap gap-1.5">
                                <span className="badge badge-secondary badge-sm">
                                  Native: {request.sender.nativeLanguage}
                                </span>
                                <span className="badge badge-outline badge-sm">
                                  Learning: {request.sender.learningLanguage}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Action */}
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() =>
                              acceptRequestMutation(request._id)
                            }
                            disabled={isPending}
                          >
                            {isPending ? "Accepting..." : "Accept"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ================= ACCEPTED REQUESTS ================= */}
            {acceptedRequests.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <BellIcon className="size-5 text-success" />
                  <h2 className="text-xl font-semibold">New Connections</h2>
                </div>

                <div className="space-y-3">
                  {acceptedRequests.map((notification) => (
                    <div
                      key={notification._id}
                      className="card bg-base-200 hover:shadow-sm"
                    >
                      <div className="card-body p-4">
                        <div className="flex items-start gap-3">
                          <div className="avatar">
                            <div className="w-10 rounded-full">
                              <img
                                src={notification.recipient.profilePic}
                                alt={notification.recipient.fullName}
                              />
                            </div>
                          </div>

                          <div className="flex-1">
                            <h3 className="font-semibold">
                              {notification.recipient.fullName}
                            </h3>
                            <p className="text-sm mt-1">
                              accepted your friend request
                            </p>
                            <p className="text-xs mt-2 flex items-center opacity-70">
                              <ClockIcon className="size-3 mr-1" />
                              Recently
                            </p>
                          </div>

                          <span className="badge badge-success flex items-center gap-1">
                            <MessageSquareIcon className="size-3" />
                            New Friend
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ================= EMPTY STATE ================= */}
            {incomingRequests.length === 0 &&
              acceptedRequests.length === 0 && <NoNotificationsFound />}
          </>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;

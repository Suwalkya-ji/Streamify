import { Link, useLocation } from "react-router-dom";
import { BellIcon, LogOutIcon, ShipWheelIcon } from "lucide-react";

import useAuthUser from "../hooks/useAuthUser";
import useLogout from "../hooks/useLogout";
import ThemeSelector from "./ThemeSelector";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");

  const { logoutMutation } = useLogout();

  return (
    <nav className="sticky top-0 z-30 h-16 bg-base-200 border-b border-base-300">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* LOGO (Only on Chat Page) */}
          {isChatPage ? (
            <Link to="/" className="flex items-center gap-2">
              <ShipWheelIcon className="size-8 text-primary" />
              <span className="text-2xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                Streamify
              </span>
            </Link>
          ) : (
            <div />
          )}

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Notifications */}
            <Link to="/notifications">
              <button className="btn btn-ghost btn-circle" aria-label="Notifications">
                <BellIcon className="h-6 w-6 opacity-70" />
              </button>
            </Link>

            {/* Theme Selector */}
            <ThemeSelector />

            {/* User Avatar */}
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={authUser?.profilePic || "/avatar.png"}
                  alt="User avatar"
                />
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={logoutMutation}
              className="btn btn-ghost btn-circle"
              aria-label="Logout"
            >
              <LogOutIcon className="h-6 w-6 opacity-70" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

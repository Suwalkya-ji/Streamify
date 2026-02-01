import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSidebar = false }) => {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="flex min-h-screen">
        {/* SIDEBAR */}
        {showSidebar && (
          <aside className="hidden md:block">
            <Sidebar />
          </aside>
        )}

        {/* MAIN CONTENT */}
        <div className="flex flex-1 flex-col">
          <Navbar />

          <main className="flex-1 overflow-y-auto px-3 sm:px-6 py-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
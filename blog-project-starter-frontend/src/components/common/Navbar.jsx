
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../config/firebase";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [log, setLog] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLog(!!user);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  async function logout() {
    try {
      await signOut(auth);
      navigate("/home");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  const navLink = (path) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
      location.pathname === path
        ? "bg-purple-500/15 text-purple-300"
        : "text-gray-300 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b12]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/home" className="group flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-orange-400 text-lg font-black text-white shadow-lg shadow-purple-500/20">
            T
          </span>
          <span className="text-xl font-bold tracking-tight text-white">
            Blog<span className="text-purple-400">Universe</span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <Link to="/home" className={navLink("/home")}>
            Home
          </Link>
          <Link to="/blogs" className={navLink("/blogs")}>
            Blogs
          </Link>

          {log ? (
            <button
              type="button"
              onClick={logout}
              className="button-style ml-2"
            >
              Log out
            </button>
          ) : (
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="button-style ml-2"
            >
              Login
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 p-2 text-gray-200 transition hover:bg-white/10 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#11111b] px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <Link to="/home" className={navLink("/home")}>
              Home
            </Link>
            <Link to="/blogs" className={navLink("/blogs")}>
              Blogs
            </Link>

            {log ? (
              <button
                type="button"
                onClick={logout}
                className="button-style mt-2 w-full"
              >
                Log out
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="button-style mt-2 w-full"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

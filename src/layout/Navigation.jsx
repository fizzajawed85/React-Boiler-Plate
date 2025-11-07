import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand to-blue-500 flex items-center justify-center text-white shadow-sm">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M3 12l6-6 6 6 6-6v12H3V12z" fill="currentColor" />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          FlowSync
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-300 -mt-1">
          Collaborate · Automate · Grow
        </span>
      </div>
    </div>
  );
}

function IconSearch() {
  return (
    <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
      />
    </svg>
  );
}
function IconBell() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.6 14.6V11a6 6 0 10-12 0v3.6c0 .53-.21 1.04-.595 1.395L4 17h5m6 0a3 3 0 11-6 0h6z"
      />
    </svg>
  );
}
function IconUser() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}
function IconSun() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2M12 19v2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M3 12h2M19 12h2M5.2 18.8l1.4-1.4M17.4 6.6l1.4-1.4M12 7a5 5 0 100 10 5 5 0 000-10z"
      />
    </svg>
  );
}
function IconMoon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  );
}

export default function Navigation() {
  const { theme, toggle } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-[#071022] border-b dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/">
            <LogoMark />
          </Link>
          <nav className="hidden lg:flex items-center gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-brand font-semibold"
                  : "text-gray-600 dark:text-gray-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="text-gray-600 dark:text-gray-200"
            >
              Services
            </NavLink>
            <NavLink to="/about" className="text-gray-600 dark:text-gray-200">
              About
            </NavLink>
            <NavLink to="/contact" className="text-gray-600 dark:text-gray-200">
              Contact
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-2 py-1">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  navigate(`/search?q=${encodeURIComponent(e.target.value)}`);
              }}
              className="bg-transparent px-2 py-1 text-sm focus:outline-none text-gray-700 dark:text-gray-200"
              placeholder="Search workspace..."
            />
            <div className="px-2">
              <IconSearch />
            </div>
          </div>

          <button
            onClick={toggle}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "light" ? <IconMoon /> : <IconSun />}
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand text-white"
          >
            Start free
          </button>

          <div className="relative">
            <button
              onClick={() => setProfileOpen((s) => !s)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {user ? (
                <div className="flex items-center gap-2">
                  <IconUser />{" "}
                  <span className="hidden sm:inline text-sm">{user.name}</span>
                </div>
              ) : (
                <IconUser />
              )}
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-[#071829] rounded-lg shadow-lg py-2">
                {user ? (
                  <>
                    <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
                      Signed in as{" "}
                      <div className="font-semibold">{user.name}</div>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setProfileOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Logout
                    </button>
                    <button
                      onClick={() => {
                        navigate("/dashboard");
                        setProfileOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Dashboard
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        navigate("/login");
                        setProfileOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        navigate("/signup");
                        setProfileOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Sign up
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen((s) => !s)}
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t dark:border-gray-800 bg-white dark:bg-[#071022]">
          <div className="px-4 py-3 flex flex-col gap-2">
            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className="py-1"
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setMobileOpen(false)}
              className="py-1"
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="py-1"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="py-1"
            >
              Contact
            </NavLink>
            <NavLink
              to="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="py-1"
            >
              Dashboard
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

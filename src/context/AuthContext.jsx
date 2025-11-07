import React, { createContext, useContext, useEffect, useState } from "react";

/*
 Simulated auth using localStorage
 - users stored under "flowsync_users": [{ name, email, password }]
 - current user under "flowsync_current_user": { name, email }
*/

const AuthContext = createContext();

const USERS_KEY = "flowsync_users";
const CURRENT_KEY = "flowsync_current_user";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(CURRENT_KEY)) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
    } catch {}
  }, [user]);

  const signup = ({ name, email, password }) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    if (users.find((u) => u.email === email)) {
      return { ok: false, message: "Email already registered" };
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    setUser({ name, email });
    return { ok: true };
  };

  const login = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const found = users.find((u) => u.email === email);
    if (!found) {
      return { ok: false, needsSignup: true, message: "Email not registered" };
    }
    if (found.password !== password) {
      return { ok: false, message: "Incorrect password" };
    }
    setUser({ name: found.name, email: found.email });
    return { ok: true };
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, signup, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

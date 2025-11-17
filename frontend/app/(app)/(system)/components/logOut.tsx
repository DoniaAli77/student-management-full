"use client";

import { useAuth } from "../context/authContext";

export function LogoutButton() {
  const { logout } = useAuth();
  return (
    <button
      style={{
        color: "#f5f5f5",
        textDecoration: "none",
        fontWeight: "bold",
      }}
      onClick={logout}
    >
      Logout
    </button>
  );
}

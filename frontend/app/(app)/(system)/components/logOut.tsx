"use client";

import { useAuth } from "../context/authContext";

export function LogoutButton() {
  const { logout } = useAuth();
  return <button onClick={logout}>Logout</button>;
}

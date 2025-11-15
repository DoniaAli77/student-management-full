"use client";

import { useAuth } from "@/app/(system)/context/authContext";

export default function TestAuthPage() {
  const { user, loading } = useAuth();

  if (loading) return <div>Checking auth…</div>;

  if (!user) return <div>No user logged in</div>;

  return (
    <div>
      <h1>AuthContext Test</h1>
      <p>
        Logged in as <strong>{(user as any).userid}</strong>    
      </p>
    </div>
  );
}

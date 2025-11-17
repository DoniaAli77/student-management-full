"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axiosInstance from "@/app/utils/ApiClient";
import { useRouter } from "next/navigation";

type User = {
  id: string;
  role: string;
  name: string;
  email: string;
  age:number
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router= useRouter()
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMe = async () => {
    try {
      const res = await axiosInstance.get<User>("/auth/me");
      setUser(res.data);
      console.log('fetch me',res)
    } catch {

      // setUser(null); / bt3ml moshkela 2no comonent get referehed
      router.replace('/login')// aw aw fe pages n check if !user redirect to login 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMe();
  }, [user]); // is it righ to refresh on changing user

  // 2️⃣ Login: call Nest, it sets cookie, then refresh user
  const login = async (email: string, password: string) => {
    await axiosInstance.post("/auth/login", { email, password });
    await fetchMe(); // now /auth/me should return the logged-in user
  };

  // 3️⃣ Logout: clear cookie in backend, clear user in frontend
  const logout = async () => {
    try {
      await axiosInstance.post("/auth/logout"); // Nest should clear cookie
    } catch {
      // even if request fails, we clear UI state
    }
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Nice hook so we don't repeat useContext(AuthContext) everywhere
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return ctx;
}

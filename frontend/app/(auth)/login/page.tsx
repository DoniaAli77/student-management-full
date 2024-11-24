'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/app/utils/axiosInstance";

let backend_url = "http://localhost:3001";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(`${backend_url}/auth/login`, {
        email,
        password,
      });
      // console.log(data);
      const { status, data } = response;
      console.log("status",response.data);
      if (status == 201) {
        // handleSuccess(message);
        localStorage.setItem("userId", response.data.user.userid);
        localStorage.setItem("role", response.data.user.role);
        // setSucessMessage(message)
        setTimeout(() => {
          router.push("/welcome"); // Redirect to home on successful login
        }, 1000);
      } else {
        console.log();
        // setErrorMessage(message);
      }
    } catch (err) {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

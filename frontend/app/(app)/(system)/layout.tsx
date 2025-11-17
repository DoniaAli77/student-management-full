import NavBar from "./components/NavBar";
import { AuthProvider } from "./context/authContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <NavBar />

        {children}
    </>
  );
}

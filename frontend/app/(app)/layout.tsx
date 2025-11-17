import { AuthProvider } from "./(system)/context/authContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthProvider>
        {children}
      </AuthProvider>
    </>
  );
}

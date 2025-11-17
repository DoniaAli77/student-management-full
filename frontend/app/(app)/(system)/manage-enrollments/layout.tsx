"use client";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      {children}
      <Footer />
    </>
  );
}

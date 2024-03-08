"use client";
import { auth } from "@/firebase/config";
import { CircularProgress } from "@mui/material";
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  if (!loading && user) {
    redirect("/arm/package_scan");
  }
  if (!loading && !user) {
    redirect("/login");
  }

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
        <CircularProgress />
      </main>
    );
  }
}

import { CircularProgress } from "@mui/material";
import React from "react";

export default function loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <CircularProgress />
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import App from "../app/App";
import "../styles/fonts.css";
import "../styles/theme.css";

export const Route = createFileRoute("/couple_module/$")({
  component: CoupleModulePage,
});

function CoupleModulePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8FAFC]">
        {/* Spinner during SSR / initial browser mount */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-primary" />
      </div>
    );
  }

  return (
    <div className="couple-module-container min-h-screen bg-[#F6F8FB]">
      <App />
    </div>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import SideNavBar from "../components/SideNavBar";
import TopAppBar from "../components/TopAppBar";

export const metadata: Metadata = {
  title: "TrustLens AI - Validation Suite",
  description: "Architectural Noir Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body-md min-h-screen flex overflow-hidden">
        <SideNavBar />
        <div className="flex-1 flex flex-col min-w-0">
          <TopAppBar />
          <main className="flex-1 overflow-y-auto bg-surface-dim">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

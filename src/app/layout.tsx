import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matrix Portfolio | Developer & Security Expert",
  description: "Professional cyberpunk portfolio with animated background.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-green-400">
        {children}
      </body>
    </html>
  );
}

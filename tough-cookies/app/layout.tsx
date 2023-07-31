import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tough Cookies",
  description: "A Zine about Movies by Brittany Feenstra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

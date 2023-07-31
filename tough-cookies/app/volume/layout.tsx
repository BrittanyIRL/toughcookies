import "../globals.css";
import type { Metadata } from "next";

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
      <p>VOLUMES</p>
      <body>{children}</body>
    </html>
  );
}

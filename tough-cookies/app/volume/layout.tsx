import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";

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
      <body className="bg-[#8dbf41] overflow-hidden w-screen h-screen">
        <header className="mx-6 flex flex-col lg:flex-row lg:py-4 items-center">
          <h1 className="text-8xl text-[#d621eb] my-0 mx-auto">
            Tough Cookies
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}

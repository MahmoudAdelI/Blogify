import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const revalidate = 10;

export const metadata: Metadata = {
  title: "Blogify",
  description: "A blog post application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  );
}

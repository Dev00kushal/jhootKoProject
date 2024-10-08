import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  icons: [" favicon.ico"],
  title: "Jhoot",
  description: " The best burger in town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"min-h-screen bg-slate-50 font-sans"}
      >
        {children}
      </body>
    </html>
  );
}

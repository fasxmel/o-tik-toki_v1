import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./Providers";


export const metadata: Metadata = {
  title: "o-tik-toki",
  description: "Welcome to the tik-toki",
  icons:"/images/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className="max-h-screen h-screen flex flex-col">
        <Providers>
           <Navbar/>
          {children}
        </Providers>
      </body>

    </html>
  );
}

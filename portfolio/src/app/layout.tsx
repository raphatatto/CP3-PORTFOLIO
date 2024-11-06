import type { Metadata } from "next";
import localFont, { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const poppins = Poppins({
  weight:["400", "500", "600", "700", "800"],
  display: "swap",
  style:"normal",
  subsets:["latin"],
});

export const metadata: Metadata  ={
  title: "CP3 - PORTIFÓLIO",
  description: "Portfólio de projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased bg-gray-900 text-white`}>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}

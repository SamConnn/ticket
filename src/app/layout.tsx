import Header from "@/components/layout/Header/Header";
import type { Metadata } from "next";
import { Dangrek } from "next/font/google";
import "./globals.css";

const inter = Dangrek({
  subsets: ["latin", "khmer"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Ticket Kamboda",
  description: "Generated by Ticket Kamboda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metadata = {
    title: "Ticket Kamboda",
    description: "Generated by Ticket Kamboda",
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

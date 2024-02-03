import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { NavigationHeader } from "@/components/navigation-header";

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonatan Frederico",
  description: "É muito bom te ver em meu portfólio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationHeader />

        {children}
      </body>
    </html>
  );
}

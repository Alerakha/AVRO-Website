import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
  variable: "--font-montserrat", // Definisikan variable CSS
});

export const metadata: Metadata = {
  title: "AVRO",
  description: "AVRO - Aerial Vehicle Robo Team",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-dark text-light`}>
        {children}
      </body>
    </html>
  );
}

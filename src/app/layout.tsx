import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "CICCE - Educación en Salud de Excelencia",
  description: "Centro de Investigación, Capacitación y Consultoría en Enfermería",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} font-sans text-gray-900 bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

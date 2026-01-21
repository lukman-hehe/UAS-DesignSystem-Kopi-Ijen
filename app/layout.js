import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kopi Ijen",
  description: "Kopi Ijen Roastery - Nikmati kopi arabica premium asli lereng Gunung Ijen, Banyuwangi. Fresh roasted, 100% biji pilihan dengan cita rasa khas Indonesia.",
  keywords: "kopi ijen, kopi banyuwangi, kopi arabica, kopi robusta, kopi premium, roastery, kopi indonesia",
  authors: [{ name: "Kopi Ijen Roastery" }],
  openGraph: {
    title: "Kopi Ijen Roastery | Kopi Premium Banyuwangi",
    description: "Nikmati kopi arabica premium asli lereng Gunung Ijen, Banyuwangi. Fresh roasted, 100% biji pilihan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

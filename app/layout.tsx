import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Inter, Source_Serif_4 } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});


export const metadata: Metadata = {
  title: "HeinzenBooks",
  description: "Ecommerce de livros",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`min-h-screen flex flex-col ${inter.variable} ${sourceSerif.variable}`}
      >
        <Header />

        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 min-h-full">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}



import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonateButton from "@/components/DonateButton";
import ScrollToTop from "@/components/ScrollToTop";
import AnimationProvider from "@/components/AnimationProvider";

export const metadata: Metadata = {
  title: "Memorial Church Whitefield - Donate & Support",
  description: "Support Memorial Church Whitefield through your generous donations. Tithes, offerings, and building fund contributions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="flex flex-col min-h-screen antialiased bg-white">
        <AnimationProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <DonateButton />
          <ScrollToTop />
        </AnimationProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Topbar from "./components/topbar";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SearchBar from "./components/SearchBar";
import { Providers } from "./store/provider";
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
      >
        <Providers>
          <Topbar />
          <Header />
          <div className="block md:hidden">
            <SearchBar />
          </div>
          <Navbar />
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}

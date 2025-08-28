// import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ClerkProvider,
} from "@clerk/nextjs";

// export const metadata: Metadata = {
export const metadata = {
  title: {
    template: "%s | AD eShopping",
    default: "AD eShopping",
  },
  description:
    "AD eShopping store, your one stop shop for all your e-commerce needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ClerkProvider>
  );
}

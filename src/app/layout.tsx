import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import NewHeader from "@/components/HeaderAndFooter/NewHeader";
import Footer from "@/components/HeaderAndFooter/Footer";
import AosComp from "@/components/AOS/Aos";
import LenisWrapper from "@/components/LenisWrapper";
import NextTopLoader from "nextjs-toploader";
import {Urbanist} from 'next/font/google'

const urbanist = Urbanist({
  subsets : ["latin"],
  weight:["400","500","700","300"]
})



export const menuData = [

  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us"},
  { name: "Features", url: "#section3" },
  { name: "Contact Us", url: "/contact-us" },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
    <meta name="google-site-verification" content="bWGm3-jxS9PSf2eolaN9eUclvxEr4debm9TaTWmFq2k" />
    </head>
    <body
      className={`${urbanist.className} antialiased`}
    >
      <LenisWrapper>
          <AosComp />
          <NextTopLoader color="#A9D048" showSpinner={false} />
       {/* <NextTopLoader showSpinner={false} easing="ease" color="#0399C9" /> */}
      {/* <Announcement /> */}
      <NewHeader />
      {children}
      <Footer />
      </LenisWrapper>
    </body>
  </html>
  );
}

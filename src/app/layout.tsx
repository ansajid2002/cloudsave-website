
// import localFont from "next/font/local";
import "./globals.css";
import NewHeader from "@/components/HeaderAndFooter/NewHeader";
// import Footer from "@/components/HeaderAndFooter/Footer";
import AosComp from "@/components/AOS/Aos";
import LenisWrapper from "@/components/LenisWrapper";
import NextTopLoader from "nextjs-toploader";
import {Urbanist} from 'next/font/google'
import Footer from "@/components/HeaderAndFooter/Footer";
import { Metadata } from 'next';
const urbanist = Urbanist({
  subsets : ["latin"],
  weight:["400","500","700","300"]
})

export const BACKEND_URL=`https://policies.cloudsave.storypost.in`

export const menuData = [

  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us"},
  { name: "Pricing", url: "/#pricingsection" },
  { name: "Contact Us", url: "/contact-us" },
];

export async function getallpolicies() {
  try {
    const response = await fetch(`${BACKEND_URL}/wp-json/custom-api/v1/policies`)
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error,"ERROR FETCHING POLICIES");
    
  }
}



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const allPolicies = await getallpolicies()

  return (
    <html lang="en">
   
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
      <Footer allPolicies={allPolicies} />
      </LenisWrapper>
    </body>
  </html>
  );
}

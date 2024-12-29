import { BACKEND_URL } from "@/app/layout";
import { Facebook, MailIcon, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";


export async function getallpolicies() {
  try {
    const response = await fetch(`${BACKEND_URL}/wp-json/custom-api/v1/policies`)
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error,"ERROR FETCHING POLICIES");
    
  }
}


const legalAndSupportLinks = [
  { name: "FAQs", url: "/faqs" },
  { name: "Terms & Conditions", url: "/terms-conditions" },
  { name: "Privacy Policy", url: "/privacy-policy" },
];



const Footer =async () => {
  const allPolicies = await getallpolicies()
  // console.log(allPolicies,"allPoliciesallPolicies");
  
  const currentYear = new Date().getFullYear();

  return (

    <footer className={`border-t px-4 border-gray-600 mt-10 py-10  z-50  overflow-x-hidden text-white   mx-auto  w-full bg-cover  bottom-0 bg-no-repeat  `}>
    
      <div className="space-y-6 bg-transparent overflow-hidden container mx-auto">
        <div className="flex   justify-between mx-auto ">
          {/* Company Info */}
          <div className="">
            <img
              src="/home/cslogo-black.png"
              className="mr-5 w-[60px] md:w-[90px] mb-2 "
              alt="Footer Logo"
            />
           
          </div>

           {/* Legal and Support */}
           <div className="flex-1 mx-10" >
          <div className="w-full h-full flex items-center justify-center lg:mx-auto">
           
            <div className="space-x-5 flex items-end">
              {allPolicies.map((item) => (
                <Link data-aos="fade-up"
                  href={`/policies/${item.slug}`}
                  key={item.name}
                  className="text-base block text-gray-300 font-[500] hover:text-purple-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            </div>
          </div>

          
        </div>
        {/* <hr /> */}
        <div className="w-full h-[1px] !mt-12 bg-gray-500"></div>
        <p className="text-sm xl:text-sm md:text-center">
          © {currentYear} All Rights Reserved{" "}
          <a
            href="/"
            className="text-black hover:text-purple-300"
            target="_blank"
          >
            Siyahfy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

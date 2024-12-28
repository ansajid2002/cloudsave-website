import { Facebook, MailIcon, PhoneCall } from "lucide-react";
import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const blackNavigation = [
  { name: "About Us", url: "/about-us" },
  { name: "Pricing", url: "/pricing" },
  // { name: "Features", url: "/features" },
  { name: "Contact Us", url: "/contact-us" },
];

const legalAndSupportLinks = [
  { name: "FAQs", url: "/faqs" },
  { name: "Terms & Conditions", url: "/terms-conditions" },
  { name: "Privacy Policy", url: "/privacy-policy" },
];

const sociaMediaLinks = [
  
  { name: "Facebook", url: "#" ,icon:<FaFacebook/>},
  { name: "Twitter", url: "#",icon:<BsTwitter/> },
  { name: "Instagram", url: "#" ,icon : <BsInstagram/> },
]

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (

    <footer className={`border-t px-4 border-gray-600 mt-10 py-16  z-50  overflow-x-hidden text-white   mx-auto  w-full bg-cover  bottom-0 bg-no-repeat  `}>
    
      <div className="space-y-6 bg-transparent overflow-hidden container mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[25%,15%,15%,30%] xl:grid-cols-[28%,18%,18%,30%] justify-between mx-auto ">
          {/* Company Info */}
          <div className="">
            <img
              src="/home/cslogo-black.png"
              className="mr-5 w-[60px] md:w-[90px] mb-2 "
              alt="Footer Logo"
            />
            <p className="mt-3 text-sm xl:text-base text-gray-300 font-[500]">
            CloudSave Secures Your Data With Excellence.<br/>Your Infinite Storage Solution
            </p>
          </div>

          {/* Navigation Links */}
          <div className="">
            <div className="w-[130px]  lg:mx-auto">

            <h3 className="text-2xl font-[500]">Company</h3>
            <div className="flex items-center space-x-2 mt-2 mb-5">
            <p className="w-8 h-[2px] bg-purple-400 rounded-md"></p>
              <p className="w-20 bg-purple-500 h-[2px] rounded-md"></p>

            </div>
            <div className="space-y-3">
              {blackNavigation.map((item) => (
                <a data-aos="fade-up"
                href={item.url}
                key={item.name}
                className="text-sm block text-gray-300 font-[500] hover:text-purple-300"
                >
                  {item.name}
                </a>
              ))}
              </div>
            </div>
          </div>

         

          {/* Contact Info */}
          <div className="">
          <div className="w-[180px]  lg:mx-auto">
            <h3 className="text-2xl font-[500]">Follow Us On</h3>
            <div className="flex items-center space-x-2 mt-2 mb-5">
              <p className="w-8 h-[2px] bg-purple-400 rounded-md"></p>
              <p className="w-20 bg-purple-500 h-[2px] rounded-md"></p>
            </div>
            <div className="space-y-3">
              {sociaMediaLinks.map((item) => (
                <a data-aos="fade-up"
                  href={item.url}
                  key={item.name}
                  className="text-sm  flex  items-center space-x-2 text-gray-300 font-[500] hover:text-purple-300"
                >
                  <span className="text-lg mr-2">{item.icon}</span>
                  {item.name}
                </a>
              ))}
            </div>
            </div>
          </div>

           {/* Legal and Support */}
           <div className="" >
          <div className="w-[180px]  lg:mx-auto">
            <h3 className="text-2xl font-[500]">Legal & Support</h3>
            <div className="flex items-center space-x-2 mt-2 mb-5">
              <p className="w-8 h-[2px] bg-purple-400 rounded-md"></p>
              <p className="w-20 bg-purple-500 h-[2px] rounded-md"></p>
            </div>
            <div className="space-y-3">
              {legalAndSupportLinks.map((item) => (
                <a data-aos="fade-up"
                  href={item.url}
                  key={item.name}
                  className="text-sm block text-gray-300 font-[500] hover:text-purple-300"
                >
                  {item.name}
                </a>
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

import { MailIcon, PhoneCall } from "lucide-react";
import React from "react";

const blackNavigation = [
  { name: "About Us", url: "/about-us" },
  { name: "Pricing", url: "/pricing" },
  { name: "Features", url: "/features" },
  { name: "Blogs", url: "/blogs" },
  { name: "Contact Us", url: "/contact-us" },
];

const legalAndSupportLinks = [
  { name: "FAQs", url: "/faqs" },
  { name: "Terms & Conditions", url: "/terms-conditions" },
  { name: "Privacy Policy", url: "/privacy-policy" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (

    <footer className={`border-t px-4 border-gray-300 mt-10 py-16  z-50  overflow-x-hidden text-white   mx-auto bg-[url("https://img.freepik.com/free-vector/5g-networking-technology-background-with-blue-digital-line_53876-119505.jpg?t=st=1733678248~exp=1733681848~hmac=87ee29311ad9af0bb0c9a243c2ff37f5a82b4a594035fc1b82fd97aabed8ffd3&w=900")] w-full bg-cover  bottom-0 bg-no-repeat  `}>
    
      <div className="space-y-6 bg-transparent overflow-hidden container mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[25%,15%,15%,30%] xl:grid-cols-[28%,18%,18%,30%] justify-between mx-auto ">
          {/* Company Info */}
          <div className="">
            <img
              src="/logo/siyafy-logo.png"
              className="mr-5 w-[60px] md:w-[190px] mb-2 -mt-3"
              alt="Footer Logo"
            />
            <p className="mt-2 text-sm xl:text-sm text-gray-300 font-[500]">
              It is a long established fact that from will be <br />
              distracted by the readable from when looking
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
                className="text-sm block text-gray-300 font-[500] hover:text-primary"
                >
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
                  className="text-sm block text-gray-300 font-[500] hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="">
          <div className="w-[300px] bg-black border border-gray-700 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4  lg:mx-auto">
            <span className="text-sm text-purple-300">Address</span>
            <h3 className="text-2xl font-[500] mb-2">Ready to get started?</h3>
            <p className="text-gray-300 text-sm">
              It is a long established fact that<br />
              a reader will be distracted layout
            </p>
            <div className="flex flex-col space-y-3 mt-2.5 text-[12px] xl:text-[14px]">
              <div className="flex items-start mt-1.5 gap-2">
                <MailIcon size={20} color="purple" />
                <p className="text-gray-300 text-sm">
                  info@siyahfy.com<br />
                  contact@siyahfy.com
                </p>
              </div>

              <div className="flex items-start gap-2 !mt-4">
                <PhoneCall size={20} color="purple" />
                <p className="text-gray-300 text-sm">
                  +91 987654321<br />
                  +91 987654321
                </p>
              </div>
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
            className="text-black hover:text-primary"
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

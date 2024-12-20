"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";

const NewHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [scrollDownHeader, setScrollDownHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrollDownHeader(true); // Show the scroll-down header
      } else {
        setScrollDownHeader(false); // Show the fixed header
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden"; // Disable scroll when mobile menu is open
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll
    }
  }, [mobileMenu]);

  // Header content
  const headerContent = (
    <>
      <Link href={"/"} className="max-lg:hidden">
        <img
          src="/logo/cloudsave.png"
          className="w-[150px] lg:w-[240px] "
          alt="Siyahfy"
          onClick={() => setMobileMenu(false)}
        />
      </Link>

<div className=""> 

      <Menu
        showCatMenu={showCatMenu}
        setShowCatMenu={setShowCatMenu}
        showContactMenu={showContactMenu}
        setShowContactMenu={setShowContactMenu}
        setMobileMenu={setMobileMenu}
        />
        </div>

     

      <div
        className={`fixed top-0 z-30 right-0 h-full w-full md:w-[400px]  shadow-md transition-transform duration-700 ease-in-out`}
        style={{
          transform: mobileMenu ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <MenuMobile
          showCatMenu={showCatMenu}
          showContactMenu={showContactMenu}
          setShowCatMenu={setShowCatMenu}
          setShowContactMenu={setShowContactMenu}
          setMobileMenu={setMobileMenu}
        />
      </div>

      <div className="flex lg:hidden items-center gap-2 justify-between w-full lg:w-auto text-black">
        <Link href={"/"} className="block lg:hidden">
          <img
            src="/logo/cloudsave.png"
            className="w-[150px] "
            alt="Siyahfy"
            onClick={() => setMobileMenu(false)}
          />
        </Link>

        <div className="w-8 lg:w-12 h-8 lg:h-12 rounded-full flex lg:hidden justify-center items-center cursor-pointer relative -mr-2 z-30">
          {mobileMenu ? (
            <VscChromeClose
              className="text-[20px]"
              color="#000"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <BiMenuAltRight
  color="#000"
  className="text-[30px]"
  onClick={() => {
    setMobileMenu(true);
    // Scroll to 20% of the page height
    // const scrollPosition = window.innerHeight * 0.2;
    // window.scrollTo({
    //   top: scrollPosition,
    //   behavior: "smooth",
    // });
  }}
/>
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Fixed Header */}
      <header
        className={`w-full max-lg:hidden overflow-hidden  fixed  top-0 z-50 px-5 mt-6 md:mt-10 transition-transform duration-700 ${
          scrollDownHeader ? " opacity-0 " : " opacity-100 translate-y-0"
        }`}
      >
        <div
          className={`sjcontainer lg:px-10 h-[9vh] md:h-[10vh] flex items-center justify-between`}
        >
          {headerContent}
        </div>
      </header>

      {/* Scroll-Down Header */}
      <header
        className={`w-full   fixed top-0 z-50 px-5 bg-black  shadow-md transition-transform lg:duration-700 ${
          scrollDownHeader ? "translate-y-0 opacity-100" : ` lg:-translate-y-full  opacity-100 lg:opacity-0`
        }`}
      >
        <div
          className={`sjcontainer  lg:px-10 h-[9vh] md:h-[10vh] flex items-center justify-between`}
        >
          {headerContent}
        </div>
      </header>
    </>
  );
};

export default NewHeader;

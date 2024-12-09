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
          src="/logo/siyafy-logo.png"
          className="w-[50px] lg:w-[200px] ml-4"
          alt="Siyahfy"
          onClick={() => setMobileMenu(false)}
        />
      </Link>

      <Menu
        showCatMenu={showCatMenu}
        setShowCatMenu={setShowCatMenu}
        showContactMenu={showContactMenu}
        setShowContactMenu={setShowContactMenu}
        setMobileMenu={setMobileMenu}
      />

      {mobileMenu && (
        <div
          className="max-md:hidden fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setMobileMenu(false)} // Clicking on overlay closes the menu
        ></div>
      )}

      <div
        className={`fixed top-0 z-30 right-0 h-full w-full md:w-[400px] bg-black shadow-md transition-transform duration-700 ease-in-out`}
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
            src="/logo/siyafy-logo.png"
            className="w-[60px] mt-8"
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
              color="#fff"
              className="text-[30px]"
              onClick={() => setMobileMenu(true)}
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
        className={`w-full overflow-x-hidden  fixed  top-0 z-50 px-5 mt-4 md:mt-10 transition-transform duration-700 ${
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
        className={`w-full fixed top-0 z-50 px-5 bg-gradient-to-r to-secondary via-purple-700 from-purple-600  shadow-md transition-transform duration-700 ${
          scrollDownHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div
          className={`sjcontainer lg:px-10 h-[9vh] md:h-[10vh] flex items-center justify-between`}
        >
          {headerContent}
        </div>
      </header>
    </>
  );
};

export default NewHeader;

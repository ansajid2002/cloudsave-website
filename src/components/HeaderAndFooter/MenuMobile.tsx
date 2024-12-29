import { menuData } from "@/app/layout";
import Link from "next/link";
import React from "react";


const MenuMobile = ({ 
  setMobileMenu,
}) => {
  // Ensure only one menu opens at a time

  return (
    <>
      <ul className="flex flex-col lg:hidden font-normal bg-gray-900 text-white text-base absolute top-[8svh] h-[100vh] left-0 w-full bg-transparent border-t  z-50">
        {menuData.map((item) => {
          return (
            <React.Fragment key={item.id}>
             
                <li className="py-4 px-5 border-b">
                  <Link
                    href={item?.url}
                    onClick={() => setMobileMenu(false)}
                  >
                    {item.name}
                  </Link>
                </li>
            
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default MenuMobile;

import { menuData } from "@/app/layout";
import Link from "next/link";
import React from "react";


const MenuMobile = ({ 
  setMobileMenu,
}) => {
  // Ensure only one menu opens at a time

  return (
    <>
      <ul className="flex flex-col lg:hidden font-normal bg-gray-950 text-white text-base absolute top-[8svh] h-[100vh] left-0 w-full  border-t mt-3  z-50">
        {menuData.map((item) => {
          return (
            <React.Fragment key={item.id}>
             
                <li className="py-4 px-5">
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

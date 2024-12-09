"use client"
import { menuData } from "@/app/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsChevronDown } from "react-icons/bs";



const Menu = ({

}) => {
  const path = usePathname();


  return (
    <>
      <div className="hidden lg:flex items-center  gap-8 ">
        {menuData.map((item) => {
          const isActive = path === item.url;

          return (
            <div key={item.id} className="">
               
                <div
                  className={`relative ${item.name === "About Us" && "-mb-1"} cursor-pointer font-[500] text-[15px] transition-all ease-in-out border-b-1  ${
                    isActive
                      ? "text-gray-200 border-white"
                      : "border-transparent text-gray-300 hover:text-amber-600 group"
                  } pb-1`}
                >
                  <Link href={item?.url}>{item.name}</Link>
                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] bg-amber-600 transition-all ease-in-out duration-500 transform -translate-x-1/2 ${
                      isActive
                        ? "w-full -translate-x-1/2"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </div>
       
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;

"use client";
import React, { useState, useRef } from "react";
import { ChevronDown, MoveRight } from "lucide-react";
import { Flame } from "lucide-react";
import Image from "next/image";
import { MdDoubleArrow } from "react-icons/md";
import Link from "next/link";

// FAQ Data
const faqData = [
  {
    question: "01. What is CloudSave?",
    answer: " CloudSave is a SaaS platform that offers unlimited cloud storage for individuals and businesses, with features like file sharing, streaming, and integrations with popular cloud services."
  },
  {
    question: "02. Is CloudSave truly unlimited?",
    answer: " Yes! Free for all, you can upload and store an unlimited number of files without restrictions on storage capacity. However there is premium features for the advance usage."
  },
  {
    question: "03. How do I sign up for CloudSave?",
    answer: " Visit www.cloudsave.org, click on Sign Up, and follow the simple steps to create your account."
  },
  {
    question: "04. Can I share files with others?",
    answer: " Absolutely! CloudSave allows you to share files and folders with secure links. You can also share files within groups and collaborate in real time."
  },
  {
    question: "05. How secure is my data on CloudSave?",
    answer: " We use advanced encryption technologies to protect your data at rest and in transit. Your privacy and security are our top priorities."
  },
  {
    question: "06.  Can I integrate CloudSave with other platforms?",
    answer: "Yes! CloudSave supports integrations with Google Drive, OneDrive, iCloud, Google Photos, and more for easy file transfers."
  },

];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="sjcontainer py-24">
        <div className="mb-8 text-center">
        <div className="mb-4 rounded-3xl bg-purple-100 text-purple-900 hover:bg-purple-100 inline-flex items-center px-4 py-1.5 ">
          <Flame className="w-4 h-4 mr-1 text-orange-500" />
          Frequently asked questions
        <h2 className="text-xl mb-4"></h2>
        </div>
        <p className=" text-white text-muted-foreground text-3xl md:text-5xl font-[500]">
        Work smarter with easy access for user..
        </p>
      </div>
        <div className="grid gap-x-20 mt-6 md:mt-12 md:grid-cols-[40%,55%] items-start">

    <div className="  mx-auto md:p-6">
      {/* Header Section */}
      

      {/* Accordion Section */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItem === index}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
    <div className="relative mt-8">

    <div>
        <Image src="/home/dashboard.png" className="w-full max-w-[600px] rounded-2xl overflow-hidden" width={800}  height={800} alt="s" />
    </div>
    <div className="absolute bottom-2 md:-bottom-24 left-2 md:-left-8 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">

        <Image src="/home/dashboard4.png" className=" w-24 md:w-36 rounded-2xl" width={800}  height={800} alt="s" />
    </div>
    </div>

    </div>
    <div className="flex items-center justify-center w-full mt-12">
          <Link href={"/faq"}>
            <p className="py-2.5 hover:shadow-md text flex items-center  hover:opacity-90 px-6 bg-gradient-to-r from-secondary to-purple-700 gap-1 lg:gap-2 text-xl  text-white rounded-md">
              Browse More FAQ's
              <MoveRight
                size={18}
                className="mt-1"
                strokeWidth={1}
                color="#fff"
              />
            </p>
          </Link>
        </div>
    </div>

  );
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border  rounded-lg  ">
      <button
        className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className=" text-gray-200 font-[600] text-lg">{question}</span>
        <MdDoubleArrow
          className={`w-5 h-5 text-purple-500 transition-transform duration-200 ${
            isOpen ? "transform rotate-90" : ""
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0
        }}
      >
        <div className="px-6 pb-4 text-gray-300 font-[500]">{answer}</div>
      </div>

    </div>
  );
}




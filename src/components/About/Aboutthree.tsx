"use client";
import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Flame } from "lucide-react";
import Image from "next/image";
import { MdDoubleArrow } from "react-icons/md";

// FAQ Data
const faqData = [
  {
    question: "01. Create Account",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"
  },
  {
    question: "02. Install Tracking",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"
  },
  {
    question: "03. Track Analytics",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"
  },
  {
    question: "04. Integrate",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"
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
          How It Works
        <h2 className="text-xl mb-4"></h2>
        </div>
        <p className="text-muted-foreground text-3xl md:text-5xl font-[500]">
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
        <Image src="/home/dashboard1.png" className="w-full max-w-[600px] rounded-2xl overflow-hidden" width={800}  height={800} alt="s" />
    </div>
    <div className="absolute bottom-2 md:-bottom-8 left-2 md:-left-8 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">

        <Image src="/home/dashboard2.png" className=" w-28 md:w-40 rounded-2xl" width={800}  height={800} alt="s" />
    </div>
    </div>

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
        <span className=" text-gray-900 font-[600] text-xl">{question}</span>
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
        <div className="px-6 pb-4 text-gray-500 font-[500]">{answer}</div>
      </div>
    </div>
  );
}




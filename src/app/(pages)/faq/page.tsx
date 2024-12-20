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
    question: "1. What is CloudSave?",
    answer: " CloudSave is a SaaS platform that offers unlimited cloud storage for individuals and businesses, with features like file sharing, streaming, and integrations with popular cloud services."
  },
  {
    question: "2. Is CloudSave truly unlimited?",
    answer: " Yes! Free for all, you can upload and store an unlimited number of files without restrictions on storage capacity. However there is premium features for the advance usage."
  },
  {
    question: "3. How do I sign up for CloudSave?",
    answer: " Visit www.cloudsave.org, click on Sign Up, and follow the simple steps to create your account."
  },
  {
    question: "4. Can I share files with others?",
    answer: " Absolutely! CloudSave allows you to share files and folders with secure links. You can also share files within groups and collaborate in real time."
  },
  {
    question: "5. Is there a limit on file upload sizes?  ",
    answer: "Free users have some upload size limits, but premium users can upload files of any size"
  },
  {
    question: "6. Can I track downloads of my shared files?",
    answer: "Yes, CloudSave provides detailed insights for your shared files, including download counts and access logs"
  },
  {
    question: "7. How secure is my data on CloudSave?",
    answer: "We use advanced encryption technologies to protect your data at rest and in transit. Your privacy and security are our top priorities."
  },
  {
    question: "8. Does CloudSave comply with global data protection regulations?",
    answer: "Yes, we adhere to industry-leading certifications and data protection regulations, ensuring your data is handled securely."
  },
  {
    question: "9. What are the benefits of upgrading to Premium?",
    answer: " Premium users enjoy faster upload speeds, larger file size limits, advanced sharing features, detailed analytics, and priority support."
  },
  {
    question: "10. What are CloudSave coins, and how can I earn them?",
    answer: " CloudSave coins are rewards you can earn by completing tasks like daily logins, referring friends, or participating in events. Coins can be redeemed for premium services."
  },
  {
    question: "11.  Can I integrate CloudSave with other platforms?",
    answer: " Yes! CloudSave supports integrations with Google Drive, OneDrive, iCloud, Google Photos, and more for easy file transfers."
  },
  {
    question: "12. What devices are supported?",
    answer: "CloudSave is accessible on all major platforms, including Windows, macOS, Android, and iOS."
  },
  {
    question: "13.  How can I contact support?",
    answer: "You can reach us through our support page or email us at support@cloudsave.org. Premium users get access to 24/7 priority support"
  },
  {
    question: "14. How do I upgrade or cancel my subscription?",
    answer: "You can manage your subscription through the Account Settings section of your CloudSave dashboard."
  },
  {
    question: "15. What happens if I exceed my free plan limits?",
    answer: "You’ll receive a notification, and you can upgrade to a premium plan to enjoy uninterrupted services."
  },
 
    
   
  ];
export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="sjcontainer py-12 md:py-20 mt-20">
         <div className="mb-8 text-white text-center">
        {/* <div className="mb-4 bg-orange-100 text-themeOrange hover:bg-orange-100 inline-flex items-center px-6 text-sm font-[500] py-1.5 rounded-3xl">
          <Flame className="w-4 h-4 mr-1 text-themeOrange" />
          FAQs
        </div> */}
        <h2 className=" text-3xl text-purple-400 md:text-4xl font-[500] mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-[1200px] text-lg mx-auto">
        Join us in making cloud storage limitless, secure, and free for all. Welcome to CloudSave—Your Data’s Forever Home.
        </p>
      </div>

        <div className="md:flex items-start md:space-x-8  max-md:space-y-4">


    

      {/* Accordion Section */}
      <div className="space-y-4">
        {faqData?.slice(0,8).map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItem === index}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>

     
    <div className="space-y-4">
        {faqData?.slice(8,).map((item, index) => (
          <AccordionItem
            key={index + 10}
            question={item.question}
            answer={item.answer}
            isOpen={openItem === index + 10}
            onClick={() => toggleItem(index +  10)}
          />
        ))}
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
        className="flex justify-between items-start w-full px-6 py-4 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-medium max-md:text-sm text-white">{question}</span>
        <MdDoubleArrow
          className={`w-5 h-5 min-w-5 text-themeOrange transition-transform duration-200 ${
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
        <div className="px-6 pb-4 max-md:text-sm text-gray-300">{answer}</div>
      </div>
    </div>
  );
}

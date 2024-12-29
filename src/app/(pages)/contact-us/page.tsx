'use client';

import { X, Mail, Phone, User } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactForm() {
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    issue: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setInputValues({ ...inputValues, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted', inputValues);

    // Simulate form submission delay
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setInputValues({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        issue: '',
      });
    }, 2000); // Reset after 2 seconds
  };

  const renderInput = (id: string, type: string, placeholder: string, Icon: any) => (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-10 top-1/2 transform -translate-y-1/2 text-slate-400 transition-all ${
          inputValues[id] ? '-translate-y-8 text-xs text-purple-700 tracking-wider bg-white py-0.5 px-2 rounded-lg font-bold' : ''
        }`}
      >
        {placeholder}
      </label>
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
      <input
        type={type}
        id={id}
        value={inputValues[id]}
        onChange={handleInputChange}
        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );

  return (
    <div className=" relative mt-16 md:mt-36 md:py-10">
      <div className="bg-black/50 flex items-center justify-center">
        <div className="bg-gray-950 rounded-lg w-full max-w-4xl overflow-hidden flex">
          {/* Left Side */}
          <div
            className={`p-8 hidden bg-[url("https://img.freepik.com/free-vector/digital-cloud-pattern-background-connection-technology_53876-119493.jpg?t=st=1735448995~exp=1735452595~hmac=2fdb544f1977847523311ab167df3a2d44d43f26225b3a37e48b8ea54465b2d9&w=740")]  md:flex md:w-2/5 flex-col justify-between relative`}
          >
            <div className="space-y-4 h-full">
              <div className="relative h-full flex items-center justify-center">
                <Image
                  src="/home/cslogo-black.png"
                  alt="Token Logo"
                  width={300}
                  height={300}
                  className="w-24 object-contain"
                />
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">{/* Add your social links */}</div>
          </div>

          {/* Right Side */}
          <div className="p-8 flex-1">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl text-white font-bold">GET IN TOUCH</h2>
                <p className="text-slate-500 text-sm">24/7 We will answer your questions and problems</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderInput('firstName', 'text', 'First Name', User)}
                {renderInput('lastName', 'text', 'Last Name', User)}
              </div>
              {renderInput('email', 'email', 'Email', Mail)}
              {renderInput('phone', 'number', 'Phone', Phone)}
              <div className="relative">
                <label
                  htmlFor="issue"
                  className={`absolute left-3 top-6 transform -translate-y-1/2 text-slate-400 transition-all ${
                    inputValues.issue
                      ? 'top-2 text-xs -translate-y-9 text-purple-700 tracking-wider bg-white py-0.5 px-2 rounded-lg font-bold'
                      : ''
                  }`}
                >
                  Message here ...
                </label>
                <textarea
                  id="issue"
                  rows={4}
                  value={inputValues.issue}
                  onChange={handleInputChange}
                  className="w-full pl-3 pr-4 py-2 border  border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-lg transition-colors ${
                  isSubmitted
                    ? 'bg-green-500 text-white cursor-default'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Message Submitted!' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

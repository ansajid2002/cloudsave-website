import React from 'react'
import { BiCheckDouble } from 'react-icons/bi';

const plans = [
    {
      plan: "Basic Plan",
      price: "34.99",
      period: "Per Month",
      features: [
        "7 days free access",
        "Maximum of 5 collaborators",
        "Cloud backup 1GB",
        "Maximum 50 tasks per week",
        "100+ HTML UI Elements",
        "Updates for 1 Year"
      ],
      button: "Get Your Free Plan"
    },
    {
      plan: "Standard Plan",
      price: "64.99",
      period: "Per Month",
      features: [
        "7 days free access",
        "Maximum of 5 collaborators",
        "Cloud backup 1GB",
        "Maximum 50 tasks per week",
        "100+ HTML UI Elements",
        "Updates for 1 Year"
      ],
      button: "Get Your Free Plan"
    },
    {
      plan: "Premium Plan",
      price: "84.99",
      period: "Per Month",
      features: [
        "7 days free access",
        "Maximum of 5 collaborators",
        "Cloud backup 1GB",
        "Maximum 50 tasks per week",
        "100+ HTML UI Elements",
        "Updates for 1 Year"
      ],
      button: "Get Your Free Plan"
    }
  ];

const Homeseven = () => {
  return (
    <div> <div className="flex flex-col items-center justify-center  ">
    <h1 className="text-3xl font-bold mb-8">Choose Your Plan</h1>
    <div className="grid grid-cols-1 md:grid-cols-3  w-full innercontainer gap-6">
      {plans.map((plan, index) => (
        <div data-aos="zoom-in" key={index} className={`bg-purple-50 border relative p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl ${index !== 1 && "scale-95" }`}>
          <h2 className="text-base text-purple-600 font-semibold mb-4">{plan.plan}</h2>
          <p className="text-4xl font-bold ">${plan.price} <span className="text-sm font-[400]  text-gray-500">/ {plan.period}</span></p>
          <p className=' text-gray-500 text-sm my-4'>There are many variations of passages of Lorem Ipsum available, but the majority</p>
          <p className='w-full h-[2px] bg-purple-200 mb-4'></p>
          <ul className="mb-16 space-y-5 ">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center mb-2  gap-2">
                                    {/* <img src="/home/checkmarkIcon.svg" className='w-4' /> */}
                                    <BiCheckDouble className='text-primary font-bold text-2xl'/>
                                <span className='text-gray-600 text-sm'>

                {feature}
                                </span>
              </li>
            ))}
          </ul>
          <div className={`w-full text-center -ml-6 absolute bottom-0 ${index === 1 ? "bg-primary" : "bg-black"} text-white py-4 rounded-b-3xl hover:bg-opacity-70`}>
            {plan.button}
          </div>
        </div>
      ))}
    </div>
  </div></div>
  )
}

export default Homeseven
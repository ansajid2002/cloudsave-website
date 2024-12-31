'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function PricingTable() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic',
      price: 'FREE',
      description: 'Basic storage for individuals or small businesses',
      features: [
        '100 MB file size',
        'Basic file sharing links only',
        'Standard upload speed',
      ],
      storage: 'Infinite',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: isYearly ? '0.99 - 9.99' : '1.49 - 14.99',
      description: 'Advanced features for larger businesses',
      features: [
        'All free inclusive ',
        '128GB - 256GB file size',
        'Advanced features',
        'Boosted Upload speed',
      ],
      storage: 'Infinite',
      highlighted: true,
    },
    {
      name: 'Business',
      price: 'Custom',
      description: 'Fully customizable advanced plan for larger organizations',
      features: [
        'All Free and Professional inclusive',
        '2-Factor Authentication',
        'Direct Report & Team Review',
        'Group Analytics',
        'Priority Support',
        'Dedicated Account Manager',
      ],
      storage: "Infinite",
      highlighted: false,
    },
  ];

  return (
    <div id="pricingsection" className="w-full py-12 scroll-mt-20  bg-black text-white">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="md:flex max-md:space-y-3 items-center justify-between">
      <h2 className=" text-2xl md:text-3xl font-bold">Comprehensive Pricing</h2>
      <div className="flex items-center gap-4">
        <span  className={` ${!isYearly ? " text-white " : "text-gray-500"} text-base`}>Bill Monthly</span>
        
        <label className="inline-flex items-center cursor-pointer  px-2">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-purple-600">
            <div
              className={`absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full w-5 h-5 transition-all ${
                isYearly ? 'translate-x-5' : ''
              }`}
            ></div>
          </div>
        </label>
        
        <span className={` ${isYearly ? " text-white" : "text-gray-500"} text-base`}>Bill Yearly</span>
      </div>
    </div>

               
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 gap-x-10">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative border-2 border-gray-800 hover:border-purple-400 duration-300 bg-black rounded-2xl p-6 pb-12 ${
                  plan.highlighted ? 'ring-2 ring-purple-500' : ''
                }`}
              >

                {/* Highlighted Badge */}
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-purple-500 text-white rounded-full">
                    Best Deal
                  </span>
                )}

                {/* Card Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p className="text-4xl font-bold">
                    $ {plan.price}{' '}
                    <span className="text-sm font-normal text-gray-400">
                      {plan.price !== 'FREE' && `/${isYearly ? 'yr' : 'mo'}`}
                    </span>
                  </p>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>
                <div className="mt-4 flex items-center space-x-3">
                    <p className="text-base font-medium">Storage Size</p>
                    <p className="text-xl text-gray-400">{plan.storage}</p>
                  </div>
                  <div className='h-[1px] mt-2 mb-6 bg-purple-400 w-full'></div>
                {/* Card Content */}
                <div className="mb-4">
                  <div className="grid gap-2 space-y-1">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Check className="w-4 h-4 text-purple-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className='absolute left-0 bottom-2 w-full'>
                  <div
                    className={` mx-2 text-center py-2  text-sm font-medium rounded-lg hover:-translate-y-1 duration-200 ${
                      plan.highlighted
                        ? 'bg-purple-500 text-white hover:bg-purple-600'
                        : 'bg-gray-700 hover:bg-purple-700 text-white cursor-pointer '
                    }`}
                  >
                    Choose Plan
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

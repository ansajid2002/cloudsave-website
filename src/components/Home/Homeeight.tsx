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
        'AES 256-bit Encryption',
        '2-Factor Authentication',
        'Direct Report & Team Review',
      ],
      storage: '250 GB',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: isYearly ? '1,999 - 6,999' : '249 - 799',
      description: 'Advanced features for larger businesses',
      features: [
        'AES 256-bit Encryption',
        '2-Factor Authentication',
        'Direct Report & Team Review',
        'File Versioning',
      ],
      storage: '500 GB - 10 TB',
      highlighted: true,
    },
    {
      name: 'Business',
      price: 'Custom',
      description: 'Fully customizable advanced plan for larger organizations',
      features: [
        'AES 256-bit Encryption',
        '2-Factor Authentication',
        'Direct Report & Team Review',
        'File Versioning',
        'Remote Wipe',
        'Dedicated Account Manager',
      ],
      storage: "Let's discuss!",
      highlighted: false,
    },
  ];

  return (
    <div id="pricingsection" className="w-full py-12 scroll-mt-20  bg-black text-white">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Comprehensive Performance Management
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-sm">Bill Monthly</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isYearly}
                  onChange={() => setIsYearly(!isYearly)}
                />
                <span className="w-10 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></span>
              </label>
              <span className="text-sm">
                Bill Yearly {isYearly && '(Save 25%)'}
              </span>
            </div>
          </div>

               
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 gap-x-10">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative border border-gray-800 bg-black rounded-2xl p-6 pb-12 ${
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
                    ₹ {plan.price}{' '}
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
                    className={` mx-2 text-center py-2  text-sm font-medium rounded-2xl ${
                      plan.highlighted
                        ? 'bg-purple-500 text-white hover:bg-purple-600'
                        : 'bg-gray-700 text-white hover:bg-gray-800'
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

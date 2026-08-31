'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const PricingSection = () => {
  const router = useRouter();

  const plans = [
    {
      name: 'Lump Sum',
      description: 'Design And Development',
      price: 'A$1999',
      period: '+$25/mo Hosting',
      features: [
        { text: 'Design And Development', included: true },
        { text: '$25/mo Hosting', included: true },
        { text: '$100 fee Per Section/Page after 5', included: true },
        { text: '+$50/mo Unlimited Edits Add-on', included: true },
        { text: '+$250 To Add A Blog', included: true },
        { text: '24/7 Support', included: false },
        { text: 'Lifetime Updates', included: false },
      ],
      buttonText: 'Get Started',
      popular: false,
      contactLink: '/contact?plan=lump-sum',
    },
    {
      name: 'Monthly',
      description: 'Design And Development',
      price: 'A$150',
      period: 'Per Month',
      features: [
        { text: 'Design And Development', included: true },
        { text: 'Includes Hosting', included: true },
        { text: '$100 fee Per Section/Page After 5', included: true },
        { text: '+$250 To Add A Blog', included: true },
        { text: 'Unlimited Edits', included: true },
        { text: '24/7 Support', included: true },
        { text: 'Lifetime Updates', included: true },
      ],
      buttonText: 'Get Started',
      popular: true,
      contactLink: '/contact?plan=monthly',
    },
    {
      name: 'E-commerce',
      description: 'Custom Shopify Store',
      price: 'A$8k',
      period: 'Starting',
      features: [
        { text: 'Custom Shopify Store', included: true },
        { text: 'Configure Any And All Apps', included: true },
        { text: 'Integrated Shipping', included: true },
        { text: 'Shopify Tutorial Walkthrough', included: true },
        { text: 'Fully Editable In Shopify CMS', included: true },
        { text: '+$50/mo Unlimited Edits', included: false },
        { text: '24/7 Support', included: false },
      ],
      buttonText: 'Get Started',
      popular: false,
      contactLink: '/contact?plan=ecommerce',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pricing Packages for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Every Budget
            </span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${plan.popular
                  ? 'border-blue-500 bg-gradient-to-br from-blue-900 to-purple-900 text-white'
                  : 'border-gray-200 hover:border-blue-300'
                  }`}
              >
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3
                      className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'
                        }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm mb-6 ${plan.popular ? 'text-blue-200' : 'text-gray-600'
                        }`}
                    >
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      <span
                        className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'
                          }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`text-lg ml-2 ${plan.popular ? 'text-blue-200' : 'text-gray-600'
                          }`}
                      >
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        {feature.included ? (
                          <Check
                            className={`w-5 h-5 mr-3 ${plan.popular ? 'text-green-400' : 'text-green-500'
                              }`}
                          />
                        ) : (
                          <X
                            className={`w-5 h-5 mr-3 ${plan.popular ? 'text-red-400' : 'text-red-500'
                              }`}
                          />
                        )}
                        <span
                          className={`text-sm ${plan.popular
                            ? feature.included
                              ? 'text-white'
                              : 'text-gray-300'
                            : feature.included
                              ? 'text-gray-700'
                              : 'text-gray-400'
                            }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => {
                      if (plan.name === 'Monthly') {
                        router.push('/checkout/monthly');
                      } else if (plan.name === 'Lump Sum') {
                        router.push('/checkout/lump-sum');
                      } else {
                        router.push(plan.contactLink);
                      }
                    }}
                    className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                      }`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
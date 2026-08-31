'use client';

import React, { useEffect, Suspense } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFormLumpSum from './CheckoutFormLumpSum';

const stripePromise = loadStripe('pk_live_51RbgLrJ3AvfitZEKz6Psn7gztDlMuKpUpaA9MJ4MGprke012vq5zSpYyFPazqPVYINe43VwaIK0Y0ueqYy6NUEZv00cMWYM1Vz');

function CheckoutFormFallback() {
  return (
    <div className="text-center py-8">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );
}

export default function CheckoutLumpSumPage() {
  useEffect(() => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead');
    }
  }, []);

  const plan = {
    name: 'Lump Sum',
    description: 'Design And Development',
    price: 'A$1999',
    period: '+$25/mo Hosting',
    features: [
      'Design And Development',
      '$25/mo Hosting',
      '$100 fee Per Section/Page after 5',
      '+$50/mo Unlimited Edits Add-on',
      '+$250 To Add A Blog',
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-purple-100 font-sans pt-24">
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8">
        {/* Left - Product Info */}
        <section className="relative bg-blue-900 shadow-xl p-8 flex flex-col rounded-2xl text-white">
          <div className="text-center max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-blue-200 text-sm mb-4">{plan.description}</p>
            <div className="mb-4">
              <span className="text-5xl font-bold">{plan.price}</span>
              <span className="text-lg ml-2 text-blue-200">{plan.period}</span>
            </div>
            <ul className="space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-400 w-5 h-5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Right - Checkout Form */}
        <section className="space-y-6">
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <div className="text-center text-black mb-6">
              <p className="font-bold text-xl">
                Fill out your info below to get access! ↓
              </p>
            </div>
            <Elements stripe={stripePromise} options={{ locale: 'en' }}>
              <Suspense fallback={<CheckoutFormFallback />}>
                <CheckoutFormLumpSum />
              </Suspense>
            </Elements>
          </div>

          {/* Trust */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="text-green-500 text-xl">🔒</span> Secure 256-bit SSL encryption
            </div>
            <div className="flex justify-center gap-4 opacity-70 text-sm">
              <span>💳 Visa</span>
              <span>💳 Mastercard</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
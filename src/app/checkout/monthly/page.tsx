'use client';

import React, { useEffect, Suspense } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

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

export default function CheckoutMonthlyPage() {
  useEffect(() => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-purple-100 font-sans pt-24">
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8">
        {/* Left - Product */}
        <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 shadow-xl p-8 flex flex-col rounded-2xl">
          <div className="text-center text-white max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-2">Monthly</h3>
            <p className="text-blue-200 text-sm mb-4">Design And Development</p>
            <div className="mb-4">
              <span className="text-5xl font-bold">A$150</span>
              <span className="text-lg ml-2 text-blue-200">Per Month</span>
            </div>

            <ul className="space-y-2 mb-6 text-left">
              {[
                'Design And Development',
                'Includes Hosting',
                '$100 fee Per Section/Page After 5',
                '+$250 To Add A Blog',
                'Unlimited Edits',
                '24/7 Support',
                'Lifetime Updates',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-400 w-5 h-5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Right - Checkout */}
        <section className="space-y-6">
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <div className="text-center text-black mb-6">
              <p className="font-bold text-xl">
                Fill out your info below to get access! ↓
              </p>
            </div>

            <Elements stripe={stripePromise} options={{ locale: 'en' }}>
              <Suspense fallback={<CheckoutFormFallback />}>
                <CheckoutForm />
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
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

function generateToken(length = 24) {
  return [...Array(length)]
    .map(() => Math.floor(Math.random() * 36).toString(36))
    .join('');
}

export default function CheckoutFormLumpSum() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [couponCode, setCouponCode] = useState('');
  const [couponStatus, setCouponStatus] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: (typeof window !== 'undefined' ? localStorage.getItem('checkoutEmail') : '') || '',
  });
  const [emailValid, setEmailValid] = useState(true);

  const [cart] = useState([
    { id: 2, name: 'Takiso Web Lump Sum', price: 1999.0, quantity: 1 },
  ]);

  const validCoupons = ['TAKISOWEB99'];

  useEffect(() => {
    const code = searchParams.get('couponcode');
    if (code) {
      setCouponCode(code);
      setCouponStatus(validCoupons.includes(code) ? 'applied' : 'invalid');
      setAppliedCoupon(code);
    }
  }, [searchParams]);

  const applyCoupon = () => {
    const code = couponCode.trim();
    if (validCoupons.includes(code)) {
      setCouponStatus('applied');
      setAppliedCoupon(code);
    } else {
      setCouponStatus('invalid');
      setAppliedCoupon(code);
    }
  };

  const total = React.useMemo(() => {
    let basePrice = cart[0].price;
    if (couponStatus === 'applied' && appliedCoupon) {
      basePrice = 99;
    }
    return basePrice;
  }, [cart, couponStatus, appliedCoupon]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContact({ ...contact, email: value });
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(regex.test(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    if (!emailValid) {
      setErrorMessage('Please enter a valid email.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbw4rflQFBXe2byckI1p4j4jCtP-lk1So1MEOG2bVO6N-fIVTvycJG5bpYbtYIzGc7k4Yw/exec',
        {
          method: 'POST',
          body: JSON.stringify({
            firstName: contact.firstName,
            lastName: contact.lastName,
            email: contact.email,
            orderType: 'Lump Sum',
          }),
        }
      );
    } catch (err) {
      console.error('Failed to save contact:', err);
    }

    try {
      const items = cart.map(({ id, quantity }) => ({ id, quantity }));

      const res = await fetch('https://takiso-backend.vercel.app/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          email: contact.email,
          firstName: contact.firstName,
          lastName: contact.lastName,
          promotion_code: appliedCoupon || null,
          pageUrl: window.location.href,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create PaymentIntent');

      const clientSecret = data.clientSecret;
      const cardElement = elements.getElement(CardNumberElement);

      if (!cardElement) {
        setErrorMessage('Card element not found');
        setLoading(false);
        return;
      }

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (paymentResult.error) {
        setErrorMessage(paymentResult.error.message || 'Payment failed');
      } else if (paymentResult.paymentIntent?.status === 'succeeded') {
        const token = generateToken();
        const expiresAt = Date.now() + 5 * 60 * 1000;
        localStorage.setItem('successToken', JSON.stringify({ token, expiresAt }));
        router.push("/success?token=" + token);
      } else {
        setErrorMessage('Payment failed. Please try again.');
      }
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-8 space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Your Contact Info:</h2>
      {(['firstName', 'lastName'] as const).map((field) => (
        <div key={field} className="relative">
          <input
            type="text"
            value={contact[field]}
            onChange={(e) => setContact({ ...contact, [field]: e.target.value })}
            required
            placeholder=" "
            className="w-full border-b-2 border-gray-300 px-0 py-3 text-base focus:outline-none focus:border-blue-500 peer"
          />
          <label
            className={"absolute left-0 transition-all duration-300 pointer-events-none " + (contact[field] ? '-top-2 text-blue-500 text-sm' : 'top-3 text-gray-400 text-base') + " peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-sm"}
          >
            {field === 'firstName' ? 'First Name *' : 'Last Name *'}
          </label>
        </div>
      ))}

      <div className="relative">
        <input
          type="email"
          value={contact.email}
          onChange={handleEmailChange}
          required
          placeholder=" "
          className={"w-full border-b-2 px-0 py-3 text-base focus:outline-none peer " + (emailValid ? 'border-gray-300 focus:border-blue-500' : 'border-red-500 focus:border-red-500')}
        />
        <label
          className={"absolute left-0 transition-all duration-300 pointer-events-none " + (contact.email ? '-top-2 text-blue-500 text-sm' : 'top-3 text-gray-400 text-base') + " peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-sm"}
        >
          Email *
        </label>
        {!emailValid && <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>}
      </div>

      <div className="mt-4">
        <label className="block text-gray-700 mb-1">Coupon Code</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); applyCoupon(); } }}
            placeholder="Enter coupon code"
            className="flex-1 border p-2 rounded"
          />
          <button
            type="button"
            onClick={applyCoupon}
            className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
          >
            Apply
          </button>
        </div>
        {couponStatus === 'applied' && <p className="text-green-500 mt-1">Coupon applied! 95% OFF</p>}
        {couponStatus === 'invalid' && <p className="text-red-500 mt-1">Coupon not valid</p>}
      </div>

      <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
      <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-1 divide-y divide-gray-200">
        {cart.map((item) => {
          const isDiscounted = couponStatus === 'applied' && appliedCoupon;
          const originalPrice = item.price;
          const discountedPrice = 99;

          return (
            <div key={item.id} className="flex justify-between py-2 items-center">
              <span className="font-medium text-gray-900">{item.name} x {item.quantity}</span>
              <span className="font-semibold text-gray-900 flex items-center gap-2">
                {isDiscounted ? (
                  <>
                    <span className="text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
                    <span className="text-green-600 font-bold">${discountedPrice.toFixed(2)}</span>
                  </>
                ) : (
                  <span>${originalPrice.toFixed(2)}</span>
                )}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center font-bold text-gray-900 border-t border-gray-200 mt-2 pt-2">
        <span>Total (includes GST)</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Payment Info</h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="text-gray-600 text-sm mb-1 block">Card Number*</label>
          <div className="flex items-center border p-3 rounded-md h-12">
            <CardNumberElement
              options={{ style: { base: { fontSize: '16px', color: '#32325d', '::placeholder': { color: '#a0aec0' } } } }}
              className="flex-1 h-full"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-gray-600 text-sm pl-1 mb-1 block">Expiry*</label>
            <div className="border p-3 rounded-md h-12">
              <CardExpiryElement
                options={{ style: { base: { fontSize: '16px', color: '#32325d', '::placeholder': { color: '#a0aec0' } } } }}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="text-gray-600 text-sm pl-1 mb-1 block">CVC*</label>
            <div className="border p-3 rounded-md h-12">
              <CardCvcElement
                options={{ style: { base: { fontSize: '16px', color: '#32325d', '::placeholder': { color: '#a0aec0' } } } }}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>

      {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
    </form>
  );
}; 

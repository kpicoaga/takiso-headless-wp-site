'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      router.push('/');
      return;
    }

    const stored = JSON.parse(localStorage.getItem('successToken') || '{}');

    if (stored?.token === token && Date.now() < stored.expiresAt) {
      setValid(true);
    } else {
      router.push('/');
    }
  }, [searchParams, router]);

  if (!valid) return <p className="text-center mt-20">Verifying payment...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-4">
      <h1 className="text-4xl font-bold text-green-700 mb-4">🎉 Payment Successful!</h1>
      <p className="text-lg text-green-800 mb-6 text-center">
        Thank you for your purchase!
        <br />
        We will send you an email with your payment and we will be in touch.
      </p>

      <Link
        href="/"
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<p className="text-center mt-20">Loading...</p>}>
      <SuccessContent />
    </Suspense>
  );
};
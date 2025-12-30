"use client";

import { useSearchParams } from 'next/navigation';

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const ref = searchParams.get('ref');

  return (
    <div style={{ padding: '2rem', textAlign: 'center', background: 'radial-gradient(circle at center, #aeccf3ff 0%, #e6b2dfff 25%, #fec7f2ff 50%, #90a0ee91 75%, #818cf8 100%)', minHeight: '100vh' }}>
      <h1>Payment Successful!</h1>
      <p>Thank you for your offering.</p>
      {ref && <p>Reference: <strong>{ref}</strong></p>}
    </div>
  );
}
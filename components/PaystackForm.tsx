"use client";

import React from "react";
import Link from "next/link";
import { Button } from '@/components/ui/button';

interface PaystackFormProps {
  defaultAmount?: string;
  defaultOfferingType?: string;
  title?: string;
  description?: string;
}

export default function PaystackForm({
  defaultAmount = "",
  defaultOfferingType = "tithe",
  title = "Complete Your Giving",
  description = "Make your donation using the details below."
}: PaystackFormProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-8 py-6 text-white">
          <h2 className="text-2xl font-bold text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            {title}
          </h2>
          <p className="text-white/90 text-center text-sm mt-2">{description}</p>
        </div>

        {/* Payment Details */}
        <div className="p-8">
          <div className="space-y-6">
            {/* Register/Login Prompt */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800 font-medium">
                Before you pay, please <Link href="/login" className="text-blue-600 hover:underline">login</Link> or <Link href="/join" className="text-blue-600 hover:underline">register</Link> so we can get your details.
              </p>
            </div>

            {/* Mobile Money */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">Mobile Money (Momo)</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Phone Number: <span className="font-mono font-bold">(0246819964) APOSTLE PRINCE OFOSU HENE</span></p>
              </div>
            </div>

            {/* Bank Account */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">Bank Account</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Bank: <span className="font-bold">GT Bank</span></p>
                <p className="text-sm text-gray-600">Account Number: <span className="font-mono font-bold">1234567890</span></p>
                <p className="text-sm text-gray-600">Account Name: <span className="font-bold">HGBMI</span></p>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Important:</strong> Please indicate the type of offering in your reference when making the payment (e.g., Tithe, Offerings, Partnership).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


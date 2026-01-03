"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

declare global {
  interface Window {
    PaystackPop: any;
  }
}

export default function PaymentComponent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const amount = searchParams.get("amount");
  const name = searchParams.get("name");
  const phone = searchParams.get("phone");
  const offeringType = searchParams.get("offeringType");
  const paystackKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const db = getFirestore();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !window.PaystackPop) return;

    console.log("Paystack Ready:", { email, amount, paystackKey });

    if (email && amount && paystackKey) {
      const handler = window.PaystackPop.setup({
        key: paystackKey,
        email,
        amount: parseInt(amount) * 100, // Paystack expects amount in kobo/pesewas
        currency: "GHS",
        metadata: {
          custom_fields: [
            { display_name: "Full Name", variable_name: "name", value: name || "" },
            { display_name: "Phone Number", variable_name: "phone", value: phone || "" },
            { display_name: "Offering Type", variable_name: "offering_type", value: offeringType || "" },
          ],
        },
        callback: function (response: any) {
          console.log("✅ Payment successful:", response);
          alert(`Payment complete! Reference: ${response.reference}`);

          // Firestore async call wrapped inside a normal function
          (async () => {
            try {
              const user = getAuth().currentUser;
              const offeringRef = doc(db, "offerings", response.reference);

              await setDoc(offeringRef, {
                amount: parseInt(amount),
                currency: "GHS",
                payerEmail: email,
                payerName: name,
                payerPhone: phone,
                offeringType,
                method: "Paystack",
                status: "verified",
                transactionRef: response.reference,
                payerId: user ? user.uid : null,
                timestamp: serverTimestamp(),
              });

              console.log("📦 Offering recorded in Firestore:", response.reference);
            } catch (err) {
              console.error("❌ Firestore write failed:", err);
            }
          })();
        },
        onClose: () => {
          console.log("❌ Payment cancelled");
        },
      });

      handler.openIframe();
    }
  }, [scriptLoaded, email, amount, name, phone, offeringType, paystackKey, db]);

  return (
    <div style={{ padding: "2rem", textAlign: "center", background: 'linear-gradient(to bottom, #3b82f6 0%, #ffffff 100%)', minHeight: '100vh' }}>
      <h2>Processing Payment</h2>
      <p>Please wait while Paystack loads...</p>
    </div>
  );
}


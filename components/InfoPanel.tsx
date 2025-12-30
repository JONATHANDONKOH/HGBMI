import React from "react";

export default function InfoPanel() {
  return (
    <div className="w-full max-w-2xl mx-auto mt-4 rounded-lg shadow-md p-6" style={{ background: "white" }}>
      {/* Add your content here */}
      <h3 className="text-xl font-bold mb-2 text-blue-900">Welcome to HGBMI Bookstore</h3>
      <p className="text-gray-700 text-base">Find resources to help you grow in faith, connect with community, and discover your purpose. Browse our selection of books, music, and sermons below.</p>
    </div>
  );
}

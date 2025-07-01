import React from "react";
import Link from "next/link";

export default function SustainableLiving() {
  return (
    <div className="min-h-screen bg-sky-100 px-6 py-12 text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <main className="flex-1 bg-white p-6 rounded shadow space-y-8">
          <h1 className="text-4xl font-bold text-green-700 mb-6">Sustainable Living</h1>

          <p className="text-lg">
            Eco-friendly products are designed to minimize environmental impact throughout their lifecycle—from production to disposal.
          </p>

          {/* Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Examples of Eco-Friendly Products</h2>
            <ul className="list-disc pl-6">
              <li>Reusable shopping bags</li>
              <li>Bamboo toothbrushes</li>
              <li>Biodegradable cleaning products</li>
              <li>Solar-powered chargers</li>
              <li>Recycled paper goods</li>
            </ul>
          </section>

          {/* Benefits */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
            <ul className="list-disc pl-6">
              <li>Reduces pollution and waste</li>
              <li>Supports sustainable practices</li>
              <li>Encourages responsible consumption</li>
              <li>Protects ecosystems and biodiversity</li>
            </ul>
          </section>

          {/* Making choices */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Making Sustainable Choices</h2>
            <p>
              Look for certifications like <strong>Organic</strong>, <strong>Fair Trade</strong>, or <strong>Recyclable</strong> to help identify products that align with sustainability goals.
            </p>
          </section>
        </main>

        {/* Sidebar: Resources */}
        <aside className="md:w-1/3 bg-green-50 p-6 rounded shadow h-fit">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Helpful Resources</h2>
          <ul className="list-disc pl-6 text-blue-700 space-y-2">
            <li>
              <Link
                href="https://www.earthhero.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                EarthHero – Eco-Friendly Marketplace
              </Link>
            </li>
            <li>
              <Link
                href="https://www.ecowatch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                EcoWatch – Environmental News & Tips
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
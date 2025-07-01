import React from "react";
import Link from "next/link";

export default function ClimateChange() {
  return (
    <div className="min-h-screen bg-sky-100 px-6 py-12 text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Main Content */}
        <main className="flex-1 bg-white p-6 rounded shadow">
          <h1 className="text-4xl font-bold text-red-600 mb-6">Climate Change</h1>

          <p className="mb-4 text-lg">
            Climate change refers to long-term shifts in temperatures and weather patterns,
            mainly caused by human activities like burning fossil fuels.
          </p>

          <div className="space-y-8">
            {/* Causes */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Key Causes</h2>
              <ul className="list-disc pl-6">
                <li>Carbon emissions from vehicles and industries</li>
                <li>Deforestation and land use changes</li>
                <li>Overdependence on fossil fuels</li>
                <li>Agricultural activities and methane release</li>
              </ul>
            </section>

            {/* Effects */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Effects</h2>
              <ul className="list-disc pl-6">
                <li>Rising global temperatures</li>
                <li>Severe weather events (droughts, floods)</li>
                <li>Melting glaciers and rising sea levels</li>
                <li>Threats to food and water security</li>
              </ul>
            </section>

            {/* Solutions */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">What We Can Do</h2>
              <ul className="list-disc pl-6">
                <li>Transition to renewable energy</li>
                <li>Plant trees and protect forests</li>
                <li>Promote sustainable lifestyles</li>
                <li>Advocate for strong climate policies</li>
              </ul>
            </section>
          </div>
        </main>

        {/* Sidebar: Resources */}
        <aside className="w-full md:w-1/3 bg-white p-6 rounded shadow h-fit">
          <h2 className="text-2xl font-semibold mb-4">Resources & References</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-700">
            <li>
              <Link
                href="https://www.ipcc.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                IPCC Reports
              </Link>
            </li>
            <li>
              <Link
                href="https://unfccc.int"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                UN Climate Framework
              </Link>
            </li>
            <li>
              <Link
                href="/pdfs/climate-action-guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Climate Action PDF Guide
              </Link>
            </li>
            <li>
              <Link
                href="https://www.un.org/sustainabledevelopment/climate-change/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                UN SDG: Climate Change
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}



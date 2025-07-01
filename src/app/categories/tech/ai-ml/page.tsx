import React from "react";

export default function Ai() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Artificial Intelligence</h1>

        <p className="mb-4 text-lg">
          Explore how Artificial Intelligence (AI) is transforming industries, driving innovation, and shaping the future of technology.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Core Concepts</h2>
            <ul className="list-disc pl-6">
              <li>Machine Learning (ML)</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Computer Vision</li>
              <li>Neural Networks</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Applications</h2>
            <ul className="list-disc pl-6">
              <li>AI in Healthcare</li>
              <li>Smart Assistants</li>
              <li>Autonomous Vehicles</li>
              <li>AI-driven Analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Tools & Libraries</h2>
            <p>Popular tools include TensorFlow, PyTorch, OpenAI API, and Scikit-learn.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
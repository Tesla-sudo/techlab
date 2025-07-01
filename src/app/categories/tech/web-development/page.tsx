import React from "react";

export default function Webdevelopment() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Web Development</h1>

        <p className="mb-4 text-lg">
          Welcome to the Web Development section. Here, you will explore modern tools and practices
          used to build fast, accessible, and responsive websites.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
            <ul className="list-disc pl-6">
              <li>HTML, CSS & JavaScript</li>
              <li>React & Next.js</li>
              <li>Tailwind CSS</li>
              <li>API Integration</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Best Practices</h2>
            <ul className="list-disc pl-6">
                <li>Responsive design</li>
              <li>SEO optimization</li>
              <li>Accessibility standards (WCAG)</li>
              <li>Performance tuning</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Learning Resources</h2>
            <p>
              Explore platforms like MDN Web Docs, freeCodeCamp, and official docs for in-depth tutorials and guides.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

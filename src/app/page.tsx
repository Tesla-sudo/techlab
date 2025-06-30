
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-sky-50 min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto py-32 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Coding for a{" "}
          <span className="bg-gradient-to-r from-green-500 to-sky-500 bg-clip-text text-transparent">
            Sustainable Future
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Where technology meets sustainability. Learn, connect, and build solutions for climate action while mastering your development skills.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-6 mb-20 flex-wrap">
          <Link href="/about">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg shadow transition">
              Learn More
            </button>
          </Link>
          <Link href="/contact">
            <button className="border border-sky-600 text-sky-700 hover:bg-sky-100 px-6 py-3 rounded-lg transition">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Feature Sections */}
        <div className="grid md:grid-cols-3 gap-10 mt-12 text-left">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-sky-700 mb-2">Green Tech Education</h3>
            <p>
              Access resources that teach how to build eco-friendly web applications, understand tech&rsquo;s impact on the planet, and explore sustainable coding practices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-sky-700 mb-2">Climate Action Stories</h3>
            <p>
              Be inspired by real stories of youth using technology to fight climate change — from solar-powered IoT devices to digital activism.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-sky-700 mb-2">Sustainable Tools</h3>
            <p>
              Discover open-source tools, projects, and platforms focused on sustainability — and contribute your skills to make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


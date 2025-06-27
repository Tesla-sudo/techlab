export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-sky-50 px-6 py-20 pb-28">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-80 backdrop-blur-sm shadow-lg rounded-xl p-10">
        <h1 className="text-4xl font-bold text-sky-800 mb-8 text-center">
          About Us
        </h1>

        <section className="mb-8 text-gray-800">
          <p>
            Welcome to our platform — a dedicated space where passion for sustainability meets the power of technology.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-700 mb-3">Our Mission</h2>
          <p className="text-gray-700">
            We believe that a healthier planet and smarter technology can go hand in hand. Our goal is to inspire, educate, and empower individuals and communities to adopt sustainable practices while also understanding the complex challenges and opportunities technology presents today.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-700 mb-3">Why Sustainability?</h2>
          <p className="text-gray-700">
            Climate change, resource depletion, and environmental degradation affect us all. By advocating for sustainable living, renewable energy, responsible consumption, and conservation efforts, we aim to be part of the global solution that preserves our planet for future generations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-700 mb-3">Why Tech Awareness?</h2>
          <p className="text-gray-700">
            Technology shapes the way we live, work, and interact. But it also comes with its own set of challenges—like e-waste, data privacy, and ethical AI use. We seek to enlighten our community about these issues, promoting tech solutions that are responsible, accessible, and aligned with sustainable values.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-700 mb-3">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Inspiring stories from young changemakers making a difference in climate action</li>
            <li>Educational resources about eco-friendly technologies and green innovations</li>
            <li>Practical tips for reducing your carbon footprint in daily tech use</li>
            <li>Discussions on the intersection of technology and environmental stewardship</li>
          </ul>
        </section>

        <section className="mt-10 text-center text-lg font-semibold text-sky-800">
          Join us in building a future where innovation and sustainability empower each other for the good of our planet and society.
        </section>
      </div>
    </div>
  );
}

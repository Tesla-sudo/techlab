


import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-sky-100 text-gray-800 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Site info */}
        <div>
          <h2 className="text-lg font-semibold text-sky-700 mb-2">TechLab</h2>
          <p className="text-sm">
            Building a sustainable future through tech, education, and awareness.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-sky-700 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/featured" className="hover:underline">Featured Youths</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-sm font-semibold text-sky-700 mb-2">Contact Us</h3>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <EnvelopeIcon className="h-4 w-4 text-sky-600" />
            <span>difrelen@gmail.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-1 text-sm">
            <PhoneIcon className="h-4 w-4 text-sky-600" />
            <span>+254 717546693</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-sky-200 pt-4 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} TechLab. Designed with care for sustainability.
      </div>
    </footer>
  );
}

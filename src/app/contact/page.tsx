'use client';

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div className="bg-sky-100 min-h-screen flex items-center mb-0 pb-0 justify-center px-4 space-y-2 ">
      <div className="max-w-2xl w-full py-32 bg-white rounded-xl shadow-xl p-8 md:p-12 mb-0 pb-0">
        <h1 className="text-4xl font-bold text-center text-sky-700 mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10 text-base md:text-lg">
          We're excited to connect with you! Whether you're passionate about sustainability, curious about tech, or want to collaborate — don't hesitate to reach out.
        </p>

        <div className="space-y-8">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <PhoneIcon className="h-6 w-6 text-sky-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
              <p className="text-gray-700">+254 717546693</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <EnvelopeIcon className="h-6 w-6 text-sky-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Email</h2>
              <p className="text-gray-700">difrelen@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPinIcon className="h-6 w-6 text-sky-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Address</h2>
              <p className="text-gray-700">
                Moi University,<br />
                Eldoret, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


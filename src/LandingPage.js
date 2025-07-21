import React from 'react';
import { FaWrench, FaSnowflake, FaTools } from 'react-icons/fa';

function LandingPage() {
    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex flex-col items-center justify-center px-4 py-20">
            {/* Hero Content */}
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4">
                    Stay Cool with AC Repair & Service
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Trusted professionals for AC repair, installation, and maintenance—right at your doorstep.
                </p>
                <a
                    href="/services"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow transition duration-300"
                >
                    View Services
                </a>
            </div>

            {/* Features */}
            <div className="mt-16 grid sm:grid-cols-3 gap-8 max-w-5xl text-center">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <FaWrench className="text-blue-600 text-4xl mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Expert Technicians</h3>
                    <p className="text-sm text-gray-600">Verified professionals with years of experience.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <FaSnowflake className="text-blue-600 text-4xl mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Cooling Guarantee</h3>
                    <p className="text-sm text-gray-600">We ensure your AC runs like new again.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <FaTools className="text-blue-600 text-4xl mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Transparent Pricing</h3>
                    <p className="text-sm text-gray-600">No hidden fees. Honest service, every time.</p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

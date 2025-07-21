import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="relative bg-white/60 backdrop-blur border-t border-gray-200 mt-8 sm:mt-16">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
                {/* Logo & Tagline */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <img src="./images/logo.png" alt="AC Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                        <h2 className="text-lg sm:text-xl font-extrabold text-blue-700">AC Repair & Service</h2>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">Your trusted AC service partner across India.</p>
                    <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
                        <a href="#" className="bg-blue-100 text-blue-700 hover:bg-blue-200 p-2 rounded-full shadow transition" aria-label="Facebook">
                            <FaFacebookF size={14} />
                        </a>
                        <a href="#" className="bg-blue-100 text-blue-700 hover:bg-blue-200 p-2 rounded-full shadow transition" aria-label="Twitter">
                            <FaTwitter size={14} />
                        </a>
                        <a href="#" className="bg-blue-100 text-blue-700 hover:bg-blue-200 p-2 rounded-full shadow transition" aria-label="Instagram">
                            <FaInstagram size={14} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start mt-6 md:mt-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3">Quick Links</h3>
                    <ul className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
                        <li><a href="/services" className="hover:text-blue-700 transition">Services</a></li>
                        <li><a href="#" className="hover:text-blue-700 transition">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-700 transition">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-700 transition">Careers</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right mt-6 md:mt-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3">Get in Touch</h3>
                    <p className="text-xs sm:text-sm text-gray-600">📧 support@acrepairservice.com</p>
                    <p className="text-xs sm:text-sm text-gray-600">📞 +91 98765 43210</p>
                    <p className="text-xs text-gray-400 mt-1 sm:mt-2">Available Mon–Sat: 9am – 8pm</p>
                </div>
            </div>

            {/* Bottom strip */}
            <div className="text-center text-xs text-gray-500 py-3 sm:py-4 border-t border-gray-100 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-100">
                &copy; {new Date().getFullYear()} <strong>AC Repair & Service</strong> • Built with 💙 in India
            </div>
        </footer>
    );
}

export default Footer;

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="relative bg-white/60 backdrop-blur border-t border-gray-200 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo & Tagline */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-3 mb-3">
                        <img src="./images/logo.png" alt="AC Logo" className="w-10 h-10 object-contain" />
                        <h2 className="text-xl font-extrabold text-blue-700">AC Repair & Service</h2>
                    </div>
                    <p className="text-sm text-gray-600">Your trusted AC service partner across India.</p>
                    <div className="flex gap-4 mt-4">
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
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Quick Links</h3>
                    <ul className="flex flex-col gap-2 text-sm text-gray-600">
                        <li><a href="/services" className="hover:text-blue-700 transition">Services</a></li>
                        <li><a href="#" className="hover:text-blue-700 transition">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-700 transition">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-700 transition">Careers</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Get in Touch</h3>
                    <p className="text-sm text-gray-600">📧 support@acrepairservice.com</p>
                    <p className="text-sm text-gray-600">📞 +91 98765 43210</p>
                    <p className="text-xs text-gray-400 mt-2">Available Mon–Sat: 9am – 8pm</p>
                </div>
            </div>

            {/* Bottom strip */}
            <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-100 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-100">
                &copy; {new Date().getFullYear()} <strong>AC Repair & Service</strong> • Built with 💙 in India
            </div>
        </footer>
    );
}

export default Footer;

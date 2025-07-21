import React from 'react';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-100 border-t border-blue-200 mt-12">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Brand and tagline */}
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-2xl font-extrabold text-blue-700 tracking-tight mb-1">UrbanCool</span>
                    <span className="text-sm text-gray-500 mb-2">Your trusted AC service partner</span>
                    <div className="flex gap-3 mt-2">
                        <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                {/* Quick Links */}
                <div className="flex flex-col items-center">
                    <span className="font-semibold text-gray-700 mb-2">Quick Links</span>
                    <ul className="flex flex-col gap-1 text-sm text-gray-600">
                        <li><a href="/services" className="hover:text-blue-700 transition">Services</a></li>
                        <li><a href="#" className="hover:text-blue-700 transition">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-700 transition">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-700 transition">Careers</a></li>
                    </ul>
                </div>
                {/* Contact Info */}
                <div className="flex flex-col items-center md:items-end">
                    <span className="font-semibold text-gray-700 mb-2">Contact</span>
                    <span className="text-sm text-gray-600">support@urbancool.com</span>
                    <span className="text-sm text-gray-600">+91 98765 43210</span>
                    <span className="text-xs text-gray-400 mt-2">Mon-Sat: 9am - 8pm</span>
                </div>
            </div>
            <div className="text-center text-xs text-gray-400 py-4 border-t border-blue-100 bg-gradient-to-r from-blue-100 via-purple-50 to-blue-50">
                &copy; {new Date().getFullYear()} UrbanCool. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer; 
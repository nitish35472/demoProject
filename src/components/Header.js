import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm border-b border-gray-200 px-6 py-3 flex justify-between items-center">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
                <img src="./images/logo.png" alt="AC Logo" className="w-10 h-10 object-contain" />
                <span className="text-2xl font-bold text-blue-600">AC Repair & Service</span>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex gap-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-lg text-sm font-medium transition ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`
                    }
                    end
                >
                    Home
                </NavLink>
                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-lg text-sm font-medium transition ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`
                    }
                >
                    Services
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;

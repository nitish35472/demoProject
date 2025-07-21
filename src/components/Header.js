import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [navOpen, setNavOpen] = React.useState(false);
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm border-b border-gray-200 px-3 sm:px-6 py-2 sm:py-3 flex flex-col sm:flex-row justify-between items-center">
            {/* Logo and Brand */}
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                    <img src="./images/logo.png" alt="AC Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                    <span className="text-lg sm:text-2xl font-bold text-blue-600">AC Repair & Service</span>
                </div>
                {/* Mobile nav toggle */}
                <button className="sm:hidden p-2" onClick={() => setNavOpen(v => !v)} aria-label="Toggle navigation">
                    <span className="text-2xl">☰</span>
                </button>
            </div>
            {/* Navigation Tabs */}
            <nav className={`flex-col sm:flex-row flex gap-2 sm:gap-4 w-full sm:w-auto ${navOpen ? 'flex' : 'hidden'} sm:flex mt-2 sm:mt-0`}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`
                    }
                    end
                    onClick={() => setNavOpen(false)}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        `px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`
                    }
                    onClick={() => setNavOpen(false)}
                >
                    Services
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
